import React from 'react';
import { SafeAreaView, ScrollView, Text, View, ImageBackground} from 'react-native';
import Boat from './components/Boats';
import boats from './components/boatArray';
import styles from './components/styles';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require('./assets/img/pexels-asadphoto-240526.jpg')} // Add your image path here
                style={styles.backgroundImage}
                resizeMode="cover" // Ensures the image covers the entire background
            >
                <View style={styles.overlay} />


            <ScrollView>
                <View style={styles.titleContainer}>
                    <Icon name="palm-tree" style ={styles.iconSizeColor}/>
                    <Text style={styles.title}>GETABOAT - FOR SALE</Text>
                    <Icon name="palm-tree" style={[styles.iconSizeColor, styles.iconFlip]} />
                </View>

                {boats.map((boat, index) => (
                    <Boat
                        key={index}
                        name={boat.name}
                        description={boat.description}
                        picture={boat.picture}
                    />
                ))}
            </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    );
};

export default App;