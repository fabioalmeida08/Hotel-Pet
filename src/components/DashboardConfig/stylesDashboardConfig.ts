import styled from 'styled-components'

const Container = styled.div`
  display: flex,
  flex-direction: column',
  width: '100%',
  padding: '20px 10px',
`

const Main = styled.section`
  heigh: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
    img {
      max-width: 280px;
    }
`;

export { Container, Main}