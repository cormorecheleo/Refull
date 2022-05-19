import { View, ActivityIndicator, TouchableOpacity, SafeAreaView } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { firebase } from "../../firebase/config";
import styles from "./CarStyle";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { Button, Text } from '@rneui/themed';
import { Modalize } from "react-native-modalize";
import { PricingCard } from "react-native-elements";
import { ScrollView } from "react-native";

export default function Car({ navigation, route }) {

    const { user } = route.params;

    const carValue = [{

    }];
    const priceModal = useRef(null);
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
    const addVehiculeButton = () => {
        if (cars.length == 1 && user.premium == 0) {
            priceModal.current?.open();
        } else {
            navigation.navigate('Ajouter vehicule')
        }
    }


    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="large" />
            </View>
        )
    } else {
        return (
            <>
                <Button
                    title="Ajouter véhicule"
                    onPress={() => addVehiculeButton()}
                    buttonStyle={{
                        borderColor: 'rgba(78, 116, 289, 1)',
                    }}
                    type="outline"
                    titleStyle={{ color: 'rgba(78, 116, 289, 1)' }}
                    containerStyle={{
                        width: 200,
                        marginHorizontal: 100,
                        marginTop: 20,
                        marginVertical: 10,
                    }} />

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
                                                <FontAwesomeIcon icon={faCar} size={40} />
                                            </View>
                                            <View style={styles.info}>
                                                <Text style={{ padding: 2 }}>{car.marque} {car.modele}</Text>
                                                <View style={styles.line}></View>
                                                <Text style={{ padding: 2 }}>{car.plaque}</Text>
                                                <View style={{ borderTopWidth: 0.25, width: "90%" }}></View>
                                                <Text style={{ padding: 2 }}>{car.kilometre} km</Text>
                                            </View>

                                        </View>
                                    </TouchableOpacity>
                                </>
                            )
                        })
                    }
                </View>
                <Modalize ref={priceModal} panGestureEnabled={false} snapPoint={600}
                    HeaderComponent={
                        <View><Text style={{
                            fontSize: 22, textAlign: 'center', marginTop: 25, marginBottom: 20,
                            color: 'rgba(78, 116, 289, 1)'
                        }}>NOS TARIFS</Text></View>}>
                        <ScrollView style={{height:500}}>
                            <PricingCard
                                color="#4f9deb"
                                title="GRATUIT"
                                price="0€"
                                info={['1 Véhicule', '', 'All Core Features']}
                                button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
                                onButtonPress={() => priceModal.current?.close()} />
                            <PricingCard
                                color="#008000"
                                title="PREMIUM"
                                price="1.99€ / MOIS"
                                info={['1 User', 'Basic Support', 'All Core Features']}
                                button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
                                onButtonPress={() => console.log('Pressed')}
                            />
                        </ScrollView>
                </Modalize>
            </>
        )
    }
}

