import StyledBackgroundModal from "./StyledBackgroundModal";

interface IChildren{
  children: any
}
const BackgroundModal = ({children} : IChildren) => {
  return(
  <StyledBackgroundModal>
    {children}
  </StyledBackgroundModal>
  )
}

export default BackgroundModal