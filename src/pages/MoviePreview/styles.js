import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-areas:
    'header'
    'content';

  > main {
    margin: 40px auto 0;
    grid-area: content;
    width: 1157px;
    padding: 0 20px;

    overflow-y: auto;

    ::-webkit-scrollbar {
      width: 8px;
      border-radius: 8px;
      background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.PINK_100};
      border-radius: 8px;
    }

    a {
      display: flex;
      align-items: center;
      color: ${({ theme }) => theme.COLORS.PINK_100};
      line-height: 21px;

      svg {
        font-size: 16px;
        margin-right: 8px;
      }
    }
  }

  > button {
    margin: 30px auto 30px;
    max-width: 500px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.PINK_100};
  }
`
