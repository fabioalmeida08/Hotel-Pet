import styled from "styled-components";

const DivWrapper = styled.div`
  width: 88vw;
  background-color:#e1e1e1;
  max-width: 350px;
  height: 300px;
  margin-left: 20px;

  .superDiv {
    h2 {
      font-weight: 400;
    }
    display: flex;
    justify-content: center;
    width: 88vw;
    max-width: 350px;
    border-radius: 4px 4px 0px 0px;
    background-color: var(--primary-1);
    color: var(--white);
  }
  button {
    width: 88vw;
    max-width: 350px;
    height: 37px;
    font-size: 13px;
    border-radius: 0px 0px 4px 4px;
    border-style: none;
    background-color: var(--primary-1);
    color: var(--white);
    cursor: pointer;
  }
  button:hover {
    background-color: var(--primary-2);
  }
  input {

    border-style: none;
    background-color: #c4c4c4;
    height: 37px;
    width: 88vw;
    max-width: 350px;
    padding-left: 10px;
    border: 0;
    border-left: 4px;
    border-right: 4px;
    border-style: solid;
    border-color: var(--primary-1);
  }
`;
const DivChat = styled.div`
  width: 88vw;
  max-width: 350px;
  height: 200px;
  border: 0;
  padding: 10px;
  border-left: 4px;
  border-right: 4px;
  border-style: solid;
  border-color: var(--primary-1);

`;
const DivInput = styled.div`
  display: flex;
  flex-direction: column;
  height: 80px;
`;
const UlStyled =styled.ul`
  
    list-style-type: none;
     color: #fff;
    li{
        padding: 8px;
        margin : 5px 0px;
        font-size: 12px;
        border-radius: 15px;
    }
    .admin{
      
        text-align: end;
        background-color: blue;
    }
    .user{

       text-align: start;
       background-color: orange;
    }
`

export { DivWrapper, DivInput, DivChat,UlStyled };
