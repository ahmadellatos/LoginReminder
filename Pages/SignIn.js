import React, { useState, useEffect, useContext } from 'react'
import { ScrollView, Text, Image, TextInput, StyleSheet, TouchableOpacity, View } from 'react-native'
import HomePage from './HomePage';
import auth from '@react-native-firebase/auth';
import { AuthContext } from '../Authentication/AuthProvider';





function SignIn({ navigation }) {


    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const { login } = useContext(AuthContext)
    // const [initializing, setInitializing] = useState(true);
    // const [user, setUser] = useState();

    // function onAuthStateChanged(user) {
    //     setUser(user);
    //     if (initializing) setInitializing(false);
    // }

    // useEffect(() => {
    //     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    //     return subscriber; // unsubscribe on unmount
    // }, []);

    // function signInHandler() {
    //     alert('data sudah disimpan')
    //     auth()
    //         .signInWithEmailAndPassword(email, password)
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

    // if (initializing) return null;

    // if (!user) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image style={styles.image} source={require('../Assets/ReminderButtonCaption.png')} />
            <View>
                <Text style={styles.text}>Email : </Text>
                <TextInput
                    onChangeText={setEmail}
                    placeholderTextColor={'rgba(255,255,255,0.5)'}
                    keyboardType='email-address'
                    autoCapitalize='none'
                    value={email}
                    style={styles.border}
                    placeholder="Email" />
                <Text style={styles.text}>Password :</Text>
                <TextInput
                    onChangeText={setPassword}
                    value={password}
                    placeholderTextColor={'rgba(255,255,255,0.5)'}
                    secureTextEntry={true}
                    style={styles.border}
                    placeholder="Password" />
            </View>
            <View>
                <TouchableOpacity onPress={() => login(email, password)} style={styles.buttonSubmit}>
                    <Text style={{ textAlign: 'center', color: '#009387' }}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity >
                    <Text style={styles.signUpLink} onPress={() => navigation.navigate('SignUp')}>Dont Have Account? Click here to sign up</Text>
                </TouchableOpacity>
            </View>
        </ScrollView >
    );
}

// return (
//     <HomePage />
// )



const styles = StyleSheet.create({
    container: {
        padding: 20,
        flexGrow: 1,
        justifyContent: 'space-around',
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
    signUpLink: {
        marginTop: 10,
        borderColor: 'white',
        textAlign: 'center',
        fontSize: 13,
        color: 'white',
    },
    image: {
        // alignItems: 'center',
        height: 200,
        width: 250,
        // backgroundColor: 'white'
    }
})


export default SignIn
