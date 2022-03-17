import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 100vw;
  max-height: 340px;
  width: 45vw;
  max-width: 200px;
`
const DivWrapper = styled.div`
  display: flex;
  flex-direction: "row";
  height: 317px;
  width: 308px;
  border-radius: 15.8px;
  background-color: #fff;
  img {
    height: 100vw;
    max-height: 350px;
    width: 38vw;
    max-width: 150px;
  }
`;
const DivHeader = styled.div`
  display: flex;
  flex-direction: "row";
  align-items: center;
  justify-content: space-around;
  width: 180px;
  h1 {
    font-size: 16px;
  }
  img {
    width: 30px;
    height: 30px;
  }
`;
const DivForm = styled.div`
  height: 80vw;
  max-height: 350px;
  width: 58vw;
  max-width: 150px;
  padding-left: 10px;
`;
export { StyledForm, DivForm, DivWrapper, DivHeader };
