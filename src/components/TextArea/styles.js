import styled from 'styled-components'

export const Container = styled.textarea`
  width: 100%;
  height: 274px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border-radius: 10px;
  border: none;
  resize: none;

  margin: 40px 0;
  padding-left: 16px;
  padding-top: 19px;

  &:placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`
