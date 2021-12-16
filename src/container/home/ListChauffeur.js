import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';

import { ActivityIndicator, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FloatingAction } from "react-native-floating-action";
import { SafeAreaView } from 'react-native-safe-area-context';
import { ListItem, SearchBar, Avatar } from "react-native-elements";
import { db } from '../../firebase/config';
const actions = [
  {
    text: "addChauffeur",
    icon: require("../../../assets/add.png"),
    name: "btn_add",
    position: 1
  },

];
const ListChauffeur = ({ navigation }) => {

  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [chauffeur, setChauffeur] = useState([]); // Initial empty array of users
  useEffect(() => {
      const subscriber = db
          .collection('chauffeurs')
          .onSnapshot(querySnapshot => {
              const chauffeur = [];
              querySnapshot.forEach(documentSnapshot => {
                chauffeur.push({
                      ...documentSnapshot.data(),
                      key: documentSnapshot.id,
                  });
              });
              setChauffeur(chauffeur);
              setLoading(false);
          });

      // Unsubscribe from events when no longer in use
      return () => subscriber();
  }, []);
  if (loading) {
      return <ActivityIndicator />;
  }

  return (
    <SafeAreaView style={{flex:1}}>
      <ScrollView>
       
        <FlatList
          data={chauffeur}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() =>{}}>
                <ListItem bottomDivider>
                  <Avatar source={{uri:item.image}} rounded style={styles.avatar} />
                  <ListItem.Content>
                    <ListItem.Title>{item.firstName} </ListItem.Title>
                    <ListItem.Subtitle>{item.lastName}</ListItem.Subtitle>
                    <ListItem.Subtitle>{item.phoneNumber}</ListItem.Subtitle>
                    <ListItem.Subtitle>{item.categoryOfPermis}</ListItem.Subtitle>
                    {/* <Rating showRating fractions="{1}" startingValue="{2.3}"   style={styles.rating} /> */}
                  </ListItem.Content>
                  <ListItem.Chevron />
                </ListItem>
              </TouchableOpacity>
            )
          }}
        //renderItem={renderItem}
        //keyExtractor={myKeyExtractor}
        />
      </ScrollView>
      <FloatingAction
        actions={actions}
        onPressItem={name => {
          if (name == 'btn_add') {
            navigation.navigate('addChauffeur')
          } else if (name == 'btn_chauffeur') {
            navigation.navigate('post')
          }
        }}
      />
      <StatusBar style='auto'/>
    </SafeAreaView>
  )
}

export default ListChauffeur


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 200
  },
  avatar:{
    width:70,
    height:70,
    marginRight:16
  }
})