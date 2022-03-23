import { useContext } from "react"
import AdmMine from "../../components/AdmMine"
import DashboardMime from "../../components/DashboardMime"
import DasboardHeader from "../../components/HeaderDashboard"
import UserNav from "../../components/UserNav"
import { useAuth } from "../../contexts/AuthProvider"
import { Container, CardUser } from "./styles"

const PagMine = () => {
  const { admin } = useAuth()

    return (
      <Container>
        <DasboardHeader />
        <CardUser>
          <UserNav />
          {admin ? <AdmMine/> : <DashboardMime />}
          
        </CardUser>
      </Container>
    )   
  }
  
  export default PagMine