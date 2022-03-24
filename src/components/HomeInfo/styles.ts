import styled from "styled-components";

interface backGroundType {
  background?: boolean;
  invert?: boolean;
}
const DivWrapper = styled.div<backGroundType>`
  width: 100vw;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: 0 auto;
  padding: 0px 300px 0px 300px;
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

  p{
    color: var(--white);
  }
  @media (min-width: 768px) {
    flex-direction: ${(prop)=> prop.invert === true ? "row": "row-reverse"};
    gap: ${(prop)=> prop.invert === false && "30%"};
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
      width: 90%;
      max-width: 375px;
      height: 90%;
      max-height: 383px;

    }
  }
  p{
    max-width: 30ch;
    font-size: var(--info);
    color: var(--white);
  }
  @media (min-width: 1024px) {
    flex-direction: ${(prop)=> prop.invert === true ? "row": "row-reverse"};
    justify-content: center;
    height: 620px;
    font-size: var(--paragraph-2);
    }

    @media (max-width: 1142px) {
      padding: 100px;
    }

    @media (max-width: 1364px) {
      gap: ${(prop)=> prop.invert === false && "10%"};
    }
`;
const DivOrganizer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  overflow: hidden;

  img{
    width: 500px;
  }
  p{
    max-width: 30ch;
    font-size: 16px;
  }

  @media (min-width: 766px){
    p{
      color: var(--gray-2);
    }
  }
`;

export { DivWrapper, DivOrganizer };
