import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../container/auth/signin/SignIn';
import SignUp from '../container/auth/signup/SignUp';
import SignUpClient from '../container/auth/signup/SignUpClient';
import SignUpSociete from '../container/auth/signup/SignUpSociete';
const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator>
        <Stack.Screen name="Login" component={SignIn} />
        <Stack.Screen name="Register" component={SignUp} />
        <Stack.Screen name="RegisterClient" component={SignUpClient} />
        <Stack.Screen name="RegisterSociete" component={SignUpSociete} />
      </Stack.Navigator>
    )
}

export default AuthStack

const styles = StyleSheet.create({})
