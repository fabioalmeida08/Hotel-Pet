import StyledButton from "./StyledButton";
import React from 'react'
interface buttonProps{
  background?: string,
  radius?: string,
  fontSize?: string,
  color?: string,
  hoverColor?: string,
  hoverBackground?: string,
  onClick: () => void
}

const Button: React.FC<buttonProps> = (props) => {
  return(
    <StyledButton {...props}>{props.children}</StyledButton>
  )
}

export default Button