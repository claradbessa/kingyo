import styled, { css } from 'styled-components/native';


interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

interface IconProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.View<ContainerProps>`
  height: 250px;
  padding: 0 16px;
  background: #fff;
  border-radius: 7px;
  margin-bottom: 20px;
  border-width: 2px;
  flex-direction: row;
  align-items: center;
  border-color:#fff
  ${props =>
    props.isErrored &&
    css`
      border-color: #e61919;
      margin-bottom: 0px;
    `}
  ${props =>
    props.isFocused &&
    css`
      border-color: #aaa;
    `}
`;

export const TextInput = styled.TextInput`
    width: 100%;
    height: 100%;
    color: #aaaaaa;
    fontFamily: Poppins_400Regular;
    font-size: 16px; 
`;

export const Text = styled.Text.attrs(({ theme }) => ({

}))`
  color: #e61919;
  fontFamily: Poppins_400Regular;
  font-size: 11px; 
  padding: 0 10px 8px 10px;
  
`;

