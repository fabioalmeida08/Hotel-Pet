import styled from "styled-components";

const Container = styled.div`
  min-width : 100vw;
`;

const CardUser = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  justify-content: center;
  display: flex;
  width: 92%;
  min-width: 280px;
  height: 738px;
  background: #FFFFFF;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 49px;

  @media (min-width: 580px){
    margin-left: auto;
    margin-right: auto;
    width: 90%;
  }

  @media (min-width: 1260px){
    width: 1200px;
  }
`;

export { Container, CardUser};
