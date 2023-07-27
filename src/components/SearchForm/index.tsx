import {
  InputSearch,
  InfosPublication,
  ButtonSearch,
  FormSearch,
} from "./styles";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { ContextPost } from "../../contexts/ContextPost";
import { MagnifyingGlass } from "@phosphor-icons/react";

const searchFormSchema = z.object({
  query: z.string().nonempty({ message: "Campo obrigatório" }),
});

type SearchFormSchema = z.infer<typeof searchFormSchema>;

export function SearchForm() {
  const { fetchPosts, fetchAllPosts, postData } = useContext(ContextPost);
  const { register, handleSubmit } = useForm<SearchFormSchema>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchForm(data: SearchFormSchema) {
    await fetchPosts(data.query);
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "") {
      fetchAllPosts();
    }
  };

  return (
    <div>
      <InfosPublication>
        <div>
          <span>Publicações</span>
        </div>
        <div>
          <p>{postData.length} publicações</p>
        </div>
      </InfosPublication>
      <FormSearch onSubmit={handleSubmit(handleSearchForm)}>
        <InputSearch
          type="text"
          placeholder="Buscar conteúdo"
          {...register("query")}
          onChange={handleInputChange}
          required
        />
        <ButtonSearch type="submit">
          <MagnifyingGlass />
        </ButtonSearch>
      </FormSearch>
    </div>
  );
}
