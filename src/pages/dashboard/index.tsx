

import { Container} from './styles'
import { useAuth } from '../../contexts/AuthProvider'
import { Navigate } from 'react-router-dom'
import UserChat from '../../components/ChatUser'

const Dashboard = () => {
  const { authToken } = useAuth()

  if (!authToken) {
    return <Navigate to='/login' replace />
  }
  return (
    <Container>
      <UserChat />
    </Container>
  )
}

export default Dashboard
