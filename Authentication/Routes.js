import React, { useContext, useEffect, useState } from 'react'
import AuthStack from './AuthStack'
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from './AuthProvider';
import auth from '@react-native-firebase/auth'
import AppStack from '../Authentication/AppStack'

const Routes = () => {

    const { user, setUser } = useContext(AuthContext);
    const [initializing, setInitializing] = useState(true)

    const onAuthStateChanged = (user) => {
        setUser(user)
        if (initializing) setInitializing(false)
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return null

    return (
        <NavigationContainer>
            {user ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    )
}

export default Routes
