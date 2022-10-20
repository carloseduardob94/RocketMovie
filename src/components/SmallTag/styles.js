import styled from 'styled-components'

export const Container = styled.div`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 12px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 8px;

  padding: 5px 16px;

  max-width: 121px;
  white-space: nowrap;

  display: flex;
  align-items: center;
  justify-content: center;
`
