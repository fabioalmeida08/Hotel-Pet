import styled from "styled-components";

const StyledBackgroundModal = styled.div`
  background: rgba(0, 0, 0, 0.54);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;

  *{
    position: relative;
    z-index: 2000;
  }
`

export default StyledBackgroundModal