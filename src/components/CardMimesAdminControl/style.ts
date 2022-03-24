import styled from "styled-components";

const DivWrapper = styled.div`
  display: flex;
  width: 60vw;
  max-width: 872px;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 5px;
  
  h4{
      color: var(--grey-3);
      width: 140px;
  }
  @media(min-width: 768px){
  width: 64vw;}
  `;

export { DivWrapper };
