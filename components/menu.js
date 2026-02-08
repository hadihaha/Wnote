import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

function Menu({ chatOrNote }) {
    return (
        <View>
            <Pressable >
                <Text>{chatOrNote ? 'note' : 'chat'}</Text>

            </Pressable>
        </View>
    )
}

export default Menu

const styles = StyleSheet.create({})