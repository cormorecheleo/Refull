import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useEffect, useState } from "react";
import {Button, Text, View, TouchableOpacity} from "react-native";
import styles from "./CarStyle";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import {firebase} from "../../firebase/config";
import { Card, Icon } from "react-native-elements";
import moment from "moment";
import Swipeable from "react-native-swipeable";

const rightButtons = [

    <TouchableOpacity style={styles.editButton}><View style={styles.editIcon}><Text><Icon name="pencil-outline" type="ionicon"/></Text></View></TouchableOpacity>,
    <TouchableOpacity style={styles.deleteButton}><View style={styles.deleteIcon}><Text><Icon name="trash-outline" type="ionicon"/></Text></View></TouchableOpacity>
  ];


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
    const db = firebase.firestore();
    
    useEffect(() => {
        const history = db.collection('historique')
            .where('carid', '==', id)
            .get()
            .then(querySnapchot => {
                setLoading(false);
                const document = querySnapchot.docs.map(function(doc){ 
                    const data = {
                        carid: doc.data().carid,
                        date: doc.data().date.toDate(),
                        nature: doc.data().nature,
                        numVerbal: doc.data().numVerbal,
                        resultat: doc.data().resultat,
                        type:doc.data().type
                    }
                    return data;
                 });
                setHistorique(document);
            });
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
                        <Text style={{padding:2}}>{kilometre.replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/gm, ' ')} km</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.eventTitle}> HISTORIQUE</Text>
                <View style={styles.line}></View>
                </View>
                <View>
                {
                        historique && historique.map(histo => {
                            return (
                                <Swipeable rightButtons={rightButtons} style={{marginTop:10}}>
                                <Card containerStyle={{margin:0}}>
                                    <Card.Title>{histo.type}</Card.Title>
                                    <Text style={styles.boldText}>Nature </Text><Text>{histo.nature}</Text>
                                    <Text style={styles.boldText}>N° procès verbal</Text><Text>{histo.numVerbal}</Text>
                                    <Text style={styles.boldText}>Date</Text><Text>{moment(histo.date).format('Do MMM YYYY')}</Text>
                                </Card>
                                </Swipeable>
                            )
                        })
                }
                </View>
            </>
    )
}
