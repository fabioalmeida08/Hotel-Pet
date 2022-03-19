import styled from 'styled-components'

export const Scrollbar = styled.div`
  overflow-y: scroll;
  height: 230px;
  position: relative;
  margin-top: 20px;

  ::-webkit-scrollbar { 
  display: none;
  }
`