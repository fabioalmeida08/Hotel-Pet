import styled from 'styled-components'

const Container = styled.div`
  background-color: #FFF;
  width: 100%;
  heigh: 100%;

`

const Header = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  
  h2 {
    font-size: var(--paragraph-1);
    font-weight: normal;
    font-family: var(--font-family-2);
  }

  div {
      position: absolute;
      background-color: var(--secundary-1);
      width: 100%;
      height: 10px;
      opacity: 0.6;
      top: 55px;
    }
`

const Main = styled.section`
  heigh: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
    img {
      max-width: 300px
    }
`;

export {Header, Container, Main}