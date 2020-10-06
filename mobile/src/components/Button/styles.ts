import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 55px;
  background: #EE812E;
  border-radius: 7px;
  margin-top: 8px;
  flex-direction: row;  
  align-items: center;
`;

export const ButtonText = styled.Text`
width: 100%;
color: #FFF;
font-size: 18px;
fontFamily: Archivo_700Bold;
flex-direction: row;
justify-content: center;
text-align: center;
`;