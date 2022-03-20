import TimelineComponent from "../TimelineComponent";
import { StyledCardPetsStatus } from "./StyledCardPetsStatus";
import Timeline from "@mui/lab/Timeline";
import { Scrollbar } from "./Scrollbar";
import svg from "../../assets/svg/Group.svg";
import arrow from "../../assets/svg/arrow_down.svg";
import {useEffect, useState} from 'react'

const CardPetsStatus = () => {
  const [arrowTop, setArrowTop] = useState(false)
  return (
    <StyledCardPetsStatus>
      <img
        className="avatar-pet"
        src="https://i0.wp.com/www.portaldodog.com.br/cachorros/wp-content/uploads/2021/03/visa%CC%83o-do-cachorro-2.jpeg?resize=626%2C626&ssl=1"
        alt=""
      ></img>
      <div className="status">
        <div className="status-container">
          <h2>Vilsinho</h2>
          <p>😀</p>
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
              <TimelineComponent />
              <TimelineComponent />
              <TimelineComponent />
              <TimelineComponent />
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
