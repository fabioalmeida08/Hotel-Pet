import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 10px;

  background-color: #FFF;

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
  justify-content: center;
  overflow: scroll;
  gap: 10px;
  height: 630px;

  ::-webkit-scrollbar{
    width: 0px;
  }
`