import {Button, Text, View, Switch} from "react-native";
import React from "react";
import styles from "./SettingsStyle";
import {firebase} from "../../firebase/config";
import { Avatar, Badge } from "react-native-elements";


export default function Settings({navigation}) {
//Connexion à la base de données
    const user = firebase.auth().currentUser;
    console.log(user);
    const [ isDarkMode, setIsDarlMode ] = React.useState(false);
    const toggleSwitch = () => {
        setIsDarlMode(previousState => !previousState);

    }
    //Affiche le compte utilisateur avec ses données personnelles
    return(
        <>
        <View style={styles.container}>

        <View style={styles.logoView}>
                <Avatar
                size="xlarge"
                rounded
                title="MD"
                onPress={() => console.log("Works!")}
                containerStyle={{backgroundColor:'grey'}}
                />
                
            </View>
           
            <View style={styles.picButton}>
                <Button title="Changer photo de profile"/>
            </View>


            <Text style={styles.label}>MON COMPTE</Text>
            <View style={styles.account}>
                <View style={styles.row}>
                    <Text style={styles.col}>Adresse mail</Text>
                    <Text style={styles.scope}>{user.email}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.col}>Prénom</Text>
                    <Text style={styles.scope}>first name</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.col}>Nom</Text>
                    <Text style={styles.scope}>User</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.col}>Mode sombre</Text>
                    <Switch style={styles.scope} onValueChange={toggleSwitch} value={isDarkMode}/>
                </View>
            </View>
            <View style={styles.logout}>
                <Button style={styles.logoutButton} color="red" onPress={() => { firebase.auth().signOut().then(() => navigation.navigate("Login"))}} title="Deconnexion"/>
            </View>
        </View>
            </>
    )
}