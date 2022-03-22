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
    font-size: var(--subtitle);
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
  p{
    max-width: 30ch;
    font-size: var(--info);
    color:  ${(prop) =>
      prop.background === true ? " var(--grey-2)" : "var(--grey-3)"};;
  }
  @media (min-width: 1024px) {
    flex-direction: ${(prop)=> prop.invert === true ? "row": "row-reverse"};
    justify-content: center;
    height: 620px;
    font-size: var(--paragraph-2);
    }
`;
const DivOrganizer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
  p{
    max-width: 30ch;
    font-size: var(--info);
    color: var( --white);
  }
  @media(min-width: 768px){
    p{
      color:var( --grey-2) ;
      font-size: var(  --paragraph-2);

    }
  }
`;

export { DivWrapper, DivOrganizer };
