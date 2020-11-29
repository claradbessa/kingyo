import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20
    },

   text:{
       padding: 10,
       textAlign:'justify',
       color: '#111'
   },

   title:{
    padding: 10,
    textAlign:'center',
    color: '#EE812E',
    fontSize: 15
}

});

export default styles;