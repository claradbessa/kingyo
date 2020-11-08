import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },

    containerButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 20
    },

    button: {
        height: 'auto',
        width: '48%',
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 20,
        justifyContent: 'space-between',
        backgroundColor: '#fff',
    },

    buttonText: {
        fontFamily: 'Archivo_700Bold',
        color: '#32264D',
        fontSize: 18,
        textAlign: 'center',
        textAlignVertical: 'center' ,
        paddingTop: 5 
    },

    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#EE812E',
        paddingHorizontal: 20,
        paddingVertical: 20
    },

    profileInfo: {
        paddingHorizontal: 10
    },

    name: {
        fontFamily: 'Archivo_700Bold',
        color: '#fff',
        fontSize: 26,
    },

    subject: {
        fontFamily: 'Poppins_400Regular',
        color: '#fff',
        fontSize: 14,
        marginTop: 4,
    },

    bio: {
        marginHorizontal: 24,
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        lineHeight: 24,
        color: '#646180'
    },

});

export default styles;