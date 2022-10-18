import styled from 'styled-components'

import backgroundImg from '../../assets/background.jpg'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  text-align: center;

  padding: 0 134px;

  > h2 {
    margin: 48px 0;
    align-self: flex-start;
    font-size: 24px;
    line-height: 32px;
  }

  > h1 {
    font-size: 48px;
    line-height: 63px;
    font-weight: 700;

    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > p {
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;

    color: #cac4cf;
  }

  > button {
    margin-top: 24px;
    margin-bottom: 42px;
  }

  > a {
    display: flex;
    align-items: center;

    color: ${({ theme }) => theme.COLORS.PINK};

    svg {
      font-size: 24px;
      margin-right: 8px;
    }
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;

  opacity: 0.7;
`
