import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ActivityIndicator, ScrollView } from 'react-native'
import { auth, db } from '../../firebase/config'
import firebase from 'firebase'
import {
  ActionsContainer,
  Button,
  FieldsContainer,
  Fieldset,
  Form,
  FormGroup,
  Input,
  Label,
  Switch
} from 'react-native-clean-form'

const AddPost = (props) => {
    const [profil, setProfil] = useState('')
    const [laoding, setLaoding] = useState('')
    const [users, setUsers] = useState([])
    // const [fullNameDriver,setFullNameDriver]=useState('')
    // const [phone,setPhone]=useState('')
    // const [catPermis,setCatPermis]=useState('')
    // const [brandVeheicule,setBrandVehicule]=useState('')
    // const [modelVeheicule,setModelVehicule]=useState('')
    // const [catVeheicule,setCatVehicule]=useState('')
    // const [motorisationVeheicule,setMotorisationVehicule]=useState('')
    // const [startCity,setStartCity]=useState('')
    // const [endCity,setEndCity]=useState('')
    // const [date,setDate]=useState('')
    // const [diatance,setDistance]=useState('')
    // const [nombreOfPlace,setNombreOfPlace]=useState('')
    // const [price,setPrice]=useState('')
    // const [startPlace,setStartPlace]=useState('')
    // const [endPlace,setEndtPlace]=useState('')

    const initialState = {
        fullNameDriver: '',
        phone: '',
        catPermis: '',
        brandVeheicule: '',
        modelVeheicule: '',
        catVeheicule: '',
        motorisationVeheicule: '',
        startCity: '',
        endCity: '',
        dateVoyage: '',
        distance: '',
        numberOfPlace: '',
        price: '',
        startPlace: '',
        endPlace: '',
        time:'',
    }

    const [state, setstate] = useState(initialState)

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
        createSocietyPub()
    }, [])

    const handleChangeText = (value, name) => {
        setstate({ ...state, [name]: value });
    };

    const createSocietyPub = () => {
        if (state.fullNameDriver==='') {
            alert('please name')
        }else{
        try {
            db.collection('posts').add({
                email: auth.currentUser.email,
                fullNameDriver: state.fullNameDriver,
                phone: state.phone,
                catPermis: state.catPermis,
                brandVeheicule: state.brandVeheicule,
                modelVeheicule: state.modelVeheicule,
                catVeheicule: state.catVeheicule,
                motorisationVeheicule: state.motorisationVeheicule,
                startCity: state.startCity,
                endCity: state.endCity,
                dateVoyage: state.dateVoyage,
                distance: state.distance,
                numberOfPlace: state.numberOfPlace,
                price: state.price,
                startPlace: state.startPlace,
                endPlace: state.endPlace,
                time: state.time,
            })
            props.navigation.goBack();
        } catch (error) {
         console.log(error);
        }
    }
    }
    const createSocietyClient = () => {
        if (state.phone==='') {
            alert('please phone')
        }else{
        try {
            db.collection('posts').add({
                email: auth.currentUser.email,
                phone: state.phone,
                dateVoyage: state.dateVoyage,
                distance: state.distance,
                numberOfPlace: state.numberOfPlace,
                price: state.price,
                startPlace: state.startPlace,
                endPlace: state.endPlace,
                time: state.time,
            })
            props.navigation.goBack();
        } catch (error) {
         console.log(error);
        }
    }
    }
    
    if (laoding) {
        <ActivityIndicator />
    }


    if (profil.status == 'societe') {
        return (
            <Form>
                <ScrollView>
                    <FieldsContainer>
                        <Fieldset label="Info chauffeur">
                            <FormGroup>
                                <Label style={{ backgroudColor: 'red' }}>nom complet du chauffeur</Label>
                                <Input placeholder="Taper message"
                                    value={state.fullNameDriver}
                                    onChangeText={(value) => handleChangeText(value, 'fullNameDriver')}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label style={{ backgroudColor: 'red' }}>Numeros du chauffeur</Label>
                                <Input placeholder="Taper message"
                                    value={state.phone}
                                    onChangeText={(value) => handleChangeText(value, 'phone')}
                                />
                            </FormGroup>


                            <FormGroup>
                                <Label style={{ backgroudColor: 'red' }}>Categorie Permis</Label>
                                <Input placeholder="Taper message"
                                    value={state.catPermis}
                                    onChangeText={(value) => handleChangeText(value, 'catPermis')}
                                />
                            </FormGroup>
                        </Fieldset>

                        <Fieldset label="Vehicul" last>
                            <FormGroup>
                                <Label style={{ backgroudColor: 'red' }}>Marque vehicule</Label>
                                <Input placeholder="Taper message"
                                    value={state.brandVeheicule}
                                    onChangeText={(value) => handleChangeText(value, 'brandVeheicule')}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label style={{ backgroudColor: 'red' }}>Modele vehicule</Label>
                                <Input placeholder="Taper message"
                                    value={state.modelVeheicule}
                                    onChangeText={(value) => handleChangeText(value, 'modelVeheicule')}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label style={{ backgroudColor: 'red' }}>Categorie Vehicule</Label>
                                <Input placeholder="Taper message"
                                    value={state.catVeheicule}
                                    onChangeText={(value) => handleChangeText(value, 'catVeheicule')}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label style={{ backgroudColor: 'red' }}>Motorisation Vehicule</Label>
                                <Input placeholder="Taper message"
                                    value={state.motorisationVeheicule}
                                    onChangeText={(value) => handleChangeText(value, 'motorisationVeheicule')}
                                />
                            </FormGroup>
                        </Fieldset>

                        <Fieldset label="Trajet" last>
                            <FormGroup>
                                <Label style={{ backgroudColor: 'red' }}>Ville de Depart</Label>
                                <Input placeholder="Taper message"
                                    value={state.startCity}
                                    onChangeText={(value) => handleChangeText(value, 'startCity')}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label style={{ backgroudColor: 'red' }}>Vile d'Arrivee</Label>
                                <Input placeholder="Taper message"
                                    value={state.endCity}
                                    onChangeText={(value) => handleChangeText(value, 'endCity')}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label style={{ backgroudColor: 'red' }}>date</Label>
                                <Input placeholder="Taper message"
                                    value={state.dateVoyage}
                                    onChangeText={(value) => handleChangeText(value, 'dateVoyage')}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label style={{ backgroudColor: 'red' }}>Distance</Label>
                                <Input placeholder="Taper message"
                                    value={state.distance}
                                    onChangeText={(value) => handleChangeText(value, 'distance')}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label style={{ backgroudColor: 'red' }}>Nombre de Place</Label>
                                <Input placeholder="Taper message"
                                    value={state.numberOfPlace}
                                    onChangeText={(value) => handleChangeText(value, 'numberOfPlace')}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label style={{ backgroudColor: 'red' }}>Pix</Label>
                                <Input placeholder="Taper message"
                                    value={state.price}
                                    onChangeText={(value) => handleChangeText(value, 'price')}
                                />
                            </FormGroup>
                            <FormGroup>
                            <Label style={{ backgroudColor: 'red' }}>L'heure</Label>
                            <Input placeholder="Taper message"
                                value={state.time}
                                onChangeText={(value) => handleChangeText(value, 'time')}
                            />
                        </FormGroup>
                        
                        </Fieldset>
                    </FieldsContainer>
                </ScrollView>
                <ActionsContainer>

                    <Button icon="md-checkmark" iconPlacement="right"
                        onPress={() => createSocietyPub()}
                    >Save</Button>
                </ActionsContainer>
            </Form>
        )
    }
    else {
        return (

            <Form>
            <ScrollView>
            <FieldsContainer>
                    <Fieldset label="Trajet" last>
                       
                        <FormGroup>
                            <Label style={{ backgroudColor: 'red' }}>date</Label>
                            <Input placeholder="Taper message"
                                value={state.dateVoyage}
                                onChangeText={(value) => handleChangeText(value, 'dateVoyage')}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label style={{ backgroudColor: 'red' }}>L'heure</Label>
                            <Input placeholder="Taper message"
                                value={state.time}
                                onChangeText={(value) => handleChangeText(value, 'time')}
                            />
                        </FormGroup>
                        
                        <FormGroup>
                            <Label style={{ backgroudColor: 'red' }}>Distance</Label>
                            <Input placeholder="Taper message"
                                value={state.distance}
                                onChangeText={(value) => handleChangeText(value, 'distance')}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label style={{ backgroudColor: 'red' }}>Nombre de Place</Label>
                            <Input placeholder="Taper message"
                                value={state.numberOfPlace}
                                onChangeText={(value) => handleChangeText(value, 'numberOfPlace')}
                            />
                        </FormGroup>
                        <FormGroup>
                                <Label style={{ backgroudColor: 'red' }}>Numeros </Label>
                                <Input placeholder="Taper message"
                                    value={state.phone}
                                    onChangeText={(value) => handleChangeText(value, 'phone')}
                                />
                            </FormGroup>
                        <FormGroup>
                            <Label style={{ backgroudColor: 'red' }}>Prix</Label>
                            <Input placeholder="Taper message"
                                value={state.price}
                                onChangeText={(value) => handleChangeText(value, 'price')}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label style={{ backgroudColor: 'red' }}>Lieu de depart</Label>
                            <Input placeholder="Taper message"
                                value={state.startPlace}
                                onChangeText={(value) => handleChangeText(value, 'startPlace')}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label style={{ backgroudColor: 'red' }}>Lieu d'arrivee</Label>
                            <Input placeholder="Taper message"
                                value={state.endPlace}
                                onChangeText={(value) => handleChangeText(value, 'endPlace')}
                            />
                        </FormGroup>
                    </Fieldset>
                </FieldsContainer>
            </ScrollView>
            <ActionsContainer>

                <Button icon="md-checkmark" iconPlacement="right"
                    onPress={() => createSocietyClient()}
                >Save</Button>
            </ActionsContainer>
        </Form>
        )
    }

}

export default AddPost



const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 200
    }
})
