import editSvg from '../../assets/svg/editar icon.svg'
import paw from '../../assets/svg/paw.svg'
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
        className='FotoPet'
        alt='foto tutor'
        src='https://i0.wp.com/www.portaldodog.com.br/cachorros/wp-content/uploads/2021/03/visa%CC%83o-do-cachorro-2.jpeg?resize=626%2C626&ssl=1'
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
          <Stack direction='row' alignItems='center'>
            <button>
              <img src={editSvg} alt='botao editar'></img>
              Editar
            </button>
            <StyledViewButton>
              <button>Pets</button>
            </StyledViewButton>
          </Stack>
        </section>
      </div>
      <img className='paw' alt='pata' src={paw}></img>
    </StyledCardTutor>
  )
}
export default CardTutor
