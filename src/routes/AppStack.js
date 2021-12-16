import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreens from '../container/home/HomeScreens';
import RechercheScreens from '../container/home/RechercheScreens';
import ProfilScreens from '../container/home/ProfilScreens';
import More from '../container/home/More';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Ionicons, Fontisto, FontAwesome5, AntDesign, SimpleLineIcons } from '@expo/vector-icons';
import AddPost from '../container/home/AddPost';
import DetailPost from '../container/home/DetailPost';
import GetSearch from '../container/home/GetSearch';
import AddVehiculScreen from '../container/home/AddVehiculScreen';
import ListVehicul from '../container/home/ListVehicul';
import AddChauffeurScreen from '../container/home/AddChauffeurScreen';
import ListChauffeur from '../container/home/ListChauffeur';


const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const FeedStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="EcoVoiturage"
        component={HomeScreens}
        options={{
          headerTitleStyle: {
            color: '#fff',
            fontFamily: 'Kufam-SemiBoldItalic',
            fontSize: 28,
            top: 10
          },
          headerStyle: {
            shadowColor: '#fff',
            elevation: 0,
            backgroundColor: '#3f51b5',
            height: 90,
            elevation: 0.0,
            borderBottomRightRadius: 15,
            borderBottomLeftRadius: 15,
            marginRight: 5
          },

        }}
      />
      <Stack.Screen name="AddPost" component={AddPost}
        options={{
          headerTitleStyle: {
            color: '#fff',
            fontFamily: 'Kufam-SemiBoldItalic',
            fontSize: 28,
            top: 10
          },
          headerStyle: {
            shadowColor: '#fff',
            elevation: 0,
            backgroundColor: '#3f51b5',
            height: 90,
            elevation: 0.0,
            borderBottomRightRadius: 15,
            borderBottomLeftRadius: 15,
            marginRight: 5
          },

        }}
      />
      <Stack.Screen name="detailPost" component={DetailPost}
        options={{
          headerTitleStyle: {
            color: '#fff',
            fontFamily: 'Kufam-SemiBoldItalic',
            fontSize: 28,
            top: 10
          },
          headerStyle: {
            shadowColor: '#fff',
            elevation: 0,
            backgroundColor: '#3f51b5',
            height: 90,
            elevation: 0.0,
            borderBottomRightRadius: 15,
            borderBottomLeftRadius: 15,
            marginRight: 5
          },

        }}
      />
    </Stack.Navigator>
  )
}
const SearchStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Recherche"
        component={RechercheScreens}
        options={{
          headerTitleStyle: {
            color: '#fff',
            fontFamily: 'Kufam-SemiBoldItalic',
            fontSize: 28,
            top: 10
          },
          headerStyle: {
            shadowColor: '#fff',
            elevation: 0,
            backgroundColor: '#3f51b5',
            height: 90,
            elevation: 0.0,
            borderBottomRightRadius: 15,
            borderBottomLeftRadius: 15,
            marginRight: 5
          },

        }}
      />
      <Stack.Screen name="getSearh"
        component={GetSearch}
        options={{
          headerTitleStyle: {
            color: '#fff',
            fontFamily: 'Kufam-SemiBoldItalic',
            fontSize: 28,
            top: 10
          },
          headerStyle: {
            shadowColor: '#fff',
            elevation: 0,
            backgroundColor: '#3f51b5',
            height: 90,
            elevation: 0.0,
            borderBottomRightRadius: 15,
            borderBottomLeftRadius: 15,
            marginRight: 5
          },

        }}
      />
    </Stack.Navigator>

  )
}
const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="profil"
        component={ProfilScreens}
        options={{
          headerTitleStyle: {
            color: '#fff',
            fontFamily: 'Kufam-SemiBoldItalic',
            fontSize: 28,
            top: 10
          },
          headerStyle: {
            shadowColor: '#fff',
            elevation: 0,
            backgroundColor: '#3f51b5',
            height: 90,
            elevation: 0.0,
            borderBottomRightRadius: 15,
            borderBottomLeftRadius: 15,
            marginRight: 5
          },

        }}
      />
      <Stack.Screen name="addVehicul"
        component={AddVehiculScreen}
        options={{
          headerTitleStyle: {
            color: '#fff',
            fontFamily: 'Kufam-SemiBoldItalic',
            fontSize: 28,
            top: 10
          },
          headerStyle: {
            shadowColor: '#fff',
            elevation: 0,
            backgroundColor: '#3f51b5',
            height: 90,
            elevation: 0.0,
            borderBottomRightRadius: 15,
            borderBottomLeftRadius: 15,
            marginRight: 5
          },

        }}
      />
            <Stack.Screen name="listVehicul"
        component={ListVehicul}
        options={{
          headerTitleStyle: {
            color: '#fff',
            fontFamily: 'Kufam-SemiBoldItalic',
            fontSize: 28,
            top: 10
          },
          headerStyle: {
            shadowColor: '#fff',
            elevation: 0,
            backgroundColor: '#3f51b5',
            height: 90,
            elevation: 0.0,
            borderBottomRightRadius: 15,
            borderBottomLeftRadius: 15,
            marginRight: 5
          },

        }}
      />
      
      <Stack.Screen name="addChauffeur"
        component={AddChauffeurScreen}
        options={{
          headerTitleStyle: {
            color: '#fff',
            fontFamily: 'Kufam-SemiBoldItalic',
            fontSize: 28,
            top: 10
          },
          headerStyle: {
            shadowColor: '#fff',
            elevation: 0,
            backgroundColor: '#3f51b5',
            height: 90,
            elevation: 0.0,
            borderBottomRightRadius: 15,
            borderBottomLeftRadius: 15,
            marginRight: 5
          },

        }}
      />
            <Stack.Screen name="listChauffeur"
        component={ListChauffeur}
        options={{
          headerTitleStyle: {
            color: '#fff',
            fontFamily: 'Kufam-SemiBoldItalic',
            fontSize: 28,
            top: 10
          },
          headerStyle: {
            shadowColor: '#fff',
            elevation: 0,
            backgroundColor: '#3f51b5',
            height: 90,
            elevation: 0.0,
            borderBottomRightRadius: 15,
            borderBottomLeftRadius: 15,
            marginRight: 5
          },

        }}
      />
    </Stack.Navigator>
    

  )
}



const AppStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={FeedStack}
        options={{
          header: () => null,

          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size, focused }) => {
            let iconName = (focused) ? 'person' : 'person-outline';
            let iconSize = (focused) ? 35 : 30;
            return (<Ionicons name="ios-home-outline" color='gray' size={iconSize} />);
          },

        }}
      />

      <Tab.Screen
        name="Recherche"
        component={SearchStack}
        options={{
          header: () => null,

          headerTitleStyle: {
            color: '#fff',
            fontFamily: 'Kufam-SemiBoldItalic',
            fontSize: 28,
            top: 10
          },
          headerStyle: {
            shadowColor: '#fff',
            elevation: 0,
            backgroundColor: '#3f51b5',
            height: 90,
            elevation: 0.0,
            borderBottomRightRadius: 15,
            borderBottomLeftRadius: 15,
            marginRight: 5
          },
          tabBarLabel: 'rechercher',
          tabBarIcon: ({ color, size, focused }) => {
            let iconName = (focused) ? 'person' : 'person-outline';
            let iconSize = (focused) ? 35 : 30;
            return (<Ionicons name="ios-search-circle-outline" color='gray' size={iconSize} />);
          },

        }}
      />

      <Tab.Screen
        name="Profil"
        component={ProfileStack}
        options={{
          header: () => null,

          headerTitleStyle: {
            color: '#fff',
            fontFamily: 'Kufam-SemiBoldItalic',
            fontSize: 28,
            top: 10
          },
          headerStyle: {
            shadowColor: '#fff',
            elevation: 0,
            backgroundColor: '#3f51b5',
            height: 90,
            elevation: 0.0,
            borderBottomRightRadius: 15,
            borderBottomLeftRadius: 15,
            marginRight: 5
          },
          tabBarLabel: 'profil',
          tabBarIcon: ({ color, size, focused }) => {
            let iconName = (focused) ? 'person' : 'person-outline';
            let iconSize = (focused) ? 35 : 30;
            return (<Ionicons name="ios-person-add-outline" color='gray' size={iconSize} />);
          },

        }}
      />

      <Tab.Screen
        name="Plus"
        component={More}
        options={{
          headerTitleStyle: {
            color: '#fff',
            fontFamily: 'Kufam-SemiBoldItalic',
            fontSize: 28,
            top: 10
          },
          headerStyle: {
            shadowColor: '#fff',
            elevation: 0,
            backgroundColor: '#3f51b5',
            height: 90,
            elevation: 0.0,
            borderBottomRightRadius: 15,
            borderBottomLeftRadius: 15,
            marginRight: 5
          },
          tabBarLabel: 'menu',
          tabBarIcon: ({ color, size, focused }) => {
            let iconName = (focused) ? 'person' : 'person-outline';
            let iconSize = (focused) ? 35 : 30;
            return (<Ionicons name="ios-menu-outline" color='gray' size={iconSize} />);
          },

        }}
      />

    </Tab.Navigator>
  );
}

export default AppStack

const styles = StyleSheet.create({})
