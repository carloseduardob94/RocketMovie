import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};

    -webkit-font-smoothing: antialiased;
  }

  main {
    ::-webkit-scrollbar {
      width: 8px;
      border-radius: 8px;
      background-color: darkgrey;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.PINK_100};
      border-radius: 8px;
    }
  }

  body, input, button, textarea { 
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
    outline: none;
  }

  a { 
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter .2s;
  }

  button:hover, a:hover {
    filter: brightness(.9);
  }
`
