import styled from "styled-components";
import { styles } from "../../styles/globalStyle";

const StyledModalPetStatusAdmin = styled.div`
width: 400px;
background: ${styles.colors.white};
padding: 24px;
font-family: ${styles.fonts["font-family-2"]};
display: flex;
align-items: center;
flex-direction: column;
border-radius: 20px;
position: relative;

.close-form{
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

  :hover{
    filter: brightness(.7);
  }
}

h2{
  font-weight: 500;
  color: ${styles.colors["grey-3"]};
  font-size: ${styles.sizes["title-3-size"]};
}
`

export default StyledModalPetStatusAdmin