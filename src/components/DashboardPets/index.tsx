import {
  Container,
  Footer,
  Content,
  NoPetsContainer,
} from './stylesDashboardPets'
import CardPet from '../CardPets'
import DashHeader from '../DashHeader'
import CardRegisterPet from '../CardRegisterPet'
import { useState } from 'react'
import { useAuth } from '../../contexts/AuthProvider/index'
import buttonDashboardPets from '../../assets/svg/buttonDashboardPets.svg'
import dashcat from '../../assets/svg/dashboard/dashcat.svg'
import NoPets from '../NoPets'

const DashboardPets = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const { userPets } = useAuth()

  const handleOpen = () => {
    setIsOpenModal(!isOpenModal)
  }

  if (userPets.length === 0) {
    return (
      <NoPetsContainer>
        <DashHeader paramn="Meus Pets" />
        <NoPets />
        <button onClick={handleOpen}>
          <div>
            <img src={dashcat} alt='img button' />
          </div>
          Adicionar pet
        </button>
        {!!isOpenModal && (
          <CardRegisterPet
            isOpenModal={isOpenModal}
            setIsOpenModal={setIsOpenModal}
          />
        )}
      </NoPetsContainer>
    )
  } else {
    return (
      <Container>
        <DashHeader paramn="Meus Pets" />
        <Content>
          {userPets.map((pet, index) => {
            return (
              <CardPet
                pet={pet}
                key={index}
              />
            )
          })}
        </Content>
        <Footer>
          <button onClick={handleOpen}>
            <img src={buttonDashboardPets} alt='button' />
          </button>
        </Footer>
        {!!isOpenModal && (
          <CardRegisterPet
            isOpenModal={isOpenModal}
            setIsOpenModal={setIsOpenModal}
          />
        )}
      </Container>
    )
  }
}

export default DashboardPets
