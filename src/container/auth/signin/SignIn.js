import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Button, Card, TextInput } from 'react-native-paper';
import { auth } from '../../../firebase/config';

const SignIn = ({ navigation }) => {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const onSubmitSigneIn  =()=>{
        auth
        .signInWithEmailAndPassword(email,password)
        .catch((error)=>alert(error));
    }
    return (
        <SafeAreaView style={styles.content}>
            <View style={styles.view}>
                <Card>
                    <Card.Title title="WELCOME TO EcoVoiturage " style={styles.cardTitle}></Card.Title>
                    <Card.Content>
                        <TextInput
                            label="Email"
                            keyboardType="email-adress"
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                        />
                        <TextInput label="Password"
                            secureTextEntry={true}
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                        />           
                        <Button uppercase={false} style={styles.cardButton}> Forgot mail or password</Button>
                        <Button mode="contained" style={styles.cardButton} onPress={onSubmitSigneIn}>login</Button>
                        <Button style={styles.cardButton} onPress={() => navigation.navigate('Register')}>Register</Button>

                    </Card.Content>
                </Card>
            </View>
        </SafeAreaView>
    );
}
export default SignIn;

const styles = StyleSheet.create({
    content: {
        flex: 1,
        
        display: "flex",
        justifycontent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "rgb(101,37,131)",
    },
    view: {
        width: "80%"
    },
    cardTitle: {
        color: "rgb(101,37,131)"
    },
    cardButton: {
        margin: 2,
        marginLeft: 0,
        marginRight: 0,
    }
})

