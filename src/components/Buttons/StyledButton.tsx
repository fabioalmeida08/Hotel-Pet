import styled from "styled-components";
interface buttonProps{
  background?: string,
  radius?: string,
  fontSize?: string,
  color?: string,
  hoverColor?: string,
  hoverBackground?: string
}
const StyledButton = styled.button<buttonProps>`
  padding: 12px 24px;
  font-family: 'Roboto';
  text-transform: uppercase;
  font-weight: 600;
  background: ${props => props.background ? props.background : 'linear-gradient(180deg, rgba(244, 169, 25, 0.52) 0%, #F4A919 100%)'};
  border: none;
  border-radius: ${props => props.radius ? props.radius : '4px'};
  font-size: ${props => props.fontSize ? props.fontSize :  '12px'};
  color: ${props => props.color ? props.color :  '#FFFFFF'};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  cursor: pointer;

  :hover{
    background: ${props => props.hoverBackground ? props.hoverBackground : 'linear-gradient(180deg, rgba(244, 169, 25, 0.52) 0%, #F4A919 100%)'};
    color: ${props => props.hoverColor ? props.hoverColor :  '#FFFFFF'};
  }

  img{
    width: 20px;
    height: 20px;
  }

`

export default StyledButton