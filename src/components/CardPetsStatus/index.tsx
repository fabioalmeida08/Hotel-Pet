import TimelineComponent from "../TimelineComponent";
import { StyledCardPetsStatus } from "./StyledCardPetsStatus";
import Timeline from "@mui/lab/Timeline";
import { Scrollbar } from "./Scrollbar";
import svg from "../../assets/svg/Group.svg";
import arrow from "../../assets/svg/arrow_down.svg";
import {useEffect, useState} from 'react'
import axios from 'axios'

interface IProps{
  idPet: String
}

interface IPet{
  time: String,
  emoji: String,
  description: String,
  activity: String
}

interface IResponse{
  size: String,
		age: Number,
		race: String,
		specie: String,
		name: String,
		hospedado: boolean,
		status: IPet[],
		mimos: [],
		tutorId: Number,
		id: Number
}

const CardPetsStatus = ({idPet} : IProps) => {
  const [arrowTop, setArrowTop] = useState(false)
  const [pet, setPet] = useState<IResponse>({} as IResponse)
  useEffect(() => {
    axios
    .get(`https://hotelpetapi.herokuapp.com/pets/${idPet}`)
      .then(data => setPet(data.data))
  },[])
  return (
    <StyledCardPetsStatus>
      <img
        className="avatar-pet"
        src="https://i0.wp.com/www.portaldodog.com.br/cachorros/wp-content/uploads/2021/03/visa%CC%83o-do-cachorro-2.jpeg?resize=626%2C626&ssl=1"
        alt=""
      ></img>
      <div className="status">
        <div className="status-container">
          <h2>{pet.name}</h2>
          <div className="emoji-container">

          {pet.status?.map((status, index) => <p className="emoji" key={index}>{status.emoji}</p>)}
          </div>
          
          {arrowTop && <img className="svg-top" src={arrow}
        alt=""
        onClick={
          () => {
            const scroll = document.querySelector('.scroll')
            scroll?.scrollBy(0,-20)
            if(scroll?.scrollTop === 0){
              setArrowTop(false)
            }else{
              setArrowTop(true)
            }
          }
        }
        ></img>}
          
          <img src={svg} className="background-svg"></img>
          <Scrollbar className="scroll"
          onScroll={() => {
            const scroll = document.querySelector('.scroll')
            if(scroll?.scrollTop === 0){
              setArrowTop(false)
            }else{
              setArrowTop(true)
            }
          }}
          >
            <Timeline position="alternate">
              {pet.status?.map((status, index) => <TimelineComponent key={index} pet={status}/>)}          
            </Timeline>
          </Scrollbar>
        </div>
        <img className="svg" src={arrow}
        alt=""
        onClick={
          () => {
            const scroll = document.querySelector('.scroll')
            scroll?.scrollBy(0,20)
            if(Number(scroll?.scrollTop) <= 0){
              setArrowTop(false)
            }else{
              setArrowTop(true)
            }
            if(Number(scroll?.scrollTop) + Number(scroll?.clientHeight) >= Number(scroll?.scrollHeight)){
              setArrowTop(!arrow)
              scroll?.scrollTo({top: 0, behavior: "smooth"})
              
            }
            
            
          }
        }
        ></img>
      </div>
    </StyledCardPetsStatus>
  );
};

export default CardPetsStatus;
