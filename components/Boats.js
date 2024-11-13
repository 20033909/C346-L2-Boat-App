import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import styles from './styles';

// Boat component to display boat details
const Boat = ({ name, description, picture }) => {
    return (
        <View style={styles.boatContainer}>
            {/* Directly use the picture prop, which already holds the resolved image path */}
            <Image source={picture} style={styles.image} />
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    );
};



export default Boat;