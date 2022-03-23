import styled from "styled-components";

export const Container = styled.div`
  height: 150px;
  display: flex;
  gap: 20px;
  align-items: center;
  width: 300px;
  justify-content: center;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  h3 {
    font-family: var(--font-family-1);
    font-weight: normal;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;

    svg {
      font-size: 30px;
    }
  }
  .Linkedin {
      color: #0E76A8
  }

  .GitHub {
      color: var(--grey-3)
  }
`;


export const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const Buttons = styled.div`
    display: flex;
    gap: 10px;
`
