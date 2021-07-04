import React, { useContext } from 'react'
import { StyleSheet, Text, Button, View } from 'react-native'
import auth from '@react-native-firebase/auth';
import { useEffect } from 'react';
import SignIn from './SignIn';
import { AuthContext } from '../Authentication/AuthProvider';


const HomePage = () => {

    const { user, logout } = useContext(AuthContext)

    function signOutHandler() {
        auth()
            .signOut()
            .then(() => console.log('User signed out!'));
    }

    return (
        <View>
            <Text>Helo {user.uid}</Text>
            <Button onPress={() => logout()} title='Sign Out' />
        </View>
    )
}

export default HomePage

const styles = StyleSheet.create({})
