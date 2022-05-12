import {Text, View, TouchableOpacity} from "react-native";
import React from "react";
import styles from "./CarStyle";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";


export default function Event({navigation, route}){
    const { id,
    } = route.params;
    return(
        <View style={styles.eventView}>
            <View>
                    <Text style={styles.eventTitle}>QUE VOULEZ VOUS AJOUTER ?</Text>
            </View>
            <View style={{flexDirection:"row"}}>
                <TouchableOpacity style={styles.eventCard}>
                    {/*<FontAwesomeIcon name="wrench" style={styles.eventIcon} size={40}/>*/}
                    <Text style={styles.eventCardTitle}>ENTRETIEN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.eventCard} onPress={() => navigation.navigate('Liste des stations essence')}>
                    {/*<FontAwesomeIcon name="fuel" style={styles.eventIcon} size={40}/>*/}
                    <Text style={styles.eventCardTitle}>CARBURANT</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", marginTop:10, marginBottom:50}}>
                <TouchableOpacity style={styles.eventCard} onPress={() => navigation.navigate('Controle technique', {
                    id: id
                })}>
                    {/*<FontAwesomeIcon name="garage-open" style={styles.eventIcon} size={40}/>*/}
                    <Text style={styles.eventCardTitle}>CONTROLE TECHNIQUE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.eventCard}>
                    {/*<FontAwesomeIcon name="fuel" style={styles.eventIcon} size={40}/>*/}
                    <Text style={styles.eventCardTitle}>PLEIN</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
