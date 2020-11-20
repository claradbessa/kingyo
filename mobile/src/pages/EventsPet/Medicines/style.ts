import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';


export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const Div = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
 
`;

export const Title = styled.Text`
  font-size: 20px;
  margin: 20px 0 ;
  fontFamily: Poppins_400Regular;
  text-align: left;
`;
