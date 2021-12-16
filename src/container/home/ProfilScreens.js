import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
  Image,
} from 'react-native';

import {useTheme} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

// import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import { auth, db } from '../../firebase/config';
import firebase from 'firebase';
// import ImagePicker from 'react-native-image-crop-picker';

const ProfilScreens = ({navigation}) => {
    const [profil, setProfil] = useState('')
    const [laoding, setLaoding] = useState('')

  const [image, setImage] = useState('https://api.adorable.io/avatars/80/abott@adorable.png');
  const {colors} = useTheme();


  const logOut=async()=>{
    try {
        await auth.signOut()
    
    } catch (error) {
        console.log(error);
    }
}
//   const takePhotoFromCamera = () => {
//     ImagePicker.openCamera({
//       compressImageMaxWidth: 300,
//       compressImageMaxHeight: 300,
//       cropping: true,
//       compressImageQuality: 0.7
//     }).then(image => {
//       console.log(image);
//       setImage(image.path);
//       this.bs.current.snapTo(1);
//     });
//   }

//   const choosePhotoFromLibrary = () => {
//     ImagePicker.openPicker({
//       width: 300,
//       height: 300,
//       cropping: true,
//       compressImageQuality: 0.7
//     }).then(image => {
//       console.log(image);
//       setImage(image.path);
//       this.bs.current.snapTo(1);
//     });
//   }

//   renderInner = () => (
//     <View style={styles.panel}>
//       <View style={{alignItems: 'center'}}>
//         <Text style={styles.panelTitle}>Upload Photo</Text>
//         <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
//       </View>
//       <TouchableOpacity style={styles.panelButton}>
//         <Text style={styles.panelButtonTitle}>Take Photo</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.panelButton}>
//         <Text style={styles.panelButtonTitle}>Choose From Library</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.panelButton}
//         onPress={() => this.bs.current.snapTo(1)}>
//         <Text style={styles.panelButtonTitle}>Cancel</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   renderHeader = () => (
//     <View style={styles.header}>
//       <View style={styles.panelHeader}>
//         <View style={styles.panelHandle} />
//       </View>
//     </View>
//   );

//   bs = React.createRef();
//   fall = new Animated.Value(1);

const userVerify = () => {
    try {
        const users = [];
        db
            .collection('users')
            .doc(firebase.auth().currentUser.uid)
            .get()
            .then(docSnap => {
                setProfil(docSnap.data())
            })
        setUsers(users)
        setLaoding(false)
        console.log(profil);

    } catch (error) {
        console.log(error);
    }
}
useEffect(() => {
    userVerify()
}, [])

if (profil.status=='societe') {
    return (
        <View style={styles.container}>
          <Animated.View style={{margin: 20 }}>
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity >
                <View
                  style={{
                    height: 100,
                    width: 100,
                    borderRadius: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <ImageBackground
                    source={require('../../../assets/personnel.png')}
                    style={{height: 100, width: 100}}
                    imageStyle={{borderRadius: 15}}>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Icon
                        name="camera"
                        size={35}
                        color="#fff"
                        style={{
                          opacity: 0.7,
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderWidth: 1,
                          borderColor: '#fff',
                          borderRadius: 10,
                        }}
                      />
                    </View>
                  </ImageBackground>
                </View>
              </TouchableOpacity>
              <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>
              {profil.nameSociete}
              </Text>
            </View>
      
            <View style={styles.action}>
              <FontAwesome name="user-o" color={colors.text} size={20} />
              <Text
                autoCorrect={false}
                style={[
                  styles.textInput,
                  {
                    color: colors.text,
                  },
                ]}
              >{profil.nameSociete} </Text>
    
            </View>
            <View style={styles.action}>
              <Feather name="phone" color={colors.text} size={20} />
              <Text
                keyboardType="number-pad"
                autoCorrect={false}
                style={[
                  styles.textInput,
                  {
                    color: colors.text,
                  },
                ]}
              >{profil.number}</Text>
            </View>
            <View style={styles.action}>
              <FontAwesome name="envelope-o" color={colors.text} size={20} />
              <Text
                autoCorrect={false}
                style={[
                  styles.textInput,
                  {
                    color: colors.text,
                  },
                ]}
              >{profil.email} </Text>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('listVehicul')}>

            <View style={styles.action}>
              <FontAwesome name="automobile" size={20} color={colors.text} />
              <Text 
                autoCorrect={false}
                style={[
                  styles.textInput,
                  {
                    color: colors.text,
                  },
                ]}
              >Mes Vehicules</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>navigation.navigate('listChauffeur')}>
            <View style={styles.action}>
              <FontAwesome name="drivers-license" color={colors.text} size={20} />
              <Text
                autoCorrect={false}
                style={[
                  styles.textInput,
                  {
                    color: colors.text,
                  },
                ]}
              >Mes Chauffeures</Text>

            </View>
            </TouchableOpacity>

            {/* <View style={styles.action}>
              <FontAwesome name="globe" color={colors.text} size={20} />
              <Text
                autoCorrect={false}
                style={[
                  styles.textInput,
                  {
                    color: colors.text,
                  },
                ]}
              > </Text>
            </View> */}
            {/* <View style={styles.action}>
              <Icon name="map-marker-outline" color={colors.text} size={20} />
              <TextInput
                placeholder="City"
                placeholderTextColor="#666666"
                autoCorrect={false}
                style={[
                  styles.textInput,
                  {
                    color: colors.text,
                  },
                ]}
              />
            </View> */}
            <TouchableOpacity style={styles.commandButton} onPress={() => {}}>
              <Text style={styles.panelButtonTitle} onPress={logOut}>Deconnecter</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      );
} else {
    return (
        <View style={styles.container}>
          <Animated.View style={{margin: 20 }}>
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity >
                <View
                  style={{
                    height: 100,
                    width: 100,
                    borderRadius: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <ImageBackground
                    source={require('../../../assets/personnel.png')}
                    style={{height: 100, width: 100}}
                    imageStyle={{borderRadius: 15}}>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Icon
                        name="camera"
                        size={35}
                        color="#fff"
                        style={{
                          opacity: 0.7,
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderWidth: 1,
                          borderColor: '#fff',
                          borderRadius: 10,
                        }}
                      />
                    </View>
                  </ImageBackground>
                </View>
              </TouchableOpacity>
              <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>
              {profil.lastName}
              </Text>
            </View>
    
            <View style={styles.action}>
              <FontAwesome name="user-o" color={colors.text} size={20} />
              <Text
                autoCorrect={false}
                style={[
                  styles.textInput,
                  {
                    color: colors.text,
                  },
                ]}
              >{profil.firstName} </Text>
    
            </View>
            <View style={styles.action}>
              <FontAwesome name="user-o" color={colors.text} size={20} />
              <Text
                autoCorrect={false}
                style={[
                  styles.textInput,
                  {
                    color: colors.text,
                  },
                ]}
              >{profil.status} </Text>
    
            </View>
            <View style={styles.action}>
              <Feather name="phone" color={colors.text} size={20} />
              <Text
                keyboardType="number-pad"
                autoCorrect={false}
                style={[
                  styles.textInput,
                  {
                    color: colors.text,
                  },
                ]}
              >{profil.number}</Text>
            </View>
            <View style={styles.action}>
              <FontAwesome name="envelope-o" color={colors.text} size={20} />
              <Text
                autoCorrect={false}
                style={[
                  styles.textInput,
                  {
                    color: colors.text,
                  },
                ]}
              >{profil.email} </Text>
            </View>
            {/* <View style={styles.action}>
              <FontAwesome name="globe" color={colors.text} size={20} />
              <Text
                autoCorrect={false}
                style={[
                  styles.textInput,
                  {
                    color: colors.text,
                  },
                ]}
              > </Text>
            </View> */}
            {/* <View style={styles.action}>
              <Icon name="map-marker-outline" color={colors.text} size={20} />
              <TextInput
                placeholder="City"
                placeholderTextColor="#666666"
                autoCorrect={false}
                style={[
                  styles.textInput,
                  {
                    color: colors.text,
                  },
                ]}
              />
            </View> */}
            <TouchableOpacity style={styles.commandButton} onPress={() => {}}>
              <Text style={styles.panelButtonTitle} onPress={logOut}>Deconnecter</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      );
}
 
};

export default ProfilScreens;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: 'red',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  avatar:{
    width:36,
    height:36,
    borderRadius:18,
    marginRight:16
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: 'red',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: -12,
    paddingLeft: 10,
    color: '#05375a',
  },
});
