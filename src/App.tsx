import { Header } from "./components/Header";
import { Profile } from "./components/Profile";
import { GlobalStyle } from "./styles/global";
import {Container} from "./styles"

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        <Profile />
      </Container>
      
    </>
  );
}

export default App;
