import styled from "styled-components";

export const Container2 = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0px;
  background-color: rgba(1, 1, 1, 0.6);
  top: 0px;
`

const DivWrapper = styled.div`
  box-shadow: 1px 1px 1px 1px gray;
  display: flex;
  justify-content: center;
  width: 280px;
  height: 440px;
  font-family: var(--font-family-3);
  border-radius: 8px;
  background-color: var(--white);
  position: relative;

  .close-form{
  background: #FF3344;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 50%;
  position: absolute;
  right: -5px;
  top: -5px;
  transition: .3s;

  :hover{
    filter: brightness(.7);
  }
}

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
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 16px;

  
  h1 {
    font-size: 16px;
    color: var(--grey-3);
    text-decoration: underline var(--secundary-1) 3px;
  }
  img {
    width: 30px;
    height: 30px;
  }

  @media (min-width: 600px){
    margin-top: 12px;
    h1{
      font-size: 20px;
      
    }
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
    color: var(--white);
    margin-top: 8px;
    background-color: var(--primary-1);
    cursor: pointer;
  }
  button:hover{
    background: linear-gradient(180deg, rgba(111, 134, 255, 0.69) 0%, #354FD8 100%);;
  }
  .backButton {
    background-color: var(--secundary-1);
  }
  .backButton:hover{
    background: linear-gradient(180deg, rgba(244, 169, 25, 0.6) 0%, #F4A919 100%);
  }
  @media (min-width: 768px) {
    margin-left: 1px;
  }
`;
export { StyledForm, DivButtons, DivWrapper, DivHeader, DivImgDesktop };
