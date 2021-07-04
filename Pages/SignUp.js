import React, { useContext, useState } from 'react'
import { ScrollView, KeyboardAvoidingView, SafeAreaView, Text, Image, TextInput, StyleSheet, TouchableOpacity, View } from 'react-native'
import auth from '@react-native-firebase/auth';
import { AuthContext } from '../Authentication/AuthProvider';


function SignUp({ navigation }) {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const { register } = useContext(AuthContext)

    // function signUpHandler() {
    //     auth()
    //         .createUserWithEmailAndPassword(email, password)
    //         .then(() => {
    //             console.log('User account created & signed in!');
    //         })
    //         .catch(error => {
    //             if (error.code === 'auth/email-already-in-use') {
    //                 console.log('That email address is already in use!');
    //             }

    //             if (error.code === 'auth/invalid-email') {
    //                 console.log('That email address is invalid!');
    //             }

    //             console.error(error);
    //         });

    // }


    return (
        <ScrollView contentContainerStyle={styles.signUpForm}>
            <View>
                <Text style={{ fontSize: 30, color: 'white' }}>Registration</Text>
                <Text style={styles.text}>email</Text>
                <TextInput
                    onChangeText={(text) => setEmail(text)}
                    placeholderTextColor={'rgba(255,255,255,0.5)'}
                    style={styles.textInput}
                    value={email}
                    keyboardType='email-address'
                    autoCapitalize='none'
                    placeholder='Email' />
                <Text style={styles.text}>Password</Text>
                <TextInput
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry={true}
                    value={password}
                    placeholderTextColor={'rgba(255,255,255,0.5)'}
                    style={styles.textInput}
                    placeholder='Password' />
                <Text style={styles.text}>Confirm Password</Text>
                <TextInput
                    // onChangeText={passwordHandler}
                    secureTextEntry={true}
                    placeholderTextColor={'rgba(255,255,255,0.5)'}
                    style={styles.textInput}
                    placeholder='Confirm Password' />
            </View>
            <View>
                <TouchableOpacity
                    style={styles.buttonSubmit}
                    onPress={() => { register(email, password) }}
                >
                    <Text style={{ textAlign: 'center', color: '#009387' }}>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity >
                    <Text style={styles.signInLink} onPress={() => navigation.navigate('SignIn')}>Dont You Have An Account? Click Here To Sign In</Text>
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
    },
    signInLink: {
        marginTop: 10,
        borderColor: 'white',
        textAlign: 'center',
        fontSize: 13,
        color: 'white',
    }
})

export default SignUp