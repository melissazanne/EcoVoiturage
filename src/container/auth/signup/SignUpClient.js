import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import {SafeAreaView,StyleSheet, View} from 'react-native';
import {Button, Card,TextInput} from 'react-native-paper';
import firebase from 'firebase';
import 'firebase/firestore';

 const SignUpClient = ({navigation}) =>{
const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')
const [email, setEmail] = useState('')
const [number, setNumber] = useState('')
const [password, setPassword] = useState('')
const onSubmitFormClient = ()=>{
    try {
        firebase.auth().createUserWithEmailAndPassword(email,password)
           .then((result)=> {
               firebase
               .firestore()
               .collection('users')
               .doc(firebase.auth().currentUser.uid)
               .set({
                   firstName,
                   lastName,
                   email,
                   number,
                   status:'client'
               })
               console.log(result)
           }).catch((error)=>{
               console.log(error)
           }) 
    } catch (error) {
            console.log(error)
                   
    }
}
    return (
        <SafeAreaView style={styles.content}>
            <View style={styles.view}>
            <Card>
                <Card.Title title = "WELCOME TO EcoVoiturage " style={styles.cardTitle}></Card.Title>
                <Card.Content>
                    <TextInput
                     label="Nom " 
                     keyboardType= "user"
                     value={firstName}
                     onChangeText={(text)=>setFirstName(text)}
                     />

                    <TextInput 
                    label="Prenom " 
                    keyboardType= "user" 
                    value={lastName}
                    onChangeText={(text)=>setLastName(text)}
                    />

                    <TextInput 
                    label="Email" 
                    keyboardType= "email-adress" 
                    value={email}
                    onChangeText={(text)=>setEmail(text)}
                    />

                    <TextInput 
                    label="Numeros de Telephone" 
                    keyboardType= "numerique" 
                    value={number}
                    onChangeText={(text)=>setNumber(text)}
                    />

                    <TextInput label= "Password"
                     secureTextEntry ={true} 
                     value ={password}
                     onChangeText={(text)=>setPassword(text)}
                     />
                     
                    <Button uppercase={false} style={styles.cardButton}> Forgot mail or password</Button>
                    <Button mode="contained" style={styles.cardButton} onPress={onSubmitFormClient}>Register</Button>
                    

                </Card.Content>
            </Card>
            </View>
             </SafeAreaView>
    );
}
export default SignUpClient;

const styles = StyleSheet.create({
    content :{
        display : "Flex",
        flex :1,
        justifycontent : "center",
        alignItems : "center",
        flexDirection :"row",
        backgroundColor :"rgb(101,37,131)", 
    },
    view:{
        width : "80%"
    },
    cardTitle: {
        color:"rgb(101,37,131)"
    },
    cardButton: {
        margin: 2,
        marginLeft: 0,
        marginRight: 0,
    }
})

