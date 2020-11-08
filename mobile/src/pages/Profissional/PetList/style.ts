import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 40,
        paddingVertical: 20
    },

    button: {
        position: 'absolute',
        bottom: 0,
        right: 15
    },

    buttonText: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 40,
        textAlign: 'center',
        textAlignVertical: 'center'  
    }

});

export default styles;