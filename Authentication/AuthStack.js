import React from 'react'
import { StyleSheet } from 'react-native'
import SignIn from '../Pages/SignIn'
import GetStarted from '../Pages/GetStarted'
import SignUp from '../Pages/SignUp'
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../Pages/HomePage'


const AuthStack = () => {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName="Start"
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="Start" component={GetStarted} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
    )
}

export default AuthStack

const styles = StyleSheet.create({})
