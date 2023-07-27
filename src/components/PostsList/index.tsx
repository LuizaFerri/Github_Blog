import { useContext } from "react";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Post, Body, ContainerPost, CardLimit, InfosPost } from "./style";
import { ContextPost } from "../../contexts/ContextPost";

export function PostsList() {
  const { postData } = useContext(ContextPost);
  return (
    <CardLimit>
      <ContainerPost>
        {postData.map((post) => (
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
                {post.body.length > 250
                  ? post.body.substring(0, 250) + "..."
                  : post.body}
              </Body>
            </div>
          </Post>
        ))}
      </ContainerPost>
    </CardLimit>
  );
}
