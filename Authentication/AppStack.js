import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../Pages/HomePage'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import HistoryPage from '../Pages/HistoryPage';
import Ionicons from 'react-native-vector-icons/Ionicons'


const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();


const homePageStackNav = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="HomePage"
                component={HomePage}
                options={{
                    title: 'Home Page',
                    headerStyle: {
                        backgroundColor: '#009387',
                    },
                    headerTintColor: '#fff',
                    headerTitleAlign: 'center'
                }}
            />
        </Stack.Navigator >
    )
}

const historyStackNav = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="History"
                component={HistoryPage}
                options={{
                    title: 'History',
                    headerStyle: {
                        backgroundColor: '#009387',
                    },
                    headerTintColor: '#fff',
                    headerTitleAlign: 'center'
                }}
            />
        </Stack.Navigator>
    )
}


const AppStack = () => {


    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'ios-information-circle'
                            : 'ios-information-circle-outline';
                    } else if (route.name === 'Settings') {
                        iconName = focused ? 'ios-list-box' : 'ios-list';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Home" component={homePageStackNav} />
            <Tab.Screen name="History" component={historyStackNav} />
        </Tab.Navigator>
    )
}

export default AppStack

const styles = StyleSheet.create({})
