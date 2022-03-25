import HeaderHome from "../../components/HeaderHome"
import HomeInfo from "../../components/HomeInfo"
import home_dog from '../../assets/svg/cachorro_Home.svg'
import bg_home from '../../assets/svg/bg_home.svg'
import { BsArrowRight } from 'react-icons/bs';
import StyledHomeIntro from "./StyledHomeIntro";
import {useNavigate} from 'react-router-dom'
import LoadingScreen from "../../components/LoadingScreen"
import { useEffect, useState } from "react";
import HomeContacts from "../../components/HomeContacts";
import HotelInfo from "../../components/HotelInfo";


const Home = () => {

const navigate = useNavigate()

  const Info = [
    {
      svg: 'Beach',
      label: 'Seu pet também merece',
      paragraph:
        'Deixe seu pet de férias, com total segurança, conforto e lazer.',
      background: false,
      invert: true,
    },
    {
      svg: 'Baloon',
      label: 'Muita diversão',
      paragraph:
        'Aqui seu pet tem entretenimento 24hr por dia e novos amigos para brincar a vontade!',
      background: true,
      invert: false,
    },
    {
      svg: 'Healty',
      label: 'Saúde em 1ºLugar',
      paragraph:
        'Veterinários especialidados para todos os cuidados que seu pet precisa 24 horas por dia.',
      background: false,
      invert: true,
    },
  ]

  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 900);
  }, []);
  
  
  return (
    <>
      {count < 2 ? <LoadingScreen /> : 
      <>
      <HeaderHome/>
      <StyledHomeIntro>
          <img src={home_dog} className={'dog-home'} alt="home dog"></img>
          <img src={bg_home} className={'bg-home'} alt="bg home"></img>
            <div className='info-container'>
              <div>
          <h2>Vai viajar<span>?</span></h2>
          </div>
          <div></div>
          <p>Não deixe seu pet <span>sozinho</span> em casa </p>
          <div></div>
          <h3>Cadastre-se agora mesmo <BsArrowRight
          onClick={() => navigate('/signup')}
          color="#F4A919" size={'40px'}/></h3>
          </div>
        </StyledHomeIntro>
        {
          Info.map((item,index)=> (<HomeInfo key={index}paragraph={item.paragraph} label={item.label} svg={item.svg} background={item.background} invert={item.invert} />) )
        }
        <HotelInfo/>
        <HomeContacts/>
        </>}

      </>
    )
  }
   
  export default Home