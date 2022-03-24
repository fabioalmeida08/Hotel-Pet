import styled from "styled-components";

export const StyledCardPetsStatus = styled.div`
  position: relative;
  width: 330px;
  //left: 12px;
  

  .close-form{
  z-index: 3;
  background: #FF3344;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 50%;
  position: absolute;
  right: -5px;
  top: -5px;
  transition: .3s;
  cursor: pointer;

  :hover{
    filter: brightness(.7);
  }
}

  .emoji{
    text-align: center;
    position: relative;
    z-index:100;
  }

  .emoji-container{
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    justify-content: center;
    align-items: center;
  }

  .status-container{
    position: relative;
    margin-left: 20px;
  }

  .background-svg{
    position: absolute;
    z-index: 0;
    //left: 150px;
    top: 30px;
  }

  .svg{
    position: absolute;
    left: 49.8%;
    bottom: 20px;
    cursor: pointer;
  }
  .svg-top{
    position: absolute;
    left: 48.2%;
    transform: rotate(180deg);
    cursor: pointer;
    z-index: 100;
  }

  .avatar-pet{
    /* width: 252px */
    height: 416px;
    width: 100%;
    border-radius: 20px;
    background-position: center;
    background-size: cover;
    object-fit: cover;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    position: relative;
    z-index: 2;
    animation: picture-mobile 1s;
  }
/*width: 350px*/
  .status{
    background-color: #333333;
    border-radius: 20px;
    width: 100%;
    height: 370px;
    position: absolute;
    left: 0px;
    bottom: -80%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 12px;
    animation: info-mobile 1s;
    z-index: 3;

    h2{
      color: #FFFFFF;
      font-family: 'Inter';
      font-weight: 600;
      text-align: center;
    }
  }

  @media (min-width: 600px){
    width: 580px;
    right: 120px;
    top: 120px;

    .status{
      width: 350px;
      animation: info-desktop 1s;
      z-index: 1;
    left: 220px;
    top: 20px;
    }
    .avatar-pet{
      width: 252px;
      animation: picture-desktop 1s;
      z-index: 2;
    }

    .svg-top{
      left: 47%;
    }
    .svg{
      left: 49.8%
    }

    .background-svg{
      left: 45px;
    }
  }


  @keyframes picture-desktop {
    from{
      right: -200px;
      opacity: 0;
    }to{
      right: 0px;
      opacity: 1;
    }
  }

  @keyframes info-desktop {
    from{
      left: -200px;
      opacity: 0;
    }to{
      left: 220px;
      opacity: 1;
    }
  }

  @keyframes picture-mobile {
    from{
      bottom: -200px;
      opacity: 0;
    }to{
      bottom: 0px;
      opacity: 1;
    }
  }

  @keyframes info-mobile {
    from{
      bottom: 100px;
      opacity: 0;
    }to{
      bottom: -350px;
      opacity: 1;
    }
  }
`