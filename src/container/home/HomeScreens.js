import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';

import { ActivityIndicator, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FloatingAction } from "react-native-floating-action";
import { SafeAreaView } from 'react-native-safe-area-context';
import { ListItem, SearchBar, Avatar } from "react-native-elements";
import { db } from '../../firebase/config';
const actions = [
  {
    text: "AddPost",
    icon: require("../../../assets/add.png"),
    name: "btn_add",
    position: 1
  },

];
const HomeScreens = ({ navigation }) => {

  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [posts, setPosts] = useState([]); // Initial empty array of users
  useEffect(() => {
      const subscriber = db
          .collection('posts')
          .onSnapshot(querySnapshot => {
              const posts = [];
              querySnapshot.forEach(documentSnapshot => {
                  posts.push({
                      ...documentSnapshot.data(),
                      key: documentSnapshot.id,
                  });
              });
              setPosts(posts);
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
          data={posts}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate("detailPost" ,{userkey:item.key})}>
                <ListItem bottomDivider>
                  <Avatar source={require('../../../assets/personnel.png')} rounded style={styles.avatar} />
                  <ListItem.Content>
                    <ListItem.Title>{item.email}</ListItem.Title>
                    <ListItem.Subtitle>{item.startCity} {item.endCity}  </ListItem.Subtitle>
                    <ListItem.Subtitle>{item.startPlace}  {item.endPlace} </ListItem.Subtitle>
                    <ListItem.Subtitle>Reserver</ListItem.Subtitle>
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
            navigation.navigate('AddPost')
          } else if (name == 'btn_post') {
            navigation.navigate('post')
          }
        }}
      />
      <StatusBar style='auto'/>
    </SafeAreaView>
  )
}

export default HomeScreens


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 200
  },
  avatar:{
    width:36,
    height:36,
    borderRadius:18,
    marginRight:16
  }
})