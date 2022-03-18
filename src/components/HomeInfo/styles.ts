import styled from "styled-components";

interface backGroundType {
  background?: boolean;
  invert?: boolean;
}
const DivWrapper = styled.div<backGroundType>`
  width: 100vw;
  height: 206px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(prop) =>
    prop.background !== true ? "var(--secundary-1)" : "var(--primary-1)"};
  span {
    height: 0px;
    width: 1px;
  }
  div {
    display: flex;
    position: absolute;
  }
  img {
    width: 100vw;
    height: 157px;
  }
  h1 {
    color: var(--white);
    strong {
      color: ${(prop) =>
        prop.background !== true ? "var(--primary-1)" : "var(--secundary-1)"};
    }
  }
  @media (min-width: 768px) {
    flex-direction: ${(prop)=> prop.invert === true ? "row": "row-reverse"};
    justify-content: center;
    height: 520px;
    background-color: ${(prop) =>
      prop.background === true ? "#E8E8E8" : "var(--white)"};
    div {
      display: block;
      position: static;
    }
    h1 {
     color: var(--grey-3);
      font-size: var(--paragraph-1);
      strong {
        font-size: var(--paragraph-1);
        color: ${(prop) =>
          prop.background !== true
            ? "var(--secundary-1)"
            : "var(--secundary-1)"};
      }
    }
    img {
      margin: 0px 10px;
      width: 375px;
    height: 383px;

    }
  }
  @media (min-width: 1024px) {
    flex-direction: ${(prop)=> prop.invert === true ? "row": "row-reverse"};
    justify-content: center;
    height: 620px;}
`;
const DivOrganizer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  p{
    max-width: 30ch;
    font-size: var(--paragraph-2);
    color: var( --grey-2);
  }
`;

export { DivWrapper, DivOrganizer };
