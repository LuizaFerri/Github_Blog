import { Header } from "../../components/Header";
import { PostsList } from "../../components/PostsList";
import { Profile } from "../../components/Profile";
import { SearchForm } from "../../components/SearchForm";
import { Container } from "./styles";
import { ContextPostProvider } from "../../contexts/ContextPost";

export function Blog() {
  return (
    <ContextPostProvider>
      <Header />
      <Container>
        <Profile />
        <SearchForm />
      </Container>
      <PostsList />
    </ContextPostProvider>
  );
}
