import styled from "styled-components";

export const Container = styled.div`
  height: 600px;
  background-color: #e8e8e8;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;

  h2 {
    font-size: var(--paragraph-1);
    font-family: var(--font-family-2);
    font-weight: normal;
    display: flex;
    align-items: center;
    gap: 10px;

    img {
      width: 150px;

      @media (max-width: 430px) {
       width: 110px;
    }
    }

    @media (max-width: 430px) {
       font-size: var(--paragraph-2);
    }
  }

  /* .paws {
        position: absolute;
        top: 2200px;
    } */

    @media (max-width: 950px) {
        height: 1000px;
  }
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  padding: 60px;
  gap: 40px;

  img {
    width: 90%;
    max-width: 300px;
  }

  p {
    max-width: 500px;
    font-size: var(--paragraph-2);
    font-family: var(--font-family-2);
    font-weight: lighter;
    max-height: 300px;
    overflow: scroll;

    @media (max-width: 430px) {
        max-height: 600px;
    }

    ::-webkit-scrollbar {
      width: 0px;
    }
  }

  @media (max-width: 950px) {
    flex-direction: column;
  }
`;
