import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import CarScreen from './Car/CarScreen'
import SettingsScreen from './Settings/SettingsScreen';
import InfoScreen from "./Info/InfoScreen";
import { Icon } from "react-native-elements";

export default function HomeScreen({route, navigation}){
    const {user} = route.params;
    const Tab= createBottomTabNavigator();
    return(
<Tab.Navigator>
            <Tab.Screen name="Accueil" component={Home} options={{
                tabBarIcon: ({ color }) => (
                    <Icon name="home-outline" size={26} type="ionicon"/>
                )
            }}/>
            <Tab.Screen name="Véhicule" component={CarScreen} initialParams={{ user: user}} options={{
                tabBarIcon: ({ color }) => (
                    <Icon name="car-sport-outline" size={26} type="ionicon"/>
                )
            }}/>
            <Tab.Screen name="Information" component={InfoScreen} options={{tabBarIcon: ({ color }) => (
                    <Icon name="information-circle-outline" size={26} type="ionicon"/>
                    )
            }}/>

            <Tab.Screen name="Compte" component={SettingsScreen} options={{
                tabBarIcon: ({ color }) => (
                    <Icon name="person-circle-outline" size={26}  type="ionicon"/>
                )
            }}/>
        </Tab.Navigator>
    );
}

function Home(){
    return(
        <View>

        </View>
    )
}

StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center'
    },
    input: {
        height:48,
        borderRadius:5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom:10,
        marginLeft:30,
        paddingLeft: 16
    }
})