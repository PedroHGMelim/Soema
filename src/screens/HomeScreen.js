import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home Screen</Text>
            <View style={styles.buttonContainer}>
                <Button
                title="Go to RBC"
                onPress={() => navigation.navigate('RBC')}
                />
            </View>
            
            <View style={styles.buttonContainer}>
                <Button
                title="Exit"
                onPress={() => navigation.navigate('Login')}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f8ff', //cor de fundo da tela
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    buttonContainer: {
        backgroundColor: '#add8e6', //cor de fundo do container do botão
        margin: 10,
        width: windowWidth * 0.5, //50% da largura da tela
        borderRadius: 5,
    },
});