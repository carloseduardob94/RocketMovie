import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin: 24px 0 40px;
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;

  > h1 {
    font-size: 36px;
    font-weight: 500;

    margin-right: 19px;

    color: ${({ theme }) => theme.COLORS.PINK_100};
  }

  > svg {
    width: 20px;
    height: 20px;

    margin-right: 10px;

    color: ${({ theme }) => theme.COLORS.PINK_100};
  }
`

export const Description = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 40px;
  gap: 15px;

  > p {
    display: flex;
    align-items: center;

    font-size: 16px;

    img {
      width: 16px;
      height: 16px;
      border-radius: 50%;

      margin-right: 8px;
    }

    svg {
      width: 16px;
      height: 16px;

      margin-right: 8px;

      color: ${({ theme }) => theme.COLORS.PINK_100};
    }
  }
`

export const Genres = styled.div`
  display: flex;
  align-items: center;

  gap: 8px;
`
