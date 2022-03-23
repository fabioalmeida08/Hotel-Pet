import HeaderHome from "../../components/HeaderHome"
import HomeInfo from "../../components/HomeInfo"
import home_dog from '../../assets/svg/cachorro_Home.svg'
import bg_home from '../../assets/svg/bg_home.svg'
import { BsArrowRight } from 'react-icons/bs';
import StyledHomeIntro from "./StyledHomeIntro";
import {useNavigate} from 'react-router-dom'

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

    return (
      <>
       <HeaderHome/>
       <StyledHomeIntro>
         <img src={home_dog} className={'dog-home'}></img>
         <img src={bg_home} className={'bg-home'}></img>
          <div className='info-container'>
            <div>
         <h2>Vai viajar<span>?</span></h2>
         </div>
         <div></div>
         <p>Não deixe seu pet <span>sozinho</span> em casa </p>
         <div></div>
         <h3>Cadastre-se agora mesmo <BsArrowRight
         onClick={() => navigate('/cadastro')}
         color="#F4A919" size={'40px'}/></h3>
         </div>
       </StyledHomeIntro>
       {
         Info.map((item,index)=> (<HomeInfo key={index}paragraph={item.paragraph} label={item.label} svg={item.svg} background={item.background} invert={item.invert} />) )
       }
      </>
    )
  }
   
  export default Home