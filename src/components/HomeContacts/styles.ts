import styled from 'styled-components'

export const Container = styled.div`
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
`

export const Header = styled.div`
    display: flex;
    justify-content: center;


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
      top: 930px;
    }
`

export const Content = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 760px) {
      flex-direction: row;
      gap: 30px;
      flex-wrap: wrap;
      justify-content: center;
  }
`
