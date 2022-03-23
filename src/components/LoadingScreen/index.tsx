import Container from "./stylesLoadingScreen"
import Lottie from "react-lottie";
import loading from "./loadingCat.json"

const LoadingScreen = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loading,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      };

    return (
    <Container>
        <Lottie
          options={defaultOptions}
          height={470}
          width={400}
        />
    </Container>
    )

}

export default LoadingScreen