import DasboardHeader from '../../components/HeaderDashboard'
import CardUser from '../../components/CardUser'
import { Container } from './styles'
import { useAuth } from '../../contexts/AuthProvider'
import { Navigate } from 'react-router-dom'
const Dashboard = () => {
  const {authToken} = useAuth()
  
  if (!authToken) {
    return <Navigate to='/login' replace />
  }
  
  return (
    <Container>
      <DasboardHeader />
      <CardUser />
    </Container>
  )
}

export default Dashboard
