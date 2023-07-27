import { useContext } from "react";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Post, Body, ContainerPost, CardLimit, InfosPost } from "./style";
import { ContextPost } from "../../contexts/ContextPost";
import ReactMarkdown from "react-markdown";

export function PostsList() {
  const { postData } = useContext(ContextPost);
  const maxLength = 200;
  return (
    <CardLimit>
      <ContainerPost>
        {postData.map((post) => {
          let markdown = post.body;

          if (markdown.length > maxLength) {
            markdown = markdown.substring(0, maxLength) + "...";
          }

          return (
            <Post key={post.number}>
              <div>
                <InfosPost>
                  <h2>{post.title}</h2>
                  <p>
                    {formatDistanceToNow(new Date(post.created_at), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </p>
                </InfosPost>
                <Body>
                  <ReactMarkdown children={markdown} />
                </Body>
              </div>
            </Post>
          );
        })}
      </ContainerPost>
    </CardLimit>
  );
}
