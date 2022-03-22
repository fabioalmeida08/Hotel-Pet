import HeaderHome from '../../components/HeaderHome'
import HomeInfo from '../../components/HomeInfo'

const Home = () => {
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
      <HeaderHome />
      {Info.map((item, index) => (
        <HomeInfo
          key={index}
          paragraph={item.paragraph}
          label={item.label}
          svg={item.svg}
          background={item.background}
          invert={item.invert}
        />
      ))}
    </>
  )
}

export default Home
