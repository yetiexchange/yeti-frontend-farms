import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap-libs/uikit'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kanit', sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }

    nav svg {
      fill: #0A8EE6 !important;
      overflow: inherit !important;
      
    }

    nav svg:nth-child(2){margin-top: -55px;}

    nav image{
      height: 100px  !important;
    }

    button{
    border: 0 !important;
    outline: none !important;
    }



    @media only screen and (max-width: 600px) {
      nav image{
      height: 35px !important;
        }
    }

  }
`

export default GlobalStyle
