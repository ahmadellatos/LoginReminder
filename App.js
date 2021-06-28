import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import SignIn from './Pages/SignIn'
import GetStarted from './Pages/GetStarted'
import SignUp from './Pages/SignUp'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './Pages/HomePage'


const Stack = createStackNavigator();

function App() {


  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Start"
          screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen name="Start" component={GetStarted} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="HomePage" component={HomePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#009387'

  }
})

export default App