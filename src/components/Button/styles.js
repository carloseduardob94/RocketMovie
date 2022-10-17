import styled from 'styled-components'

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.PINK};

  color: ${({ theme }) => theme.COLORS.GRAY_300};
  font-weight: 500;

  width: 100%;
  height: 56px;

  display: flex;
  align-items: center;
  justify-content: center;
  border: none;

  border-radius: 10px;

  &:disabled {
    opacity: 0.5;
  }
`
