import styled from 'styled-components'
import { styles } from '../../styles/globalStyle'

const StyledHomeIntro = styled.div`
  width: 100%;
  padding: 20px;
  margin: 0 auto;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  height: 200px;
  background: ${styles.colors['primary-color']};
  font-family: 'Inter';
  color: ${styles.colors.white};
  
  .info-container{
    display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0;
  position: relative;
  z-index: 10;
  }
  .dog-home{
    display: none;
    position: relative;
    z-index: 10;
  }

  .bg-home{
    position: absolute;
    height: 200px;
    z-index: 5;
  }

  h2{
    color: ${styles.colors.white};
    font-family: 'Inter';
    font-weight: 600;
    font-size: 32px;
  }
  p{
    text-align: center;
    font-size: 20px;
  }

  span{
    color: ${styles.colors['secundary-1']};
    font-weight: 600;
  }

  h3{
    font-weight: 400;
    position: relative;
    display: flex;
    align-items: center;
    gap: 4px;
  }

svg{
  cursor: pointer;
  animation: arrow 2s infinite;
}

@keyframes arrow {
  0%{
    opacity: 0;
    transform: scale(1);
  }33%{
    transform: scale(1.3);
    opacity: 1;
  }100%{
    transform: scale(1);
    opacity: 0;
  }
}

  h3::before{
    content: "";
    width: 100px;
    height: 8px;
    background: ${styles.colors['secundary-1']};
    display: block;
    position: absolute;
    bottom: -4px;
    z-index: -1;
  }

  @media (min-width: 767px){
    height: 550px;
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    position: relative;
    flex-wrap: nowrap;


    .dog-home{
      display: block;
      width: 60vw;;
      position: relative;
      z-index: 100;
    }

    .bg-home{
      position: absolute;
      left: 0;
      bottom: 0;
      height: 60vw;
    }

    .info-container{
    align-items: flex-start;
    gap: 12px;
    }

    h2{
    font-size: 64px;
    text-align: left;
  }
  p{
    text-align: left;
    font-size: 32px;
  }

  h3{
    gap: 12px;
    :hover{
      filter: scale(1.2);
    }
  }

  h3::before{
    content: "";
    width: 150px;
    bottom: -12px;
  }
  }

  @media (min-width: 1200px){
    padding: 0px calc((100vw - 1200px) / 2);

    .dog-home{
      height: 600px;
    }
  }
`

export default StyledHomeIntro