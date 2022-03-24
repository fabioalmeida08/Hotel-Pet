import styled from "styled-components";

const DivWrapper = styled.div`
  width: 90vw;
  max-width: 350px;
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
    width: 33vw;
    max-width: 150px;
    height: 37px;
    font-size: 10px;
    border-radius: 0px 0px 4px 0px;
    border-style: none;
    padding: 10px;
    background-color: var(--primary-1);
    color: var(--white);
    cursor: pointer;
  }
  button:hover {
    background-color: var(--primary-2);
  }
  input {
    border-radius: 0px 0px 0px 4px;
    border-style: none;
    background-color: #c4c4c4;
    height: 37px;
    width: 55vw;
    max-width: 200px;
    padding-left: 10px;
    border: 0;
    border-left: 4px;
    border-bottom: 4px;
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
  align-items: center;
`;

export { DivWrapper, DivInput, DivChat };
