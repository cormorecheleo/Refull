import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useEffect, useState } from "react";
import {Button, Text, View, TouchableOpacity} from "react-native";
import styles from "./CarStyle";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import {firebase} from "../../firebase/config";
import { Card } from "react-native-elements";
import moment from "moment";


export default function Car({route, navigation}) {
    const { id,
        kilometre,
        marque,
        modele,
        plaque,
        type,
        chosenDate,
    } = route.params;
    const [historique, setHistorique] = useState([{}]);
    const [loading, setLoading] = useState(true);
    console.log(chosenDate);
    console.log(route.params);
    const db = firebase.firestore();
    useEffect(() => {
        const history = db.collection('historique')
            .where('carid', '==', id)
            .get()
            .then(querySnapchot => {
                setLoading(false);
                const document = querySnapchot.docs.map(doc => doc.data());
                setHistorique(document);
            });
            console.log("HISTOOOO ---->", history);
            return history;
    }, []);
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
                <View style={{marginLeft:30}}>
                    <Text style={styles.eventTitle}> HISTORIQUE</Text>
                <View style={styles.line}></View>
                </View>
                <View>
                {
                        historique && historique.map(histo => {
                            return (
                                <Card>
                                    <Card.Title>{histo.type}</Card.Title>
                                    <Text>Nature : {histo.nature}</Text>
                                    <Text>N° procès verbal : {histo.numVerbal}</Text>
                                </Card>
                            )
                        })
                }
                </View>
            </>
    )
}
