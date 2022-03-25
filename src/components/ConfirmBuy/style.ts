import styled from "styled-components";

const CardBuyMime = styled.div`
  width: 250px;
  height: 400px;
  display: flex;
  border-radius: 11px;
  background-color: #ffffff;
  color: #333333;
  font-size: 14px;
  box-shadow: 1px 1px 1px 1px gray;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  position: relative;

  .close-form{
  z-index: 3;
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

  button {
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    background: linear-gradient(
      180deg,
      rgba(244, 169, 25, 0.52) 0%,
      #f4a919 100%
    );
    color: #ffffff;
    font-size: 14px;
    font-weight: 500;
    font-family: "Roboto";
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    margin-top: 8px;
  }

  img {
    width: 250px;
    height: 200px;
    position: absolute;
    top: 1px;
    border-radius: 10px 10px 0px 0px;
    margin-top: 0px;
  }
  .DivCard {
    margin-top: 200px;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    width: 500px;
    height: 200px;

    .DivCard {
      margin-top: -50px;
      width: 220px;
      height: 120px;
      margin-left: 240px;
  }
  img {
    width: 230px;
    height: 200px;
    position: absolute;
    left: 0px;
    top: 0px;
    border-radius: 10px 0px 0px 10px;
    margin-top: 0px;
  }
  p{
    display: none;
  }
   button{
       position: absolute;
       bottom:20px;
       right:20px;
      
   }
   h2{
    width: 15ch;
   }
  }
`;
const DivWrapper = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`

export  {CardBuyMime,DivWrapper}