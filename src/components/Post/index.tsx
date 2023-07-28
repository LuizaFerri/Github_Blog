import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Header } from "../Header";
import {
  ContainerPostId,
  Container,
  DivInfosUser,
  DivLinks,
  TitlePost,
  BodyPost,
} from "./styles";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import arrow from "../../assets/arrow.svg";
import arrowUp from "../../assets/arrowUp.svg";
import comment from "../../assets/comment.svg";
import date from "../../assets/date.svg";
import user from "../../assets/iconGithub.svg";

interface User {
  login: string;
}

interface Post {
  html_url: string;
  user: User;
  title: string;
  comments: number;
  created_at: string;
  body: string;
}

const components = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  code({ node, inline, className, children, ...props }: any) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter
        style={dracula}
        language={match[1]}
        PreTag="div"
        children={String(children).replace(/\n$/, "")}
        {...props}
      />
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};

export function Post() {
  const { id } = useParams();
  const [post, setPost] = useState<Post | undefined>();
  const body = post?.body || "";

  useEffect(() => {
    axios
      .get<Post>(
        `https://api.github.com/repos/luizaferri/github_Blog/issues/${id}`
      )
      .then((response) => setPost(response.data));
  }, [id]);

  return (
    <>
      <Header />

      {post && (
        <Container>
          <ContainerPostId>
            <div>
              <DivLinks>
                <Link to="/">
                  {" "}
                  <img src={arrow} /> VOLTAR{" "}
                </Link>
                <Link to={post.html_url} target="_blank">
                  VER NO GITHUB <img src={arrowUp} />
                </Link>
              </DivLinks>
              <TitlePost>{post.title}</TitlePost>
              <DivInfosUser>
                <div>
                  <img src={user} />
                  <p> {post.user.login} </p>
                </div>
                <div>
                  {" "}
                  <img src={date} />
                  <p>
                    {formatDistanceToNow(new Date(post.created_at), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </p>
                </div>
                <div>
                  <img src={comment} />
                  <p>{post.comments} comentários </p>
                </div>
              </DivInfosUser>
            </div>
          </ContainerPostId>
          <BodyPost>
            <ReactMarkdown components={components} children={body} />
          </BodyPost>
        </Container>
      )}
    </>
  );
}
