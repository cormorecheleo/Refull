import {Button, Text, View, ActivityIndicator, TouchableOpacity} from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React, {useEffect, useState} from "react";
import {firebase} from "../../firebase/config";
import styles from "./CarStyle";

export default function Car({navigation}) {

    const carValue = [{

    }];
    const [cars, setCars] = useState(carValue);
    const [loading, setLoading] = useState(true);
    const db = firebase.firestore();
    const uid = firebase.auth().currentUser.uid;
    React.useEffect(() => {
            const cars = navigation.addListener('focus', () => {
                db.collection('vehicules')
                    .where('uid', '==', uid)
                    .get()
                    .then(querySnapchot => {
                        setLoading(false);
                        const document = querySnapchot.docs.map(doc => doc.data());
                        setCars(document);
                    });
                return cars;
            }, [navigation]);
    })
    if (loading){
        return (
            <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
                <ActivityIndicator size="large"/>
            </View>
        )
    }else {
        return (
            <>
                <Button
                    title="Ajouter vehicule"
                    onPress={() => navigation.navigate('Ajouter vÃ©hicule')}/>
                <View style={styles.container}>
                    {
                        cars && cars.map(car => {
                            return (
                                <>
                                    <TouchableOpacity onPress={() => navigation.navigate('Details', {
                                        id: car.id,
                                        kilometre: car.kilometre,
                                        marque: car.marque,
                                        modele: car.modele,
                                        plaque: car.plaque,
                                        type: car.type,
                                        chosenDate: car.chosenDate.toDate(),
                                    })}>
                                        <View style={styles.card}>
                                            <View style={styles.photo}>
                                                <MaterialCommunityIcons name={car.type} style={styles.icon} size={40}/>
                                            </View>
                                            <View style={styles.info}>
                                                <Text style={{padding:2}}>{car.marque} {car.modele}</Text>
                                                <View style={styles.line}></View>
                                                <Text style={{padding:2}}>{car.plaque}</Text>
                                                <View style={{borderTopWidth: 0.25, width: "90%"}}></View>
                                                <Text style={{padding:2}}>{car.kilometre} km</Text>
                                            </View>

                                        </View>
                                    </TouchableOpacity>
                                </>
                            )
                        })
                    }
                </View>
            </>
        )
    }
}

