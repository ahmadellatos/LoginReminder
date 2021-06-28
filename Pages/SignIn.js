import React from 'react'
import { ScrollView, Text, Image, TextInput, StyleSheet, TouchableOpacity, View } from 'react-native'

function SignInForm() {
    return (
        <View>
            <Text style={styles.text}>Username : </Text>
            <TextInput placeholderTextColor={'rgba(255,255,255,0.5)'} style={styles.border} placeholder="Username" />
            <Text style={styles.text}>Password :</Text>
            <TextInput placeholderTextColor={'rgba(255,255,255,0.5)'} secureTextEntry={true} style={styles.border} placeholder="Password" />
        </View>
    )
}

function SignIn({ navigation }) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image style={styles.image} source={require('../Assets/ReminderButtonCaption.png')} />
            <SignInForm />
            <View>
                <TouchableOpacity style={styles.buttonSubmit}>
                    <Text style={{ textAlign: 'center', color: '#009387' }}>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity >
                    <Text style={styles.signUp} onPress={() => navigation.navigate('SignUp')}>Dont Have Account? Click here to sign up</Text>
                </TouchableOpacity>
            </View>
        </ScrollView >
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flexGrow: 1,
        justifyContent: 'space-around',
        // alignItems: 'center',
        backgroundColor: '#009387'

    },
    text: {
        marginTop: 15,
        color: 'white'
    },
    border: {
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 4,
        marginTop: 10,
        color: 'white'
    },
    buttonSubmit: {
        marginTop: 15,
        padding: 15,
        backgroundColor: "white",
        borderRadius: 4,
    },
    signUp: {
        marginTop: 5,
        borderColor: 'white',
        textAlign: 'center',
        fontSize: 13,
        color: 'white',
    },
    image: {
        height: 200,
        width: 250,
        // backgroundColor: 'white'
    }
})


export default SignIn
