import styled from 'styled-components'

const ContainerAll = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  color: var(--grey-3);

  padding:20px;

  h2 {
    margin-bottom: 20px; 
  }
  img {
    height: 180px;
    border-radius: 18px;
    margin: 10px auto 0;
    display: flex;
  }
`
const ContainerHeader = styled.div`
  text-align: center;

  @media(min-width: 890px){
    text-align: start;
    margin-left: 15%;

  }
`;

const Container = styled.div`
  background-color: #FFF;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 890px){
    display: flex;
    flex-direction: row;
  }
  
`
const ContainerHotel = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;


img{
  width: 250px;
    height: 172px;
}
@media (min-width: 580px){
  padding:10px;
}

@media (min-width: 890px){
  width: 50%;
}
`

const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1120px){
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`

const ContainerChat = styled.div`
width: 100%;
height: 100%;

@media (min-width: 580px){
  width: 50%;
}
`

export { Container, ContainerHeader, ContainerInfo, ContainerHotel, ContainerAll, ContainerChat }