/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import AddCarScreen from './components/Car/AddCarScreen';
import Welcome from './components/Welcome/screen';
import LoginScreen from './components/Auth/LoginScreen';
import RegisterScreen from './components/Auth/RegisterScreen';
import HomeScreen from './components/HomeScreen';
import CarEvent from "./components/Car/CarEvent";
import CarDetails from "./components/Car/CarDetails";

const Stack = createNativeStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <React.Fragment>
          
          {/* WELCOME SCREEN */}
          <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }}/>


          {/* Authentication Screens */}
          <Stack.Screen name="Login" component={LoginScreen}/>
          <Stack.Screen name="Register" component={RegisterScreen}/>
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false}}/>
          <Stack.Screen name="Ajouter un véhicule" component={AddCarScreen}/>

        </React.Fragment>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
