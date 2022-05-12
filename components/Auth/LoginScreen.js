import React, { useState } from "react";
import {StatusBar, Text, TextInput, TouchableOpacity, View, Image} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import {firebase} from "../../firebase/config";
import styles from "./AuthStyle";
import GasStation from "../../assets/gas-station.png";

export default function LoginScreen({navigation}) {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onFooterLinkPress = () => {
        navigation.navigate('Register')
    }

    const onTestPress = () => {
        navigation.navigate('Home')
    }

    const TestPress = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword("antoine.duduc@hotmail.com", "14072000")
            .then((response) => {
                const uid = response.user.uid
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .get()
                    .then(firestoreDocument => {
                        if(!firestoreDocument.exists){
                            alert("User does not exist anymore")
                            return;
                        }
                        const user = firestoreDocument.data()
                        navigation.navigate('Home', {user})
                    })
                    .catch(error =>{
                        alert(error)
                    });
            })
            .catch(error => {
                alert(error)
            })
    }

    const onLoginPress = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .get()
                    .then(firestoreDocument => {
                        if(!firestoreDocument.exists){
                            alert("User does not exist anymore")
                            return;
                        }
                        const user = firestoreDocument.data()
                        navigation.navigate('Home', {user})
                    })
                    .catch(error =>{
                        alert(error)
                    });
            })
            .catch(error => {
                alert(error)
            })
    }

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <KeyboardAwareScrollView
            style={{ flex:1, width: '100%'}}
            keyboardShoulPersistTaps="always">
                <View style={styles.logoView}>
                    <Image style={styles.logo} source={GasStation}/>
                </View>
            <TextInput
                style={styles.input}
                placeholder="E-mail"
                onChangeText={(text) => setEmail(text)}
                value={email}
                autoCapitalize="none"/>
                <TextInput
                    style={styles.input}
                    secureTextEntry
                    placeholder="Password"
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    autoCapitalize="none"/>
                <TouchableOpacity
                    onPress={()=> onLoginPress()}>
                    <Text style={styles.buttonTitle}>Log in</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{margin:20, backgroundColor:"grey"}}
                    onPress={() => TestPress()}>
                        <Text>Passs</Text>
                    </TouchableOpacity>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Don't have an account ? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Sign up</Text> </Text>
                </View>
            </KeyboardAwareScrollView>
        </View>
    );
}