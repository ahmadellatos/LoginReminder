import React from 'react'
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native'


export default function GetStarted({ navigation }) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("../Assets/ReminderButtonCaption.png")} />
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')} style={styles.buttonSubmit}>
                <Text style={{ textAlign: 'center', color: '#009387' }}>Get Started</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        height: 200,
        width: 250,
    },
    buttonSubmit: {
        marginTop: 15,
        padding: 15,
        backgroundColor: "white",
        borderRadius: 4,
        width: '100%'
    }
})
