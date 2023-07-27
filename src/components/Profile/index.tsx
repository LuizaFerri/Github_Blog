import {
  ContainerProfile,
  Avatar,
  ContainerInfo,
  Name,
  Text,
  ContainerProfileinfos,
  ContainerProfileinfos2,
} from "./styles";
import { useEffect, useState } from "react";
import axios from "axios";
import iconGithub from "../../assets/iconGithub.svg";
import iconCompany from "../../assets/iconCompany.svg";
import iconFollowers from "../../assets/iconFollowers.svg";

interface GithubProfile {
  avatar_url: string;
  name: string;
  bio: string;
  company: string;
  followers: number;
  login: string;
}

export function Profile() {
  const [profileData, setProfileData] = useState<GithubProfile | null>(null);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/luizaferri")
      .then((response) => setProfileData(response.data))
      .catch((error) => console.error("There was an error!", error));
  }, []);

  return (
    <ContainerProfile>
      <div>
        {profileData && (
          <ContainerProfileinfos>
            <div>
              <Avatar src={profileData.avatar_url} alt="profile" />
            </div>
            <ContainerProfileinfos2>
              <div>
                <Name>{profileData.name}</Name>
              </div>
              <div>
                <Text>{profileData.bio}</Text>
              </div>
              <ContainerInfo>
                <Text>
                  <img src={iconGithub} alt="github" />
                  {profileData.login}
                </Text>
                <Text>
                  <img src={iconCompany} alt="company" />
                  {profileData.company}
                </Text>
                <Text>
                  <img src={iconFollowers} alt="followers" />
                  {profileData.followers} seguidores
                </Text>
              </ContainerInfo>
            </ContainerProfileinfos2>
          </ContainerProfileinfos>
        )}
      </div>
    </ContainerProfile>
  );
}
