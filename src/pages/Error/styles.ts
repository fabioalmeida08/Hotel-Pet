import styled from 'styled-components'

export const Container = styled.div`
    background-color: var(--secundary-1);
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    .background {
        position: fixed;
        width: 2400px;
        height:50vh;
        z-index: 0;
        bottom: 0;
        /* left: -500px; */
    }
`

export const Main = styled.section`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;

    .sadDog {
        top: 175px;
    }

    h2 {
        top: 620px;
        font-size: 48px;
        font-family: 'Roboto';
        color: var(--white);
    }
`;