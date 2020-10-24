import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EE812E',
        justifyContent: 'center',
        padding: 40
    },
 
    background: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },

    textsContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        
    },

    image: {
        resizeMode: 'contain',
        width: '100%'
    },

    subtitle: {
        fontFamily: 'Poppins_400Regular',
        color: '#FFB780',
        fontSize: 14,
        lineHeight: 30,
        marginTop: 10,
        textAlign: 'center'
    },

    title: {
        fontFamily: 'Poppins_600SemiBold',
        color: '#FFF',
        fontSize: 30,
        lineHeight: 35,
        marginTop: 20,
        textAlign: 'center',
    
    },

    button: {
        height: 'auto',
        backgroundColor: '#FFB780',
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 20,
    
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },

    buttonText: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 18,
        textAlign: 'center',
        textAlignVertical: 'center'  
    },

});

export default styles;