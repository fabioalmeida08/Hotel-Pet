import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  background-color: var(--primary-1);
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 200px;

  @media screen and (min-width: 905px) {
    gap: 400px;
  }

  @media screen and (min-width: 1301px) {
    gap: 800px;
  }
`;

export const ButtonNav = styled.div`
  color: var(--white);
  font-size: var(--paragraph-2);
  //font-family: var(--font-family-1);
  font-weight: bold;
  cursor: pointer;
  :hover {
    color: var(--secundary-1);
  }
`;

export const Home = styled.div`
  display: flex;
  align-items: center;
  color: var(--white);
  gap: 6px;

  :hover {
    color: var(--secundary-1);
  }
`;

export const DivNav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
  align-items: center;
`;

export const ButtonLogin = styled.div`
  background: linear-gradient(180deg, rgba(244, 169, 25, 0.6) 0%, #F4A919 100%);
  color: var(--white);
  font-size: var(--paragraph-2);
  font-weight: bold;
  padding: 10px 20px 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  box-shadow: 2px 4px 15px rgba(0, 0, 0, 0.25);

  :hover {
    background: linear-gradient(180deg, #FFEFCF 0%, #F4A919 100%)
  }
`
