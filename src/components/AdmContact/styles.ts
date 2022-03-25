import styled from 'styled-components'

export const Container = styled.div`
  width: 80%;
  padding: 20px 0;

  background-color: #FFF;
  /* display:flex; */
  /* justify-content: center;
  flex-flow:column;
  align-items: center; */

  .button {
    background: var(--secundary-1);
    color: var(--white);
    border: 0;
    border-radius: 100px;

    font-size: var(--title-1-size);

    width: 100px;
    height: 100px;
 
    &hover {
        background: var(--primary-1);
    }
  }
`

export const Header = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  
  h2 {
    font-size: var(--paragraph-1);
    font-weight: normal;
    font-family: var(--font-family-2);
  }

  div {
      position: absolute;
      background-color: var(--secundary-1);
      width: 200px;
      height: 10px;
      opacity: 0.6;
      top: 55px;
    }
`

export const Footer = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 20px;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-left: 20px;
  margin-right: 20px;
  flex-flow: row;
  width: px;
  overflow-x: scroll;
  gap: 30px;
  height: 250px;

  ::-webkit-scrollbar{
    width: none;
  }
`

export const NoPetsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 70px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    height: 70px;
    width: 200px;
    border-radius: 16px;
    border: none;
    background-color: var(--secundary-1);
    font-family: var(--font-family-2);
    font-size: var( --subtitle);
    color: var(--white);
    cursor: pointer;
    box-shadow: 9px 4px 15px 0px rgba(0,0,0,0.3);

    :hover {
      background-color: var(--primary-2);
    }

    div {
      border: 1px solid var(--grey-3);
      border-radius: 50%;
      padding: 10px;
    }
  }
`