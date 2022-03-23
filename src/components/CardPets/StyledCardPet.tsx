import styled from "styled-components";

export const StyledCardPet = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 9px 4px 15px 0px rgba(0, 0, 0, 0.3);
  padding: 10px;

  @media screen and (min-width: 400px) {
    width: 90%;
    max-width: 350px;
    height: 200px;
    flex-direction: row;
    align-items: flex-start;
    border-radius: 20px;
    background-color: #ffffff;
    color: #333333;
    //position: relative;
    cursor: pointer;
    box-shadow: 9px 4px 15px 0px rgba(0, 0, 0, 0.3);
  }

  .paw {
    display: none;

    @media screen and (min-width: 500px) {
      display: block;
      bottom: 4px;
      right: 4px;
      z-index: 0;
    }
  }

  .FotoPet {

    height: 100%;
    width: 50%;
    align-self: center;
    border-radius: 20px;

    @media screen and (min-width: 400px) {
      height: 100%;
      width: 40%;
      border-radius: 20px 0 0 20px;
      flex: 1;
      background-size: cover;
      background-position: center;
      object-fit: cover;
    }
  }

  .CardContainer {
    padding: 10px 20px 10px 20px;
    flex: 2;
    //position: relative;
    z-index: 1;
  }

  .CardHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
    h2 {
      font-size: 18px;
      font-family: "Roboto";
    }
  }

  section div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    margin-bottom: 4px;

    p {
      font-family: "Roboto";
      font-weight: 500;
    }

    span {
      color: "#606060";
      font-weight: 500;
    }
  }
  button {
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    background: linear-gradient(
      180deg,
      rgba(244, 169, 25, 0.52) 0%,
      #f4a919 100%
    );
    color: #ffffff;
    font-size: 14px;
    font-weight: 500;
    font-family: "Roboto";
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    //margin-top: 8px;
    cursor: pointer;

    :hover {
      background-color: var(--primary-1);
    }

    img {
      width: 20px;
    }
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  
`
