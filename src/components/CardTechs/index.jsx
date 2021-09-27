import { Container, Content } from "./styles";
import Button from "../Button";
import axios from "axios";
const CardsTechs = ({ list, token, setTechs }) => {
  const deleteTech = (techId) => {
    axios.delete(`https://kenziehub.herokuapp.com/users/techs/${techId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    setTechs(list.filter((tech) => tech.id !== techId));
    console.log(list);
  };

  return (
    <Container>
      <Content>
        {list.map((tech, index) => (
          <li key={index}>
            <p>Tech: {tech.title}</p>
            <p>Status: {tech.status}</p>
            <Button formSchema onClick={() => deleteTech(tech.id)}>
              Delete
            </Button>
          </li>
        ))}
      </Content>
    </Container>
  );
};

export default CardsTechs;
