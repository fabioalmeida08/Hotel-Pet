import styled from "styled-components";

const DivWrapper = styled.div`
  box-shadow: 1px 1px 1px 1px gray;
  display: flex;
  justify-content: center;
  width: 280px;
  height: 440px;
  border-radius: 8px;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding: 0px 50px 0px 0px;
    width: 400px;
    height: 436px;
  }
`;

const StyledForm = styled.form`
  padding: 0px 30px;
  @media (min-width: 768px) {
    padding: 0px 0px 0px 10px;
  }
`;

const DivHeader = styled.div`
  display: flex;
  flex-direction: "row";
  align-items: center;
  justify-content: space-around;
  padding-right: 20px;
  width: 180px;
  h1 {
    font-size: 16px;
    color: #333333;
    text-decoration: underline #f4a91999 3px;
  }
  img {
    width: 30px;
    height: 30px;
  }
`;
const DivImgDesktop = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
    img {
      height: 437.5px;
      width: 169px;
    }
  }
`;
const DivButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 12px;
  width: 192px;

  button {
    width: 170px;
    height: 35px;
    border-radius: 5px;
    border-style: none;
    color: #ffff;
    margin-top: 8px;
    background-color: #354fd8;
  }
  .backButton {
    background-color: orange;
  }
  @media (min-width: 768px) {
    margin-left: 1px;
  }
`;
export { StyledForm, DivButtons, DivWrapper, DivHeader, DivImgDesktop };
