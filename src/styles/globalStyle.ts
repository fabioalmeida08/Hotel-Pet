import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

:root{
    --primary-1: #364FD9;
    --primary-2: #578BF2;
    --primary-3: #A8B4F5;
    --secundary-1: #F2AB27;
    --secundary-2: #7BAC51;
    --white: #FFFFFF;
    --grey-1: #535353;
    --grey-2: #464646;
    --grey-3: #333333;

    --font-family-1: 'Inter';
    --font-family-2: 'Poppins';
    --font-family-3: 'Roboto';
    
    --title-1-size: 64px;
    --title-2-size: 48px;
    --title-3-size: 34px;
    --paragraph-1: 36px;
    --paragraph-2: 24px;
    --subtitle: 18px;
    --info: 16px;
    --card-types: 8px;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

`

export default GlobalStyle
