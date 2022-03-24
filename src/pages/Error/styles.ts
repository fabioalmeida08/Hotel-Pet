import styled from 'styled-components'

export const Container = styled.div`
    background-color: var(--secundary-1);
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .background {
        max-width: 1848px;
        width: 100%;
        bottom: 0px;
        height: 100vh;
        max-height: 1000px;
    }

    .sadDog {
        position: absolute;
        top: 175px;
    }

    h2 {
        position: absolute;
        top: 620px;
        font-size: 48px;
        font-family: 'Roboto';
        color: var(--white);
    }
`