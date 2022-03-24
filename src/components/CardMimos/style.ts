import styled from "styled-components";

const StyledDivMimos = styled.div`
  width: 280px;
  height: 180px;
  display: flex;
  align-items: flex-start;
  border-radius: 20px;
  background-color: #ffffff;
  color: #333333;
  font-size: 14px;
  justify-content: space-evenly;
  box-shadow: 1px 1px 1px 1px gray;
  position: relative;
  @media (min-width: 768px) {
    width: 350px;
    height: 201px;

    
  }
  img {
    height: 100%;
    width: 40%;
    border-radius: 20px 0 0 20px;
    flex: 1;
    background-size: cover;
    background-position: center;
    object-fit: cover;
  }
  .CardContainer {
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    padding: 15px 10px 15px 8px;
    position: relative;

    button {
      width: 140px;
      position: absolute;
      top: 130px;
      left: 10px;
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
`;
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

export { StyledDivMimos, CardBuyMime };
