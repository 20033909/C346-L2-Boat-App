import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    boatContainer: {
        marginBottom: 25,
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 8
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 8
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10
    },
    description: {
        fontSize: 16,
        marginTop: 5,
        color: '#555'
    },

    container: {

        flex: 1

    },
    titleContainer: {
        flexDirection: 'row',  // This aligns the icons and text horizontally
        justifyContent: 'center',  // Center the content horizontally
        alignItems: 'center',  // Vertically center the content
        marginVertical: 20  // Add some space above and below
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#D89E79',
        marginHorizontal: 10 // Space between the icons and title
    },
    iconFlip: {
        transform: [{ scaleX: -1 }]
    },
    iconSizeColor: {
        fontSize: 34,
        color: '#c1d11f'
    },
    overlay: {
        ...StyleSheet.absoluteFillObject, // Makes the overlay fill the entire ImageBackground
        backgroundColor: 'rgba(128, 0, 128, 0.16)' // Purple color with 16% opacity
    }



});

export default styles;