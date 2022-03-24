import styled from 'styled-components'

export const Header = styled.div`
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    section {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    h2 {
        position: relative;
        z-index: 1;
    font-size: var(--paragraph-1);
    font-weight: normal;
    font-family: var(--font-family-2);
    padding: 10px;
    }

    div {
        position: absolute;
        background-color: var(--secundary-1);
        width: 100%;
        height: 10px;
        top: 55px;
        z-index: 0;
    }
`