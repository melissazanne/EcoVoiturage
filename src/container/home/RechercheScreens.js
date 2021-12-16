import React, { useState } from 'react'
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native'
import { ListItem, SearchBar, Avatar } from "react-native-elements";
import firebase from 'firebase';
import 'firebase/firestore';

const RechercheScreens = (props) => {

    const [posts, setPosts] = useState([])

    const searchPostCity = (search) => {
        firebase.firestore()
            .collection('posts')
            .where('startCity', '>=', search)
            .get()
            .then((snapshot) => {
                let posts = snapshot.docs.map(doc => {
                    const data = doc.data();
                    const id = doc.id;
                    return { id, ...data }
                });
                setPosts(posts)
            })

    }

    const searchPost = (search) => {
        firebase.firestore()
            .collection('posts')
            .where('startPlace', '>=', search)
            .get()
            .then((snapshot) => {
                let posts = snapshot.docs.map(doc => {
                    const data = doc.data();
                    const id = doc.id;
                    return { id, ...data }
                });
                setPosts(posts)
            })

    }
    return (
        // <View>
        //     <TextInput 
        //     placeholder="Type Here ..."
        //     onChangeText={(search)=> searchPost(search)}
        //     />
        //     <FlatList
        //         numColumns={1}
        //         horizontal={false}
        //         data={posts}
        //         renderItem={({ item }) => (
        //             <TouchableOpacity
        //                 onPress={() => props.navigation.navigate("getSearh" , {uid: item.id})}>
        //                 <Text>{item.startPlace}</Text>
        //             </TouchableOpacity>
        //         )}
        //     />
        // </View>
        <SafeAreaView style={styles.container}>

            <Image source={require('../../../assets/google-maps.jpg')} style={styles.coverPhoto} />

            <View style={styles.SectionStyle1}>
                <Text style={{ flex: 1 }}
                >Chercher une ville de depart</Text>
            </View>
            <TextInput
                placeholder="Type une ville ..."
                onChangeText={(search) => searchPostCity(search)}
                style={styles.SectionStyle}
            />
            <FlatList
                numColumns={1}
                horizontal={false}
                data={posts}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate("getSearh", { uid: item.id })}>
                        <Text style={styles.startPlace}>{item.startCity}</Text>
                    </TouchableOpacity>
                )}
            />
            <View style={styles.SectionStyle1}>
                
                <Text style={{ flex: 1 }}
                >Chercher un lieu de depart</Text>
            </View>
            <TextInput
                placeholder="saisir un lieu ..."
                onChangeText={(search) => searchPost(search)}
                style={styles.SectionStyle}

            />
            <FlatList
                numColumns={1}
                horizontal={false}
                data={posts}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate("getSearh", { uid: item.id })}>
                        <Text style={styles.startPlace}>{item.startPlace}</Text>
                    </TouchableOpacity>
                )}
            />

        </SafeAreaView>
    )
}

export default RechercheScreens
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#eeeeee",
        width: "100%",
        height: "100%",
    },



    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#000',
        height: 40,
        width: '80%',
        borderRadius: 5,
        margin: 10,
    },

    SectionStyle1: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#000',
        height: 40,
        width: '80%',
        borderRadius: 5,
        margin: 10,
    },
    ImageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    coverPhoto: {
        width: "100%",
        height: 180,
    },
    dpContainer: {
        width: 300,
        height: 350,
        backgroundColor: 'white',
        position: "absolute",
        alignSelf: "center",
        marginTop: 160,
        alignItems: 'center',
        justifyContent: 'center',
    },
    antecedent: {
        width: 300,
        height: 200,
        marginTop: 300,
        backgroundColor: 'white',
        position: "absolute",
        alignSelf: "center",
        marginTop: 160,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dpRound: {
        width: "90%",
        height: "90%",
        borderRadius: 200,
        borderWidth: 2,
        borderColor: "blue"

    },
    dp: {
        width: 170,
        height: 175,
        borderRadius: 180,

    },
    icon: {
        borderRadius: 200,
        backgroundColor: 'white',
        position: "absolute",
        alignSelf: "center",
        marginTop: 90,
        alignItems: 'center',
        justifyContent: 'center',
    },
    activeNowTick: {
        width: 30,
        height: 30,
        backgroundColor: "green",
        borderRadius: 30,
        position: "absolute",
        right: 0,
        bottom: 20,
        backgroundColor: 'white',
        borderWidth: 3,

    },
    name: {
        alignSelf: "center",
        marginTop: 130,
        fontWeight: 'bold',
        fontSize: 30
    },
    speciality: {
        alignSelf: "center",
        fontSize: 18,
        color: "gray"
    },
    profiletaContainer: {
        height: 100,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",


    },
    tabContainer: {
        width: 85,
        height: 90,
        alignItems: "center",
        justifyContent: 'center',

    },
    tabImage: {
        height: 35,
        width: 35,
        borderRadius: 20,

    },
    tabImageContainer: {
        height: 60,
        width: 60,
        backgroundColor: "lightgray",
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 60,

    },
    tabText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 5,
    },
    devider: {
        height: 3,
        width: "90%",
        backgroundColor: "lightgray",
        alignSelf: "center",
        marginTop: 5
    },
    aboutHeadingContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginTop: 10,

    },
    aboutText: {
        fontSize: 25,
        fontWeight: "bold"
    },
    seeAllText: {
        color: "blue",
        fontSize: 18,
    },
    workContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 10,
        marginTop: 10
    },
    workIcon: {
        height: 30,
        width: 30,
        tintColor: "lightgray"
    }
})