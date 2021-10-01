import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: center;
  text-align: center;
  height: 100vh;
`;

export const Content = styled.div`
  height: 400px;
  width: 240px;
  background: #fff;
  h1 {
    font-size: 1.5rem;
    color: #021ca5;
    background-color: #fff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  }
  div {
    background-color: #fff;
  }
  h4 {
    background-color: #fff;
    margin-top: 10px;
  }

  @media screen and (min-width: 768px) {
    width: 700px;
  }
`;
