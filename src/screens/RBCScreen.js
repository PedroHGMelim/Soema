import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, FlatList } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const dados = [
    { BPM: '139', data: '01-11-2020', status: 'Elevado'},
    { BPM: '109', data: '22-03-2021', status: 'Elevado'},
    { BPM: '95', data: '10-04-2021', status: 'Médio-Elevado'},
    { BPM: '71', data: '30-04-2021', status: 'Médio'},
    { BPM: '93', data: '01-10-2021', status: 'Médio-Elevado'},
    { BPM: '97', data: '14-10-2021', status: 'Médio-Elevado'},
    { BPM: '84', data: '10-01-2022', status: 'Médio'},
    { BPM: '83', data: '25-01-2022', status: 'Médio'},
    { BPM: '100', data: '10-02-2022', status: 'Médio-Elevado'},
    { BPM: '113', data: '12-03-2023', status: 'Elevado'},
    { BPM: '122', data: '24-11-2023', status: 'Elevado'},
    { BPM: '67', data: '08-04-2024', status: 'Médio'},
    { BPM: '104', data: '09-12-2024', status: 'Elevado'},
    { BPM: '137', data: '05-01-2025', status: 'Elevado'},
    { BPM: '69', data: '12-05-2025', status: 'Médio'},
    { BPM: '139', data: '01-11-2020', status: 'Elevado'},
];

export default function RBCScreen({ navigation }) {
    return (
        <View style={styles.container}>

            <FlatList
                data={dados}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <Text>{item}</Text>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15
    }
})