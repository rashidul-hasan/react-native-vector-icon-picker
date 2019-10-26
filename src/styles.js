import {
    StyleSheet,
    Dimensions
} from 'react-native';
const numColumns = 4;

export default StyleSheet.create({
    container: {
        backgroundColor: "#000",
        flex: 1
    },
    title: {
        color: '#00000089',
        fontSize: 18,
        fontWeight: '700',
        textAlignVertical: 'center',
        marginBottom: 15

    },
    content: {
        flexDirection: 'column',
        backgroundColor: '#fff',
        maxHeight: '80%',
        borderRadius: 5,
        width: '80%',
        padding: 20
    },
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    listContainer: {
        flex: 1,
        marginVertical: 20,
    },
    item: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 3,
        height: Dimensions.get('window').width / numColumns, // approximate a square
        borderWidth: 1,
        borderColor: '#ddd'
    },
    itemInvisible: {
        backgroundColor: 'transparent',
        borderWidth: 0
    },
    itemText: {
        color: '#fff',
    },

});
