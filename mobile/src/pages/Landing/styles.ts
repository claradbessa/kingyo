import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EE812E',
        justifyContent: 'center',
        padding: 40
    },

    banner: {
        width: '100%',
        height:'40%',
        resizeMode: 'contain'
    },

    title: {
        fontFamily: 'Poppins_400Regular',
        color: '#FFF',
        fontSize: 20,
        lineHeight: 30,
        marginTop: 20
    },

    titleBold: {
        fontFamily: 'Poppins_600SemiBold',
    },

    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 30,
        justifyContent: 'space-between',
    },

    button: {
        height: 'auto',
        width: '48%',
        backgroundColor: '#333',
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 20,
        justifyContent: 'space-between',
    },

    buttonPrimary: {
        backgroundColor: '#FFA057',
    },

    buttonSecondary: {
        backgroundColor: '#C9600E',
    },

    buttonText: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 18,
        textAlign: 'center',
        textAlignVertical: 'center'  
    },

    loginText: {
        fontFamily: 'Poppins_400Regular',
        color: '#FFF',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 20,
        textDecorationColor: '#FFF',
        textDecorationLine: 'underline'  
    }

});

export default styles;