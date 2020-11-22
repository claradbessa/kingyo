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

    placeText: {
        fontFamily: 'Archivo_700Bold',
        color: '#8F450D',
        fontSize: 20,
        textAlign: 'left',
        textAlignVertical: 'center'  
    },

    itemCalendar: {
        backgroundColor: '#D38447',
        color: '#FFF'
    },

    themeCalendar: {
        backgroundColor: '#FFA057',
        color: '#F5AC73'
    }

});

export default styles;