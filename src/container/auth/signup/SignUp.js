import React from 'react'
import {SafeAreaView,StyleSheet, View} from 'react-native';
import {Button, Card,TextInput} from 'react-native-paper';



const SignUp = ({navigation}) => {
    return (
        <SafeAreaView style={styles.content}>
            <View style={styles.view}>
            <Card>
                <Card.Title title = "WELCOME TO EcoVoiturage " style={styles.cardTitle}></Card.Title>
                <Card.Content>
                    
                    
                    <Button mode="contained" style={styles.cardButton}  onPress={()=>navigation.navigate('RegisterClient')}>Client</Button>
                    <Button  style={styles.cardButton} onPress={()=>navigation.navigate('RegisterSociete')}>Societe</Button>

                </Card.Content>
            </Card>
            </View>
             </SafeAreaView>
        
    )
}

export default SignUp

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
