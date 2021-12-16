import React, { Component } from 'react';
import {View ,Text , StyleSheet,TouchableOpacity,SafeAreaView,Image,TextInput} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions'
import * as ImagePicker from 'expo-image-picker';
import firebase from 'firebase'
import "firebase/firestore";
import FireChauffeurs from './FireChauffeurs';
import { auth } from '../../firebase/config';

export class AddChauffeurScreen extends Component {
    state = {
        firstName:"",
        lastName:"",
        phoneNumber:"",
        categoryOfPermis:"",
        image: null,
        email: auth.currentUser.email,
    };
    componentDidMount(){
        this.getPhotoPermission();
    }
    getPhotoPermission = async()=>{
        if (Constants.platform.ios) {
            const {status} =  await Permissions.askAsync(Permissions.CAMERA_ROLL)
            if (status!="granted") {
                alert("we need permission to access your camera roll");

            }
        }
    };
    handlePost=()=>{
        
        FireChauffeurs.shared.addPost({
            firstName:this.state.firstName.trim(),
            lastName:this.state.lastName.trim(),
            phoneNumber:this.state.phoneNumber.trim(),
            categoryOfPermis:this.state.categoryOfPermis.trim(),
            email:this.state.email.trim(),
            localUri:this.state.image}).then(ref=>{
            this.setState({
                firstName:"",
                lastName:"",
                phoneNumber:"",
                categoryOfPermis:"",
            image:null,
            email: auth.currentUser.email,
            creation: firebase.firestore.FieldValue.serverTimestamp()
        });
            this.props.navigation.goBack();
        }).catch(error=>{
            alert(error);
        })
        
    };
    pickImage =async()=>{
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes:ImagePicker.MediaTypeOptions.Images,
            allowsEditing:true,
            aspect:[4,3]
        })
        if (!result.cancelled) {
            this.setState({image:result.uri});
        }
    }

    render() {
        return (
            <SafeAreaView style ={styles.container}>
                <View style={styles.header}>
                <TouchableOpacity onPress={this.handlePost}>
                    <Text style={{fontWeight:"500"}}>Valider</Text>
                </TouchableOpacity>
                </View>
             
               <View style={styles.inputContainer}>
                 <TextInput
                  autoFocus={true} 
                  multiline={true}
                  numberOfLines={4} 
                  style={styles.textInput} 
                  placeholder="Nom"
                  onChangeText={lastName=>this.setState({lastName})}
                  value={this.state.lastName}
                   ></TextInput>
                </View>
                
                <View style={styles.inputContainer}>
                 <TextInput
                  autoFocus={true} 
                  multiline={true}
                  numberOfLines={4} 
                  style={styles.textInput} 
                  placeholder="Prenom"
                  onChangeText={firstName =>this.setState({firstName})}
                  value={this.state.firstName}
                   ></TextInput>
                </View> 
                <View style={styles.inputContainer}>
                 <TextInput
                  autoFocus={true} 
                  multiline={true}
                  numberOfLines={4} 
                  style={styles.textInput} 
                  placeholder="categorie de permis"
                  onChangeText={categoryOfPermis =>this.setState({categoryOfPermis})}
                  value={this.state.categoryOfPermis}
                   ></TextInput>
                </View>
                <View style={styles.inputContainer}>
                 <TextInput
                  autoFocus={true} 
                  multiline={true}
                  numberOfLines={4} 
                  style={styles.textInput} 
                  placeholder="Numeros de Telephone"
                  onChangeText={phoneNumber =>this.setState({phoneNumber})}
                  value={this.state.phoneNumber}
                   ></TextInput>
                </View>
                
                <TouchableOpacity style={styles.photo} onPress={this.pickImage}>
                    <Ionicons name="md-camera" size={32} color="#D8D9DZB"></Ionicons>
                </TouchableOpacity>
                <View style={{marginHorizontal:32,marginTop:62,height:70}}>
                       <Image 
                       source={{uri:this.state.image}}
                       style={{width:"50%" ,height:"50%"}}
                       ></Image>
                </View> 
            </SafeAreaView>
        )
    }
}

export default AddChauffeurScreen


const styles = StyleSheet.create({
    container:{
      flex:1
    },
    header:{
        flexDirection:"row",
        justifyContent: 'space-between',
        paddingHorizontal:32,
        paddingVertical:10,
        marginTop:10,
        borderBottomWidth:1,
        borderBottomColor:"#D8D9DB"
    },
    inputContainer:{
     margin:12,
     flexDirection:"row"
    },
    avatar:{
        width:48,
        height:48,
        borderRadius:24,
        marginRight:16
    },
    photo:{
        alignItems: 'flex-end',
        marginHorizontal:32
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: '100%',
        paddingHorizontal: 10,
      },
})