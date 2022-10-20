import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
    'header'
    'content';

  > main {
    grid-area: content;
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
  }
`

export const Content = styled.div`
  width: 1137px;
  margin: 50px auto 0;

  > header {
    h2 {
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 32px;
      line-height: 42px;
    }

    display: flex;
    justify-content: space-between;

    button {
      width: 207px;
      font-size: 16px;

      display: flex;
      align-items: center;

      gap: 8px;
    }
  }

  .notes-movie {
    margin: 38px 0 59px;

    display: flex;
    flex-direction: column;

    gap: 24px;
  }
`
