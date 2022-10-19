import styled from 'styled-components'

export const Container = styled.header`
  grid-area: header;
  height: 116px;
  width: 100%;

  border-bottom: 1px solid #3e3b47;

  display: flex;
  align-items: center;
  justify-content: space-around;

  > h2 {
    color: ${({ theme }) => theme.COLORS.PINK_100};
    margin: 42px 64px 42px 123px;

    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
  }
`

export const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 24px 123px 24px 64px;

  > div {
    display: flex;
    flex-direction: column;
    margin-right: 9px;
    gap: 6px;

    a {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      align-self: flex-end;

      span {
        white-space: nowrap;
        font-weight: 700;
        color: ${({ theme }) => theme.COLORS.WHITE};
        line-height: 18px;
      }
    }
  }

  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }
`
