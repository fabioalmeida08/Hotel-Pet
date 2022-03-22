import { StyledDivMimos } from "./style"

interface CardTypes {
  img: string,
  title: string,
  description: string
  setModal: Function
  service: Function
}

const CardMimos = ({ img, title, description, setModal, service }: CardTypes) => {
  return (

    <StyledDivMimos>
      <img src={img} alt={title}></img>
      <div className="CardContainer">

        <h2>{title}</h2>
        <p>
          {description}
        </p>
        <button onClick={() => { setModal(true);service(title) }
        }>
          Comprar
        </button>
      </div>
    </StyledDivMimos>

  )
}
export default CardMimos

