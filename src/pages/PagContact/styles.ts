import styled from "styled-components";

const Container = styled.div`
  min-width: 100vw;
`;

const CardUser = styled.div`
margin-left: auto;
    margin-right: auto;
  display: flex;
  justify-content: center;
  width: 92%;
  min-width: 300px;
  height: 738px;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 49px;

  @media (min-width: 580px) {
    margin-left: auto;
    margin-right: auto;
    width: 90%;
  }

  @media (min-width: 1260px) {
    width: 1200px;
  }
`;

export { Container, CardUser };
