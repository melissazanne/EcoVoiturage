import React, { Component } from 'react';
import {View ,Text , StyleSheet,TouchableOpacity,SafeAreaView,Image,TextInput} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions'
import * as ImagePicker from 'expo-image-picker';
import firebase from 'firebase'
import "firebase/firestore";
import Fire from './Fire';
import { auth } from '../../firebase/config';

export class AddVehiculScreen extends Component {
    state = {
        marque:"",
        category:"",
        motorisation:"",
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
        
        Fire.shared.addPost({
            marque:this.state.marque.trim(),
            category:this.state.category.trim(),
            motorisation:this.state.motorisation.trim(),
            email:this.state.email.trim(),
            localUri:this.state.image}).then(ref=>{
            this.setState({text:"",
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
                  placeholder="Marque"
                  onChangeText={marque =>this.setState({marque})}
                  value={this.state.marque}
                   ></TextInput>
                </View>
                
                <View style={styles.inputContainer}>
                 <TextInput
                  autoFocus={true} 
                  multiline={true}
                  numberOfLines={4} 
                  style={styles.textInput} 
                  placeholder="categorie"
                  onChangeText={category =>this.setState({category})}
                  value={this.state.category}
                   ></TextInput>
                </View> 
                <View style={styles.inputContainer}>
                 <TextInput
                  autoFocus={true} 
                  multiline={true}
                  numberOfLines={4} 
                  style={styles.textInput} 
                  placeholder="motorisation"
                  onChangeText={motorisation =>this.setState({motorisation})}
                  value={this.state.motorisation}
                   ></TextInput>
                </View>
                
                <TouchableOpacity style={styles.photo} onPress={this.pickImage}>
                    <Ionicons name="md-camera" size={32} color="#D8D9DZB"></Ionicons>
                </TouchableOpacity>
                <View style={{marginHorizontal:32,marginTop:42,height:100}}>
                       <Image 
                       source={{uri:this.state.image}}
                       style={{width:"50%" ,height:"50%"}}
                       ></Image>
                </View> 
            </SafeAreaView>
        )
    }
}

export default AddVehiculScreen


const styles = StyleSheet.create({
    container:{
      flex:1
    },
    header:{
        flexDirection:"row",
        justifyContent: 'space-between',
        paddingHorizontal:32,
        paddingVertical:12,
        marginTop:20,
        borderBottomWidth:1,
        borderBottomColor:"#D8D9DB"
    },
    inputContainer:{
     margin:32,
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