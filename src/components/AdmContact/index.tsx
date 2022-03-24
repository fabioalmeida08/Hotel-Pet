import CardTutor from '../CardTutor'
import {
  Container,
  Content,
  Header,
} from './styles'
import { useAuth } from '../../contexts/AuthProvider'
const AdmContact = () => {
  const { allUsers } = useAuth()
  console.log(allUsers)
  return (
    <Container>
      <Header>
        <h2>Tutores</h2>
        <div></div>
      </Header>
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
    </Container>
  )
}

export default AdmContact
