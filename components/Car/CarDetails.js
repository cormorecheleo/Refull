import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import {Button, Text, View, TouchableOpacity} from "react-native";
import styles from "./CarStyle";
import { faCar } from "@fortawesome/free-solid-svg-icons";


export default function Car({route, navigation}) {
    const { id,
        kilometre,
        marque,
        modele,
        plaque,
        type,
        chosenDate,
    } = route.params;
    console.log(chosenDate);
    console.log(route.params);
    return(
        <>
            <View style={styles.addView}>
                <TouchableOpacity onPress={() => navigation.navigate('AddEvent', {
                    id: id
                })}><Text style={styles.addButton}>+</Text></TouchableOpacity>
            </View>
                <View style={styles.card}>
                    <View style={styles.photo}>
                        <FontAwesomeIcon icon={faCar} style={styles.icon} size={40}/>
                    </View>
                    <View style={styles.info}>
                        <Text style={{padding:2}}>{marque} {modele}</Text>
                        <View style={styles.line}></View>
                        <Text style={{padding:2}}>{plaque}</Text>
                        <View style={{borderTopWidth: 0.25, width: "90%"}}></View>
                        <Text style={{padding:2}}>{kilometre} km</Text>
                    </View>
                </View>
                <View style={{marginLeft:10}}>
                    <Text style={styles.eventTitle}> HISTRORIQUE</Text>
                <View style={styles.line}></View>

                </View>
            </>
    )
}
