import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
 

    buttonsContainer: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
    },

    button: {
        height: 'auto',
        width: '50%',
        backgroundColor: '#333',
        paddingHorizontal: 10,
        paddingVertical: 20,
        justifyContent: 'center', 
    },
    
    buttonPerfil: {
        backgroundColor: '#FFCBA3',
    },

    buttonPets: {
        backgroundColor: '#F5AC73',
    },

    buttonProfissional: {
        backgroundColor: '#FFA057',
    },

    buttonCalendar: {
        backgroundColor: '#D38447',
    },

    buttonTips: {
        backgroundColor: '#B56426',
    },

    buttonHelp: {
        backgroundColor: '#8F450D',
    },

    buttonText: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 20,
        textAlign: 'center',
        textAlignVertical: 'center',
        paddingTop: 5  
    }

});

export default style;