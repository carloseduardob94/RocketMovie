import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.GRAY_100};

  margin-bottom: 8px;
  border-radius: 10px;

  > input {
    width: 100%;
    height: 56px;

    padding: 18px 0;
    padding-left: 16px;

    background: transparent;
    color: ${({ theme }) => theme.COLORS.WHITE};

    border-radius: 10px;
    border: none;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
  > svg {
    margin-left: 16px;
  }
`
