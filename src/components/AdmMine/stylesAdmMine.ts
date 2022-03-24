import styled from "styled-components";

const Container = styled.header`
  max-width: 865px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px 0;

  h3{
    color: var(--grey-3);
    font-size: 20px;
    margin-top: 25px;
  }
`;

const DivOrganizer = styled.div`
  display: flex;
  width: 64vw;
  max-width: 872px;
  margin-top: 17px;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 20px;
  position: relative;
  h2 {
    color: var(--grey-3);
    width: 140px;
    font-size:  17px;
  }
  .SizeBtn {
    width: 80px;
    text-align: center;
    margin-left: 20px;
  }
  span {
    top: 40px;
    position: absolute;
    width: 30vw;
    max-width: 694px;
    position: absolute;
    width: 56vw;
    max-width: 600px;
    height: 2px;
    background-color: var(--primary-3);
  }

  @media (min-width: 768px) {
    display: flex;
    width: 64vw;
    max-width: 872px;
    flex-direction: row;
    justify-content: space-evenly;
    margin-bottom: 20px;
    position: relative;
    h2 {
      color: var(--grey-3);
      width: 140px;
    }
    .SizeBtn {
      width: 80px;
      text-align: center;
    }

    span {
      top: 40px;
      position: absolute;
      width: 56vw;
      max-width: 694px;
      position: absolute;
      max-width: 600px;
      height: 2px;
      background-color: var(--primary-3);
    }
  }
`;
const DivOver = styled.div`
overflow-y: scroll;
::-webkit-scrollbar{
  display: none;
}
`

export { Container, DivOrganizer, DivOver};
