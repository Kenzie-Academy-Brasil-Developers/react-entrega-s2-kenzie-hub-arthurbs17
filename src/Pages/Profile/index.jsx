import axios from "axios";
import { useEffect, useState } from "react";
import CardsTechs from "../../components/CardTechs";
import FormAddTechs from "../../components/FormAddTechs";
import { Container, Content } from "./styles";

const Profile = () => {
  const [user, setUser] = useState({});
  const [token, setToken] = useState(() => {
    const localToken = localStorage.getItem("token") || "";
    return JSON.parse(localToken);
  });
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    axios
      .get("https://kenziehub.herokuapp.com/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setUser(response.data);
        setTechs(response.data.techs);
      })
      .catch((e) => console.log(e));
  });

  return (
    <Container>
      <Content>
        <h1>{user.name}</h1>
        <div>
          <FormAddTechs token={token} />
          <CardsTechs list={techs} />
        </div>
      </Content>
    </Container>
  );
};

export default Profile;
