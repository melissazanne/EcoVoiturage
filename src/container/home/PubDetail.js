import React, { Component } from 'react';
import { Alert, Button, Text,StyleSheet, SafeAreaView,TextInput, ScrollView, ActivityIndicator,Image, View } from 'react-native';
import firebase from 'firebase'
import "firebase/firestore";
import { ListItem } from "react-native-elements";
import { Ionicons, AntDesign, Fontisto } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Avatar,
  Title,
  Caption,
  TouchableRipple,

} from 'react-native-paper';

export class DetailPost extends Component {
    constructor(props){
        super(props)
        this.navigation = props.navigation ;
        this.state = {  
          isVisible: false, //state of modal default false  
        }
      }
    
  componentDidMount() {
    const dbRef = firebase.firestore().collection('posts').doc(this.props.route.params.userkey)
    dbRef.get().then((res) => {
      if (res.exists) {
        const post = res.data();
        this.setState({
          key: res.id,
          fullNameDriver: post.fullNameDriver,
          email: post.email,
          phone: post.phone,
          catPermis: post.catPermis,
          brandVeheicule: post.brandVeheicule,
          modelVeheicule: post.modelVeheicule,
          catVeheicule: post.catVeheicule,
          motorisationVeheicule: post.motorisationVeheicule,
          startCity: post.startCity,
          endCity: post.endCity,
          distance: post.distance,
          numberOfPlace: post.numberOfPlace,
          dateVoyage: post.dateVoyage,
          price: post.price,
          startPlace: post.startPlace,
          endPlace: post.endPlace,
          time: post.time,
          isLoading: false,
        });
      } else {
        console.log("Document does not exist!");
      }
    });
  }

  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }
        return (
            <ScrollView>
                <SafeAreaView style={styles.container}>
                <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <TouchableRipple onPress={() => navigation.navigate('Profile')}>
                                <Avatar.Image
                                    source={{
                                        uri: 'https://img.freepik.com/vecteurs-libre/contexte-du-docteur_1270-84.jpg?size=338&ext=jpg&ga=GA1.2.699125266.1619654400',
                                    }}
                                    size={80}

                                />
                            </TouchableRipple>

                            <View style={{ marginLeft: 20 }}>
                                <Title style={[styles.title, { marginTop: 15, marginBottom: 5 }]}>{this.state.fullName}</Title>
                                  <Caption style={styles.title}>{this.state.specialite}</Caption>
                                  <Caption style={styles.title}>{this.state.status}</Caption>
                            </View>
                        </View>
                    </View>
                    <View style={styles.lineStyle} />
                    <View style={styles.profileContainer}>
                    
                    <View style={styles.row}>
                    <Text>Disponibilité</Text>
                            <Text style={{ color: "#777777", marginLeft: 20 }}>du lundi au samedi 8H a 12H et 14H a 20H</Text>
                        </View>
                    </View>
                    
                    <View style={styles.lineStyle} />
                    <View style={styles.userInfoSection}>
                    <View style={styles.row}>
                            <Icon name="phone" color="#777777" size={20} />
                            <Text style={{ color: "#777777", marginLeft: 20 }}>Numero:{this.state.number}</Text>
                        </View>
                        <View style={styles.row}>
                            <Icon name="map-marker-radius" color="#777777" size={20} />
                            <Text style={{ color: "#777777", marginLeft: 20 }}>Adrrese:{this.state.address}</Text>
                        </View>
                        
                        <View style={styles.row}>
                            <Icon name="city" color="#777777" size={20} />
                            <Text style={{ color: "#777777", marginLeft: 20 }}>Ville:{this.state.city}</Text>
                        </View>
                        <View style={styles.row}>
                        <Image source={require('../../../../../assets/email.png')} style={styles.avatar} />
                            <Text style={{ color: "#777777", marginLeft: 20 }}>Email:{this.state.email}</Text>
                        </View>
                        <View style={styles.row}>
                        <Image source={require('../../../../../assets/zip.png')} style={styles.avatar} />
                            <Text style={{ color: "#777777", marginLeft: 20 }}>Code postal:{this.state.codePostal}</Text>
                        </View>
                        <View style={styles.row}>
                        <Image source={require('../../../../../assets/formation.png')} style={styles.avatar} />
                            <Text style={{ color: "#777777", marginLeft: 20 }}>formation:{this.state.formation}</Text>
                        </View>
                        <View style={styles.row}>
                        <Image source={require('../../../../../assets/exp.png')} style={styles.avatar} />
                            <Text style={{ color: "#777777", marginLeft: 20 }}>Experience:{this.state.experience}</Text>
                        </View>
                        <View style={styles.row}>
                        <Image source={require('../../../../../assets/etu.png')} style={styles.avatar} />
                            <Text style={{ color: "#777777", marginLeft: 20 }}>Niveau d'etude:{this.state.niveauEtude}</Text>
                        </View>
                        <View style={styles.row}>
                            <Image source={require('../../../../../assets/ar.png')} style={styles.avatar} />
                            <Text style={{ color: "#777777", marginLeft: 20 }}>Tarif de consultation:1000 Fcfa</Text>
                        </View>
                        <View style={styles.row}>
                        <Image source={require('../../../../../assets/appoin.png')} style={styles.avatar} />
                            <Caption onPress={() => this.props.navigation.navigate('RendezVous')}>prendre un rendez-vous</Caption>
                        </View>
                    </View>
                    <ListItem >
                        <Image source={require('../../../../../assets/map.jpg')} style={styles.avatarmap} />
                        <ListItem.Content>
                            <ListItem.Title style={styles.menuItemText} >
                                Optenir le chemin du cabinet
                            </ListItem.Title>
                            <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
                            </ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                </SafeAreaView>
            </ScrollView>
        )
    }
}

export default DetailPost

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"white"
    },
    userInfoSection: {
        paddingHorizontal: 20,
        marginBottom: 25,
      
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    infoBoxWrapper: {
        borderBottomColor: '#00716F',
        borderBottomWidth: 1,
        borderTopColor: '#00716F',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
    },
    infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuWrapper: {
        marginTop: 10,
    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    menuItemText: {
        color: '#00716F',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginLeft:0,
        color:"#fff"

    },
    avatarmap: {
        width: 100,
        height: 50,
        borderRadius: 15,
        marginLeft:0,
        color:"#fff"

    },
    lineStyle: {
        borderWidth: 0.5,
        borderColor: 'blue',
        margin: 10,

    }
});