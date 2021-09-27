import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
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
  }
  div {
    background-color: #fff;
    button + button {
      margin-left: 1rem;
    }

    span {
      color: red;
      font-size: 0.9rem;
      background-color: #fff;
    }
  }
`;
