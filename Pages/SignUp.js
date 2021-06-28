import React, { useState } from 'react'
import { ScrollView, KeyboardAvoidingView, SafeAreaView, Text, Image, TextInput, StyleSheet, TouchableOpacity, View } from 'react-native'


function SignUp() {

    const [userData, setuserData] = useState({
        email: '',
        password: ''
    })

    const emailHadler = (text) => {
        setuserData({
            ...userData,
            email: text
        })
    }

    const passwordHandler = (text) => {
        setuserData({
            ...userData,
            password: text
        })
    }
    return (
        <ScrollView contentContainerStyle={styles.signUpForm}>
            <View>
                <Text style={{ fontSize: 30, color: 'white' }}>Registration</Text>
                <Text style={styles.text}>email</Text>
                <TextInput onChangeText={emailHadler} placeholderTextColor={'rgba(255,255,255,0.5)'} style={styles.textInput} placeholder='Email' />
                <Text style={styles.text}>Password</Text>
                <TextInput onChangeText={passwordHandler} secureTextEntry={true} placeholderTextColor={'rgba(255,255,255,0.5)'} style={styles.textInput} placeholder='Password' />
                <Text style={styles.text}>Confirm Password</Text>
                <TextInput onChangeText={passwordHandler} secureTextEntry={true} placeholderTextColor={'rgba(255,255,255,0.5)'} style={styles.textInput} placeholder='Confirm Password' />
            </View>
            <View>
                <TouchableOpacity style={styles.buttonSubmit}>
                    <Text style={{ textAlign: 'center', color: '#009387' }}>Submit</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    text: {
        marginTop: 15,
        color: 'white'
    },
    textInput: {
        borderColor: 'white',
        borderRadius: 4,
        borderWidth: 1,
        marginTop: 10,
        color: 'white'
    },
    signUpForm: {
        flexGrow: 1,
        justifyContent: 'space-around',
        backgroundColor: '#009387',
        padding: 20

    },
    buttonSubmit: {
        marginTop: 15,
        padding: 15,
        backgroundColor: "white",
        borderRadius: 4,
    }
})

export default SignUp