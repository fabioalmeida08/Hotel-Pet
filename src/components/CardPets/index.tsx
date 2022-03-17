import StyledCardPet from "./StyledCardPet"
import arrow from '../../assets/svg/Polygon 6.svg'
import editSvg from '../../assets/svg/editar icon.svg'
import paw from '../../assets/svg/paw.svg'

const CardPet = () => {
  return(
    <StyledCardPet>
      <img className="FotoPet" src="https://i0.wp.com/www.portaldodog.com.br/cachorros/wp-content/uploads/2021/03/visa%CC%83o-do-cachorro-2.jpeg?resize=626%2C626&ssl=1"></img>
      <div className="CardContainer">
        <div className="CardHeader">
          <h2>Péricles</h2>
          <img src={arrow}></img>
        </div>
      <section>
        <div>
          <p>Espécie:</p>
          <span>Cachorrão</span>
        </div>
        <div>
          <p>Raça:</p>
          <span>Solteiro</span>
        </div>
        <div>
          <p>Idade:</p>
          <span>2 anos</span>
        </div>
        <div>
          <p>Porte:</p>
          <span>Médio</span>
        </div>
        <button>
          <img src={editSvg}></img>
          Editar
        </button>
      </section>
      </div>
      <img className="paw" src={paw}>
      </img>
    </StyledCardPet>
  )
}
export default CardPet