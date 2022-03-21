import { DivWrapper,DivOrganizer } from "./style"
import CatImg from "./asd.png"
const bo = ""
const aw = ""
const be = ""

interface CardTypes {
    title : string
    description : string
    img : string
}
const CardMimos = ({title,description,img} : CardTypes) => {

    const selectImage = () => {
      switch(img){
          case "CatImg" : return CatImg
      }
    }

    return(
       <DivWrapper>
           <img src={selectImage()} alt={img}></img>
           <DivOrganizer>
              <h2>{title}</h2>
              <p>{description}</p>
              <button onClick={()=> selectImage()}>Comprar</button>
           </DivOrganizer>
       </DivWrapper>
   )
}
export default CardMimos
