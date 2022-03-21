import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  padding: 10px;

  background-color: #FFF;

  .button {
    background: var(--secundary-1);
    color: var(--white);
    border: 0;
    border-radius: 100px;

    font-size: var(--title-1-size);

    width: 100px;
    height: 100px;

    &hover {
        background: var(--primary-1);
    }
  }

`

export default Container