import styled from "styled-components";

export const Container = styled.div`
    max-width: 500px;
    width: 90%;
    height: 310px;
    display: flex;
    gap: 30px;
    box-shadow: 9px 4px 15px 0px rgba(0,0,0,0.3);
    border-radius: 16px;

    img {
        height: 310px;
    }
    //filter: drop-shadow(1.58209px 1.58209px 3.95522px rgba//(0, 0, 0, 0.25))

    h2 {
        color: var(--primary-1);
        font-family: var(--font-family-3);
        font-size: var(--paragraph-2);
        font-weight: normal;
    }

    p {
        font-size: var( --subtitle);
        font-family: var(--font-family-3);
        color: var(--grey-3);
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 50px;
        padding-top: 20px;
    }
`