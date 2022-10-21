import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 222px;
  padding: 32px;

  border-radius: 16px;

  background-color: ${({ theme }) => theme.COLORS.PINK_300};

  > h2 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-bottom: 8px;
  }

  .star-icons {
    display: flex;
    gap: 5px;

    margin-bottom: 15px;
    color: ${({ theme }) => theme.COLORS.PINK_100};

    svg {
      fill: ${({ theme }) => theme.COLORS.PINK_100};
    }
  }

  .tags {
    margin-top: 15px;
    display: flex;
    gap: 8px;
  }
`
