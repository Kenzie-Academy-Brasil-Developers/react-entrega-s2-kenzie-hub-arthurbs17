import { Container, Content } from "./styles";
const CardsTechs = ({ list }) => {
  return (
    <Container>
      <Content>
        {list.map((tech, index) => (
          <li key={index}>
            <p>Tech: {tech.title}</p>
            <p>Status: {tech.status}</p>
          </li>
        ))}
      </Content>
    </Container>
  );
};

export default CardsTechs;
