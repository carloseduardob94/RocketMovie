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
    margin: 40px auto;

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

export const Form = styled.form`
  width: 1157px;
  padding: 0 20px;

  > header {
    align-self: flex-start;

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

    h2 {
      margin-top: 24px;
      margin-bottom: 40px;

      font-weight: 500;
      font-size: 36px;
      line-height: 47px;
    }
  }

  .inputs {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 40px;
  }

  .buttons {
    display: flex;
    align-items: center;
    gap: 40px;
    margin: 0 auto;

    width: 500px;
  }
`

export const Section = styled.section`
  width: 100%;

  > h3 {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 20px;
    line-height: 26px;

    margin-bottom: 24px;
  }

  .tags {
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    border-radius: 8px;
    gap: 24px;
    padding: 16px;
    height: 88px;

    margin-bottom: 40px;
  }
`
