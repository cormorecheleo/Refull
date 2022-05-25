import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import CarScreen from './Car/CarScreen'
import SettingsScreen from './Settings/SettingsScreen';
import InfoScreen from "./Info/InfoScreen";
import { Icon } from "react-native-elements";
import {LineChart, BarChart} from "react-native-chart-kit";
  import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width - 16;

const chartConfig = {
    backgroundColor: "rgba(242,242,242,255)",
    backgroundGradientFrom: "rgba(242,242,242,255)",
    backgroundGradientTo: "rgba(242,242,242,255)",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 2) => `rgba(78, 116, 289, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

  const data = {
    labels: ["Janvier", "Février", "Mars", "Avril", "Mai"],
    datasets: [
      {
        data: [120.20, 160.79, 170.34, 140.37, 134.38]
      }
    ]
  };
  data2={
    labels: ["Janvier", "Février", "Mars", "Avril", "Mai"],
    datasets: [
      {
        data: [63.2, 84.7, 94.6, 76, 72.7]
      }
    ]
  };

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
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                
                <Text style={{fontSize: 18, textAlign: 'center', marginTop: 25, color: 'rgba(78, 116, 289, 1)'}}>
                Tableau de bord</Text></View>

                <BarChart
                   style={{alignItems: 'center', marginTop: 50}}
                    data={data}
                    width={screenWidth}
                    height={220}
                    yAxisLabel="€ "
                    chartConfig={chartConfig}
                    verticalLabelRotation={20}/>

                <LineChart
                style={{alignItems: 'center', marginTop: 40}}
                    data={data2}
                    width={screenWidth}
                    height={250}
                    verticalLabelRotation={20}
                    yAxisLabel="L "
                    chartConfig={chartConfig}
                    
                />
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