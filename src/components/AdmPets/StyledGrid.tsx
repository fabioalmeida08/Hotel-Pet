import styled from 'styled-components'

const StyledGrid = styled.div`
  display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit,minmax(350px,auto));
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: space-around;
    align-items: center;
    overflow-y: scroll;
    gap: 12px;
    padding: 20px 0;
`
export default StyledGrid