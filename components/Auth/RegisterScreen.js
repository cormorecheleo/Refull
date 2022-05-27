import {Text, View, TouchableOpacity, TextInput, Image} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import React, {useState} from "react";
import {firebase} from "../../firebase/config";
import styles from "./AuthStyle";
import Motorcycle from "../../assets/motorbike.png";

export default function RegisterScreen({navigation}){

//Variables d'état pour la gestion des champs de saisie du formulaire d'authentification
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

//Fonction de gestion de l'authentification de l'utilisateur
    const onFooterLinkPress = () => {
        navigation.navigate('Login')
    }

    const onRegisterPress = () => {

        if(password !== confirmPassword) {
            alert("Les mots de passe ne correspondent pas !")
            return
        }
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const data = {
                    id: uid,
                    email,
                    fullName,
                    premium:0,
                };
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .set(data)
                    .then(() => {
                        navigation.navigate('Home', {user: data})
                    })
                    .catch((error) => {
                        alert(error)
                    });
            })
            .catch((error)=> {
                alert(error)
            });

    }
//Retourne le contenu de la page de création de compte
    return(
        <View style={styles.container}>
            <KeyboardAwareScrollView style={{flex:1, width: '100%'}}>
                <View style={styles.logoView}>
                    <Image style={styles.motorcycleLogo} source={Motorcycle}/>
                </View>
                <TextInput
                    style={styles.input}
                    placeholder='Nom et prénom'
                    onChangeText={(text) => setFullName(text)}
                    value={fullName}
                    autoCapitalize="none"/>

                <TextInput
                    style={styles.input}
                    placeholder='Adresse mail'
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    autoCapitalize="none"/>

                <TextInput
                    style={styles.input}
                    secureTextEntry
                    placeholder='Mot de passe'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    autoCapitalize="none"/>

                <TextInput
                    style={styles.input}
                    secureTextEntry
                    placeholder='Confirmation de mot de passe'
                    onChangeText={(text) => setConfirmPassword(text)}
                    value={confirmPassword}
                    autoCapitalize="none"/>

                <TouchableOpacity onPress={()=>onRegisterPress()}>
                    <Text style={styles.buttonTitle}>Créer un compte</Text>
                </TouchableOpacity>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Vous avez déjà un compte ? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Connexion</Text></Text>
                </View>
            </KeyboardAwareScrollView>
        </View>
    );
}