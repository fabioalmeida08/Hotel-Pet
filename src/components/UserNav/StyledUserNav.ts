import styled from "styled-components";


const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: stretch;

    text-align: center;

    background: var(--primary-1);
    color: var(--white);
    border-radius: 49px 0px 0px 49px;

    width: 300px;
    height: 100%;

    hr {
        height: 2px;
        background: var(--white);
        border: 0;
    }

    h4 {
        margin-top: 30px;
        font-size: var(--paragraph-1);
    }

    button{
        background: var(--primary-1);
        color: var(--white);
        border: 0;

        padding-top: 10px;
        padding-bottom: 10px;

        font-size: var(--paragraph-2);

        &:hover {
            background: var(--secundary-1);
        color: var(--white);
        }
    }


    `;

export default Container