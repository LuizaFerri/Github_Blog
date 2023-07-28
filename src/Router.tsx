import { Routes, Route } from "react-router-dom";
import { Blog } from "./Pages/Blog";
import { Post } from "./components/Post";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";

export function Router() {
  return (
    <ThemeProvider theme={GlobalStyle}>
    <Routes>
      <Route path="/" element={<Blog />} />
      <Route path="/post/:id" element={<Post />} />
    </Routes>
    <GlobalStyle />
    </ThemeProvider>
  );
}
