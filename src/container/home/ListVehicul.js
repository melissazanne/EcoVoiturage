import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';

import { ActivityIndicator, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FloatingAction } from "react-native-floating-action";
import { SafeAreaView } from 'react-native-safe-area-context';
import { ListItem, SearchBar, Avatar } from "react-native-elements";
import { db } from '../../firebase/config';
const actions = [
  {
    text: "addVehicul",
    icon: require("../../../assets/add.png"),
    name: "btn_add",
    position: 1
  },

];
const ListVehicul = ({ navigation }) => {

  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [vehiculs, setVehiculs] = useState([]); // Initial empty array of users
  useEffect(() => {
      const subscriber = db
          .collection('vehicules')
          .onSnapshot(querySnapshot => {
              const vehiculs = [];
              querySnapshot.forEach(documentSnapshot => {
                vehiculs.push({
                      ...documentSnapshot.data(),
                      key: documentSnapshot.id,
                  });
              });
              setVehiculs(vehiculs);
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
          data={vehiculs}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() =>{}}>
                <ListItem bottomDivider>
                  <Avatar source={{uri:item.image}} rounded style={styles.avatar} />
                  <ListItem.Content>
                    <ListItem.Title>{item.marque} </ListItem.Title>
                    <ListItem.Subtitle>{item.category}</ListItem.Subtitle>
                    <ListItem.Subtitle>{item.motorisation}</ListItem.Subtitle>
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
            navigation.navigate('addVehicul')
          } else if (name == 'btn_vehicul') {
            navigation.navigate('post')
          }
        }}
      />
      <StatusBar style='auto'/>
    </SafeAreaView>
  )
}

export default ListVehicul


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