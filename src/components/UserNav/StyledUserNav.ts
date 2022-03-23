import styled from "styled-components";


export const Container = styled.div`
    display: none;
    justify-content: flex-start;
    flex-direction: column;
    align-items: stretch;

    text-align: center;

    background: var(--primary-1);
    color: var(--white);
    border-radius: 49px 0px 0px 49px;

    min-width: 200px;
    height: 100%;

    div {
        border-bottom: 1px solid var(--white);
    }

    h4 {
        margin-top: 30px;
        font-size: var(--info);
        font-family: var(--font-family-2);
    }

    button{
        background: var(--primary-1);
        color: var(--white);
        border: 0;

        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 50px;

        width: 100%;

        display: flex;
        gap: 5px;

        text-align: left;
        font-size: var( --info);
        font-family: var(--font-family-1);

        :hover {
            background: var(--secundary-1);
        }
    }

    @media(min-width: 650px ) {
        display: flex;
    }

    @media(min-width: 900px ) {
        width: 300px;
    }

    `

    export const Title = styled.div`
        display: flex;
        align-items: center;
        padding-left: 50px;
        gap: 5px;
        text-align: right;
        padding-bottom: 10px;

        svg {
            margin-top: 30px;
        }
    `
