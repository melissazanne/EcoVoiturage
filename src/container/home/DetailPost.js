import React, { Component } from 'react';
import { Alert, Button, Text,StyleSheet, SafeAreaView,TextInput, ScrollView, ActivityIndicator,Image, View   } from 'react-native';
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
                                    source={require('../../../assets/personnel.png')}
                                    size={80}

                                />
                            </TouchableRipple>

                            <View style={{ marginLeft: 20 }}>
                                <Title style={[styles.title, { marginTop: 15, marginBottom: 5 }]}>{this.state.fullNameDriver} {this.state.phone}    </Title>
                                  <Caption style={styles.title}>{this.state.email}</Caption>
                                  <Caption style={styles.title}>{this.state.catPermis}</Caption>
                            </View>
                        </View>
                    </View>
                    <View style={styles.userInfoSection}>
                    <View style={styles.row}>
                    <Image source={require('../../../assets/marque.png')} style={styles.avatar} />
                            <Text style={{ color: "#777777", marginLeft: 20 }}>{this.state.brandVeheicule}</Text>
                        </View>
                        <View style={styles.row}>
                        <Image source={require('../../../assets/vehicul.png')} style={styles.avatar} />
                            <Text style={{ color: "#777777", marginLeft: 20 }}>{this.state.modelVeheicule}</Text>
                        </View>
                        
                        <View style={styles.row}>
                        <Image source={require('../../../assets/catvehicul.png')} style={styles.avatar} />
                            <Text style={{ color: "#777777", marginLeft: 20 }}>{this.state.catVeheicule}</Text>
                        </View>
                        <View style={styles.row}>
                        <Image source={require('../../../assets/motorisation.png')} style={styles.avatar} />
                            <Text style={{ color: "#777777", marginLeft: 20 }}>{this.state.motorisationVeheicule}</Text>
                        </View>
                        <View style={styles.row}>
                        <Image source={require('../../../assets/start.png')} style={styles.avatar} />
                            <Text style={{ color: "#777777", marginLeft: 20 }}>{this.state.startCity}</Text>
                        </View>
                        <View style={styles.row}>
                        <Image source={require('../../../assets/end.png')} style={styles.avatar} />
                            <Text style={{ color: "#777777", marginLeft: 20 }}>{this.state.endCity}</Text>
                        </View>
                        <View style={styles.row}>
                        <Image source={require('../../../assets/distance.png')} style={styles.avatar} />
                            <Text style={{ color: "#777777", marginLeft: 20 }}>{this.state.distance}</Text>
                        </View>
                        <View style={styles.row}>
                        <Image source={require('../../../assets/place.png')} style={styles.avatar} />
                            <Text style={{ color: "#777777", marginLeft: 20 }}>{this.state.numberOfPlace}</Text>
                        </View>
                        <View style={styles.row}>
                        <Image source={require('../../../assets/date.png')} style={styles.avatar} />
                            <Text style={{ color: "#777777", marginLeft: 20 }}>{this.state.dateVoyage}</Text>
                        </View>
                        <View style={styles.row}>
                        <Image source={require('../../../assets/prices.png')} style={styles.avatar} />
                            <Text style={{ color: "#777777", marginLeft: 20 }}>{this.state.price}</Text>
                        </View>
      
                        <View style={styles.row}>
                        <Image source={require('../../../assets/start.png')} style={styles.avatar} />
                            <Text style={{ color: "#777777", marginLeft: 20 }}>{this.state.startPlace}</Text>
                        </View>
                        <View style={styles.row}>
                        <Image source={require('../../../assets/end.png')} style={styles.avatar} />
                            <Text style={{ color: "#777777", marginLeft: 20 }}>{this.state.endPlace}</Text>
                        </View>
                        <View style={styles.row}>
                        <Image source={require('../../../assets/time.png')} style={styles.avatar} />
                            <Text style={{ color: "#777777", marginLeft: 20 }}>{this.state.time}</Text>
                        </View>
                        <View style={styles.containerb}>
                        <Button title={"Reserver"} onPress={()=>this.navigation.navigate("reserve")} />
                    </View>
                    </View>
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
    containerb: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center"
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