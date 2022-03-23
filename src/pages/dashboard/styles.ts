import styled from "styled-components";

const Container = styled.div`
  max-width: 320px;
`;

const CardUser = styled.div`

  display: flex;

  width: 90%;
  max-width: 500px; 
  min-width: 320px;
  height: 738px;
  background: var(--white);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 49px;

  @media (min-width: 650px){
    width: 90%;
    max-width: 500px;
  }

  @media (min-width: 1260px){
    width: 1200px;
  }
`;

export { Container, CardUser};
