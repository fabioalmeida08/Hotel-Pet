import {Container} from './styles'
import backblue from '../../assets/svg/backblue.svg'
import dog404 from '../../assets/svg/dog404.svg'

const Error = () => {
    return (
        <Container>
            <img className='sadDog' src={dog404} alt="sad dog"/>
            <img className="background" src={backblue} alt="backgroundBlue"/>
            <h2>404 not found</h2>
        </Container>
    )
}

export default Error