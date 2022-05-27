import React from "react";
import { Image } from "react-native";
import {Text, Input, Button, ListItem} from '@rneui/themed';
import { useRef } from 'react';
import { Modalize } from 'react-native-modalize';
import { View, TouchableOpacity} from "react-native";
import { Picker } from "@react-native-picker/picker";


export default function Info({navigation}){
//Image de prévention
const iMage = "https://www.blois.fr/sites/default/files/agenda/Code-de-la-route-soiree-prevention-routiere-nov2019.jpg";
const iMage2 = "https://img.over-blog.com/500x267/1/72/92/26/alcool_seuils-copie-1.gif";
const iMage3 = "https://img4.autodeclics.com/photo_article/71206/5920/1200-L-prevention-routiere-bilan-2008.jpg";

//Modalize fonction alcool 
const modalizeRef = useRef(null);
const onOpen = () => {
    modalizeRef.current?.open();
  };
  const onClose = () => {
      modalizeRef.current?.close();
  };
//variable d'état pour la gestion des champs de saisie du formulaire alcool
  const [genre, setGenre] = React.useState();
  const [alcool, setAlcool] = React.useState();  
  const [degrés, setDegrés] = React.useState();  
  const [poids, setPoids] = React.useState();  

//Alerte formulaire alcool
  const onButtonPress = () => {

    if(genre == null){
        alert("Veuillez renseigner votre genre");
        return;
    }
    if(!alcool == null){
        alert("Veuillez renseigner votre alcool bu en mililitres");
        return;
    }
    if(!degrés == null){
        alert("Veuillez rensigner votre degrés de teneur en alcool");
        return;
    }
    if(!poids == null){
        alert("Veuillez renseigner votre poids en kilos");
        return;
    }
//calcul de l'alcool bu homme 
    if(genre === "Homme"){
        Resultat = ((alcool*(degrés/100)*0.8)/(0.7*poids)); // pour un homme
       console.log((alcool*(degrés/100)*0.8)/(0.7*poids));
       alert("Votre taux d'alcool est de " + Resultat.toFixed(1) + " g/l          Il ne faut pas prendre le volant a plus de 0,5 g/l d’alcool dans le sang !");
    }
    //calcul de l'alcool bu femme
    if (genre === "Femme"){
        Resultat = ((alcool*(degrés/100)*0,8)/(0,6*poids)); // pour une femme
        alert("Votre taux d'alcool est de " + Resultat.toFixed(1) + " g/l          Il ne faut pas prendre le volant a plus de 0,5 g/l d’alcool dans le sang !");
    }
    modalizeRef.current?.close();
}
//Retourne la page 
    return(
        <>
            <Image source={{url: iMage}} style={{height: '20%'}}/>   
            <Image source={{url: iMage2}} style={{height: '29%'}}/>
            <Image source={{url: iMage3}} style={{height: '30%'}}/>

            <Button title="Calculer son taux d’alcoolémie" onPress={onOpen}
                    buttonStyle={{borderColor: 'rgba(78, 116, 289, 1)', borderWidth: 0.5, borderRadius: 5, marginTop: 30}}
                    type="outline" titleStyle={{color: 'rgba(78, 116, 289, 1)'}} 
                    containerStyle={{width: 200, marginHorizontal: 100, marginTop: 20, marginVertical: 10}}/> 

            <Modalize ref={modalizeRef} snapPoint={630} panGestureEnabled={false}
                 HeaderComponent={ 
                 <View><Text style={{fontSize: 18, textAlign: 'center', marginTop: 25, color: 'rgba(78, 116, 289, 1)'}}>
                    Calcule ton taux d'alcolémie</Text></View>}>

                    <Picker selectedValue={genre} onValueChange={(itemValue, itemIndex) => setGenre(itemValue)}>
                        <Picker.Item label="Seléctionne ton genre" />
                        <Picker.Item label="Homme" value="Homme"/>
                        <Picker.Item label="Femme" value="Femme"/>
                    </Picker>

                    <Input label="Ton Poids (kg)" placeholder="Poids (kg)" type="number" keyboardType='numeric' style={{marginTop: 10}}
                    value={poids} maxLength={5} onChangeText={(text) => setPoids(text)}/>

                    <Input label="Le volume d'alcool bu (ml)" placeholder="Alcool bu (ml)" keyboardType='numeric' style={{marginTop: 10}}
                    value={alcool} maxLength={7} onChangeText={(text) => setAlcool(text)}/>

                    <Input label="Le degrés d'alcool en pourcetage" placeholder="Degrés d'alcool" keyboardType='numeric' style={{marginTop: 10}} 
                    value={degrés} maxLength={4} onChangeText={(text) => setDegrés(text)}/>
                     
                 <Button title="Valider" onPress={()=>{onButtonPress()}}
                    buttonStyle={{borderColor: 'rgba(78, 116, 289, 1)', borderWidth: 0.5, borderRadius: 5, marginTop: 10}}
                    type="outline" titleStyle={{color: 'rgba(78, 116, 289, 1)'}} 
                    containerStyle={{width: 200, marginHorizontal: 100, marginTop: 20, marginVertical: 10}}/>
                 </Modalize>
        </>
    )

}