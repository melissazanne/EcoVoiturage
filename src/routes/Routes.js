import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { auth } from '../firebase/config'; 
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './AppStack';
import AuthStack from './AuthStack';

const Routes=()=> {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  
  return (
    <NavigationContainer>
    {user?<AppStack/>:<AuthStack/>}
  </NavigationContainer>
  );
}
export default Routes;