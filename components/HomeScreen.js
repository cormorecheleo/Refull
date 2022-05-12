import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import CarScreen from './Car/CarScreen'
import SettingsScreen from './Settings/SettingsScreen';
import InfoScreen from "./Info/InfoScreen";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHouse, faCar, faInfoCircle, faUser } from '@fortawesome/free-solid-svg-icons';


export default function HomeScreen({route, navigation}){
    const user = route.params;
    const Tab= createBottomTabNavigator();
    return(
<Tab.Navigator>
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({ color }) => (
                    <FontAwesomeIcon icon={faHouse} color={color} size={26}/>
                )
            }}/>
            <Tab.Screen name="Car" component={CarScreen} options={{
                tabBarIcon: ({ color }) => (
                    <FontAwesomeIcon icon={faCar} color={color} size={26}/>
                )
            }}/>
            <Tab.Screen name="Info" component={InfoScreen} options={{tabBarIcon: ({ color }) => (
                    <FontAwesomeIcon icon={faInfoCircle} color={color} size={26}/>
                    )}}/>
            <Tab.Screen name="Account" component={SettingsScreen} options={{
                tabBarIcon: ({ color }) => (
                    <FontAwesomeIcon icon={faUser} color={color} size={26}/>
                )
            }}/>
        </Tab.Navigator>
    );
}

function Home(){
    return(
        <View>
            <Text>Home ! </Text>
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