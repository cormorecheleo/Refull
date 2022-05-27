import {Text, View, Image, TouchableOpacity} from "react-native";
import React from "react";
import BlankLogo from "../../assets/blank-logo.png";
import Voiture from "../../assets/voiture.png";
import BoxTruck from "../../assets/box-truck.png";
import DriverLessCar from "../../assets/driverless-car.png";
import styles from "./style";
import { Pages } from "react-native-pages";

export default function Welcome({navigation})
{
    //page d'accueil non connecté
        return (
            <>
                <View style={styles.first}>
                        <Image source={BlankLogo} style={styles.logoImage}/>
                </View>
                <View style={styles.carousel}>
                    <Pages>
                        <View style={styles.carouselContent}>
                            <Image source={Voiture} style={styles.carouselImage}/>
                            <Text style={styles.carouselText}>Refull permet de tenir vos véhicules à  jour</Text>
                        </View>
                        <View style={styles.carouselContent}>
                            <Image source={BoxTruck} style={styles.carouselImage}/>
                            <Text style={styles.carouselText}>Refull s'occupe de tout type de véhicules</Text>
                        </View>
                        <View style={styles.carouselContent}>
                            <Image source={DriverLessCar} style={styles.carouselImage}/>

                        </View>
                    </Pages>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                    <Text style={styles.buttonLogin}>Nouveau ? S'inscrire</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.buttonLogin}>Pas nouveau ? Connexion</Text>
                </TouchableOpacity>
            </>
        )
}