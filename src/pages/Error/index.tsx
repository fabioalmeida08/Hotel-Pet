import { Container, Main } from './styles'
import backblue from '../../assets/svg/backblue.svg'
import dog404 from '../../assets/svg/dog404.svg'
import HeaderHome from '../../components/HeaderHome'

const Error = () => {
    return (
        <>
            <HeaderHome />
            <Container>
                <Main>
                    <img className='sadDog' src={dog404} alt="sad dog"/>
                    <h2>404 not found</h2>
                </Main>
                <img className="background" src={backblue} alt="backgroundBlue"/>
            </Container>
        </>
    )
}

export default Error