import styled from "styled-components";

const DivWrapper = styled.div`
  display: flex;
  width: 60vw;
  max-width: 872px;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 5px;
  margin-top: 5px;
  
  h4{
      color: var(--grey-3);
      width: 140px;
      font-size: 10px;
  }
  button{
    width: 30px;
    height: 20px;
    font-size: 10px;
  }
  @media(min-width: 768px){
  width: 64vw;


  button{
    width: 63px;
    height: 30px;
    font-size: 13px;
  }
  h4{
      color: var(--grey-3);
      width: 140px;
      font-size: 15px;
  }
}
  `;

export { DivWrapper };
