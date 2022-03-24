import styled from 'styled-components'

export const Container = styled.div`
    background-color: var(--secundary-1);
    height: 800px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    .background {
        position: fixed;
        background-size: cover;
        background-position: center;
        width: 6000px;
        z-index: 0;
        bottom: 0;
        left: 0;
        /* left: -500px; */
    }
`

export const Main = styled.section`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;
    top: 650px;

    .sadDog {
        position: absolute;
        bottom: 80px;
    }

    h2 {
        top: 620px;
        font-size: 48px;
        font-family: 'Roboto';
        color: var(--white);
    }
`;