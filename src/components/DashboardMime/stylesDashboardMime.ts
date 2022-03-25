import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fff;
  padding: 10px;
  
    div{
    position: relative;
    margin-bottom: 20px;
    span{
      position: absolute;
    width: 161px;
    height: 11px;
    top: 46px;
    left: -4px;
    background-color: #f4ad24ab;
    }
  }
  .title{
    font-size: 50px;
    font-weight: 400;
  }
`;

export default Container;
