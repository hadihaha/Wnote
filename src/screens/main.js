import React from 'react'
import { StyleSheet, Button, Text, View, KeyboardAvoidingView, Platform } from 'react-native';
function main({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Main Menu</Text>

            <View style={styles.buttonContainer}>
                <Button
                    title="Go to Text Editor"
                    onPress={() => navigation.navigate('Editor')}
                />
            </View>

            <View style={styles.buttonContainer}>
                <Button
                    title="Go to Chat Bot"
                    onPress={() => navigation.navigate('Chat')}
                />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        fontWeight: 'bold',
    },
    buttonContainer: {
        marginVertical: 10, // Adds space between buttons
        width: '80%',
    }
});

export default main;