import styled from 'styled-components'

const StyledCardPet = styled.div`
  width: 350px;
  height: 200px;
  display: flex;
  align-items: flex-start;
  border-radius: 20px;
  background-color: #FFFFFF;
  color: #333333;
  position: relative;

  .paw{
    position: absolute;
    bottom: 4px;
    right: 4px;
    z-index: 0;
  }

  .FotoPet{
    height: 100%;
    width: 40%;
    border-radius: 20px 0 0 20px;
    flex: 1;
    background-size: cover;
    background-position: center;
    object-fit: cover;
  }

  .CardContainer{
    padding: 20px;
    flex: 2;
    position: relative;
    z-index: 1;
  }

  .CardHeader{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
    h2{
      font-size: 18px;
      font-family: 'Roboto'
    }
  }

  section div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    margin-bottom: 4px;

    p{
      font-family: 'Roboto';
      font-weight: 500;
    }

    span{
      color: "#606060";
      font-weight: 500;
    }
  }
button{
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background: linear-gradient(180deg, rgba(244, 169, 25, 0.52) 0%, #F4A919 100%);
  color: #FFFFFF;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Roboto';
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-top: 8px;

  img{
    width: 20px;
  }
}

@media (min-width: 600px){

}
`

export default StyledCardPet