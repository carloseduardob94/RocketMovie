import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  border-radius: 10px;
  padding: 15px;
  height: 56px;

  background-color: ${({ theme, isNew }) =>
    isNew ? 'transparent' : theme.COLORS.BACKGROUND_700};

  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.GRAY_100}` : 'none'};

  > button {
    border: none;
    background: none;

    color: ${({ theme }) => theme.COLORS.PINK_100};
    font-size: 24px;
    align-self: baseline;
  }

  > input {
    border: none;
    background: transparent;

    color: ${({ theme }) => theme.COLORS.WHITE};

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`
