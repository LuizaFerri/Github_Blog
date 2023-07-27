import { Header } from "../../components/Header";
import { PostsList } from "../../components/PostsList";
import { Profile } from "../../components/Profile";
import { SearchForm } from "../../components/SearchForm";
import { GlobalStyle } from "../../styles/global";
import { Container } from "./styles";
import { ContextPostProvider } from "../../contexts/ContextPost";

export function Blog() {
  return (
    <ContextPostProvider>
      <GlobalStyle />
      <Header />
      <Container>
        <Profile />
        <SearchForm />
      </Container>
      <PostsList />
    </ContextPostProvider>
  );
}
