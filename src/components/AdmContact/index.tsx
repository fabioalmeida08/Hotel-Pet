import CardTutor from '../CardTutor'
import { Container, Content } from './styles'
import DashHeader from '../DashHeader'
import { useAuth } from '../../contexts/AuthProvider'
import UserChat from '../ChatUser'
import { Stack } from '@mui/material'

const AdmContact = () => {
  const { allUsers } = useAuth()
  return (
    <Container>
      <DashHeader paramn='Tutores' />
      <Content>
        {allUsers.map((user) => (
          <CardTutor
            key={user.id}
            name={user.name}
            adress={user.address}
            phone={user.phone}
          />
        ))}
      </Content>
      <UserChat />
    </Container>
  )
}

export default AdmContact
