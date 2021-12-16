import firebase from 'firebase'
import { auth } from '../../firebase/config'

require('firebase/firestore')

class FireChauffeurs{
    
    addPost = async({ firstName,lastName,phoneNumber,categoryOfPermis,localUri})=>{
       
        const uid = auth.currentUser.uid
        const removeUri = await this.uploadPhotoAsync(localUri)
        console.log('****************************************',auth.currentUser);
        return new Promise((res,rej)=>{
            this.firestore.collection("chauffeurs")
           /*  .doc(this.uid)
            .collection("posts") */
            .add({
                firstName,
                lastName,
                phoneNumber,
                categoryOfPermis,
                createdAt: new Date().toISOString(),
                //creation: firebase.firestore.FieldValue.serverTimestamp(),
                email: auth.currentUser.email,
                timestamp:this.timestamp,
                image:removeUri,
                
            })
            .then(ref=>{
                res(ref)
            })
        })
    }
     uploadPhotoAsync = async uri =>{
        const path = `chauffeurs/${firebase.auth().currentUser.uid}/${Math.random().toString(36)}/${Date.now()}`
        return new Promise(async(res,rej)=>{
            //L' await opérateur est utilisé pour attendre un Promise
            const response  = await fetch(uri)
            //L' Promiseobjet représente l'achèvement (ou l'échec) éventuel d'une opération asynchrone et sa valeur résultante.
            const file = await response.blob()
            let upload = firebase
            .storage()
            .ref(path)
            .put(file)
            upload.on("state_changed",snapshot =>{},err=>{
                rej(err)
            },
            async()=>{
                const url = await upload.snapshot.ref.getDownloadURL();
                res(url);
            }
            )
        })
    } 
  get firestore(){
      return firebase.firestore();
  }

  get uid(){
      return (firebase.auth().currentUser || {}).uid;
  }
  get timestamp(){
      return Date.now();
  }
}
FireChauffeurs.shared = new FireChauffeurs();
export default FireChauffeurs;
