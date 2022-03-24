import editSvg from '../../assets/svg/editar icon.svg'
import paw from '../../assets/svg/paw.svg'
import vilsinho from '../../assets/img/vilsinho.jpg'
import StyledCardTutor, {
  StyledViewButton,
} from './StyledCardTutor'
import { Stack } from '@mui/material'
interface Info {
  name: string
  adress: string
  phone: string
}


const CardTutor = ({name,adress,phone} : Info) => {

  return (
    <StyledCardTutor>
      <img
        className='Tutor'
        alt='foto tutor'
        src={vilsinho}
      ></img>
      <div className='CardContainer'>
        <div className='CardHeader'>
          <h2>{name}</h2>
        </div>
        <section>
          <div>
            <p>Contato:</p>
            <span>{phone}</span>
          </div>
          <div>
            <p>Endereço:</p>
            <span>{adress}</span>
          </div>
          <div>
            <p>Contado de emergencia:</p>
            <span>a ver</span>
          </div>
        </section>
      </div>
      <img className='paw' alt='pata' src={paw}></img>
    </StyledCardTutor>
  )
}
export default CardTutor
