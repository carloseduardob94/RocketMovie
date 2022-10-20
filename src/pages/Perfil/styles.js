import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  > header {
    background-color: ${({ theme }) => theme.COLORS.PINK_300};
    height: 144px;

    a {
      color: ${({ theme }) => theme.COLORS.PINK_100};
      display: flex;
      align-items: center;

      margin-left: 144px;

      svg {
        margin-right: 8px;
      }
    }

    display: flex;
    align-items: center;
  }

  main {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const Avatar = styled.div`
  width: 186px;
  height: 186px;

  position: relative;
  margin: -120px auto 64px;

  > img {
    border-radius: 50%;
    height: 186px;
    width: 186px;
  }

  > label {
    width: 48px;
    height: 48px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.COLORS.PINK_100};
    border-radius: 50%;

    position: absolute;
    cursor: pointer;
    bottom: 0px;
    right: 0px;

    input {
      display: none;
    }

    svg {
      font-size: 20px;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`

export const Form = styled.form`
  width: 340px;
  margin: 30px auto 0;

  > div:nth-child(4) {
    margin-top: 24px;
  }

  > button {
    margin-top: 24px;
  }
`
