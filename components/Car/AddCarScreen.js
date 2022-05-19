import * as React from "react";
import {StyleSheet, View, TouchableOpacity} from "react-native";
import {firebase} from "../../firebase/config";
import {useEffect} from "react";
import {Text, Input, Button, ListItem} from '@rneui/themed';
import { useRef } from 'react';
import { Modalize } from 'react-native-modalize';
import { Picker } from "@react-native-picker/picker";
import styles from "./CarStyle";


export default function AddVehiculeScreen({navigation}) {
    const [marque, setMarque] = React.useState('');
    const [modele, setModele] = React.useState('');
    const currentDate = new Date();
    const [chosenDate, setChosenDate] = React.useState(currentDate);
    const [plaque, setPlaque] = React.useState('');
    const [select, setSelect] = React.useState('');
    const [kilometre, setKilometre] = React.useState('');
    const uid = firebase.auth().currentUser.uid;

//Modalizer for Select type
const modalizeRef = useRef(null);
    const onOpen = () => {
      modalizeRef.current?.open();
    };
    const onClose = () => {
        modalizeRef.current?.close();
    };
//Modalizer for Select type
const modalizeRef1 = useRef(null);
const onOpen1 = () => {
    modalizeRef1.current?.open();
  };
  const onClose1 = () => {
      modalizeRef1.current?.close();
  };
//Modalizer for Modele type
const modalizeRef2 = useRef(null);
const onOpen2 = () => {
    modalizeRef2.current?.open();
  };
  const onClose2 = () => {
      modalizeRef2.current?.close();
  };
  //Modalizer for annee type
const modalizeRef3 = useRef(null);
const onOpen3 = () => {
    modalizeRef3.current?.open();
  };
  const onClose3 = () => {
      modalizeRef3.current?.close();
  };
    //Modalizer for plaque type
const modalizeRef4 = useRef(null);
const onOpen4 = () => {
    modalizeRef4.current?.open();
  };
  const onClose4 = () => {
      modalizeRef4.current?.close();
  };
      //Modalizer for kilometrage type
const modalizeRef5 = useRef(null);
const onOpen5 = () => {
    modalizeRef5.current?.open();
  };
  const onClose5 = () => {
      modalizeRef5.current?.close();
  };

    const data = {
        id: marque+plaque,  
        marque: marque,
        modele: modele,
        chosenDate: chosenDate,
        plaque: plaque.toUpperCase(),
        kilometre: kilometre,
        type: select,
        uid: uid
    };
    const onButtonPress = () => {

        if(!marque.trim()){
            alert("Marque is required !")
            return;
        }
        if(!modele.trim()){
            alert("Modele is required")
            return;
        }
        if(!plaque.trim()){
            alert("Plaque is required")
            return;
        }
        if(!kilometre.trim()){
            alert("Kilometre is required")
            return;
        }

        const VehiculeRef = firebase.firestore().collection('vehicules')
        VehiculeRef
            .doc(marque+plaque)
            .set(data)
            .then(()=>{
                alert("SUCCESS!!")
                navigation.navigate('Car')
            })
            .catch((error) => {
                alert("ERROR!!")
                alert(error)
            });
    }

    return (
        <>
            <View>

            <TouchableOpacity style={styles.fieldOpacity} onPress={onOpen}>

            <View style={styles.fieldView}>
            
            <Text style={styles.fieldLabel}>Type de véhicule</Text>

            <Text style={styles.fieldResult}>{select}</Text>
    
            <ListItem.Chevron style={styles.fieldChevron} />
            </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.fieldOpacity} onPress={onOpen1}>

            <View style={styles.fieldView}>
        
             <Text style={styles.fieldLabel}>Marque</Text>

            <Text style={styles.fieldResult}>{marque}</Text>
                            
            <ListItem.Chevron style={styles.fieldChevron} />
            </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.fieldOpacity} onPress={onOpen2}>

            <View style={styles.fieldView}>
        
            <Text style={styles.fieldLabel}>Modèle</Text>

            <Text style={styles.fieldResult}>{modele}</Text>
                            
            <ListItem.Chevron style={styles.fieldChevron} />
            </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.fieldOpacity} onPress={onOpen3}>

            <View style={styles.fieldView}>
            
            <Text style={styles.fieldLabel}>Année de mise en circulation</Text>

            <Text style={styles.fieldResult}>date</Text>
                            
            <ListItem.Chevron style={styles.fieldChevron} />
            </View>
            </TouchableOpacity>


            <TouchableOpacity style={styles.fieldOpacity} onPress={onOpen4}>

            <View style={styles.fieldView}>
            
            <Text style={styles.fieldLabel}>Numéro d'immmatriculation</Text>

            <Text style={styles.fieldResult}>{plaque}</Text>
                                
            <ListItem.Chevron style={styles.fieldChevron} />
            </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.fieldOpacity} onPress={onOpen5}>

            <View style={styles.fieldView}>
            
            <Text style={styles.fieldLabel}>Kilométrage</Text>

            <Text style={styles.fieldResult}>{kilometre}</Text>
                                
            <ListItem.Chevron style={styles.fieldChevron} />
                            </View>
            </TouchableOpacity>
                
                <Button title="Valider" onPress={()=>{onButtonPress()}}
                    buttonStyle={{borderColor: 'rgba(78, 116, 289, 1)', borderWidth: 0.5, borderRadius: 5, marginTop: 30}}
                    type="outline" titleStyle={{color: 'rgba(78, 116, 289, 1)'}} 
                    containerStyle={{width: 200, marginHorizontal: 100, marginTop: 20, marginVertical: 10}}/>
            </View>

            <Modalize ref={modalizeRef} panGestureEnabled={false} snapPoint={600}
                 HeaderComponent={
                    <View><Text style={{fontSize: 18, textAlign: 'center', marginTop: 25, marginBottom: 20,
                                color: 'rgba(78, 116, 289, 1)'}}> Type de véhicule</Text></View>}>
                     
                 <Picker selectedValue={select} onValueChange={(itemValue, itemIndex) => setSelect(itemValue)}>
                        <Picker.Item label="Choisir un véhicule"/>
                        <Picker.Item label="Voiture" value="Voiture" />
                        <Picker.Item label="Moto" value="Moto" />
                        <Picker.Item label="Camion" value="Camion" />
                        <Picker.Item label="Bus" value="Bus"/>
                    </Picker>
                <Button title="Valider" onPress={onClose}
                    buttonStyle={styles.modalButton}
                    type="outline" titleStyle={{color: 'rgba(78, 116, 289, 1)'}} 
                    containerStyle={styles.buttonContainer}/>
                 </Modalize>

                 <Modalize ref={modalizeRef1} snapPoint={600} panGestureEnabled={false}
                 HeaderComponent={ 
                 <View><Text style={{fontSize: 18, textAlign: 'center', marginTop: 25, marginBottom: 20, color: 'rgba(78, 116, 289, 1)'}}>
                    Choisir la marque</Text></View>}>
                     
                 <Input placeholder="Nom de la marque" value={marque} onChangeText={(text) => setMarque(text)}/>
                 <Button title="Valider" onPress={onClose1}
                    buttonStyle={{borderColor: 'rgba(78, 116, 289, 1)', borderWidth: 0.5, borderRadius: 5, marginTop: 30}}
                    type="outline" titleStyle={{color: 'rgba(78, 116, 289, 1)'}} 
                    containerStyle={{width: 200, marginHorizontal: 100, marginTop: 20, marginVertical: 10}}/>
                 </Modalize>

                 <Modalize ref={modalizeRef2} snapPoint={600} panGestureEnabled={false}
                 HeaderComponent={ <View>
                      <Text style={{fontSize: 18, textAlign: 'center', marginTop: 25, marginBottom: 20, color: 'rgba(78, 116, 289, 1)'}}>
                    Choisir le modèle</Text></View>}>
                     
                 <Input placeholder="Nom du modèle" value={modele} onChangeText={(text) => setModele(text)}/>
                 <Button title="Valider" onPress={onClose2}
                    buttonStyle={{borderColor: 'rgba(78, 116, 289, 1)', borderWidth: 0.5, borderRadius: 5, marginTop: 30}}
                    type="outline" titleStyle={{color: 'rgba(78, 116, 289, 1)'}} 
                    containerStyle={{width: 200, marginHorizontal: 100, marginTop: 20, marginVertical: 10}}/>
                 </Modalize>

                 <Modalize ref={modalizeRef3} snapPoint={600} panGestureEnabled={false}
                 HeaderComponent={ <View>
                      <Text style={{fontSize: 18, textAlign: 'center', marginTop: 25, marginBottom: 20, color: 'rgba(78, 116, 289, 1)'}}>
                    Année de mise en circulation</Text></View>}>
                     
                 <Input placeholder="Nom du modèle" value={modele} onChangeText={(text) => setModele(text)}/>
                 <Button title="Valider" onPress={onClose3}
                    buttonStyle={{borderColor: 'rgba(78, 116, 289, 1)', borderWidth: 0.5, borderRadius: 5, marginTop: 30}}
                    type="outline" titleStyle={{color: 'rgba(78, 116, 289, 1)'}} 
                    containerStyle={{width: 200, marginHorizontal: 100, marginTop: 20, marginVertical: 10}}/>
                 </Modalize>

                 <Modalize ref={modalizeRef4} snapPoint={600} panGestureEnabled={false}
                 HeaderComponent={ <View>
                      <Text style={{fontSize: 18, textAlign: 'center', marginTop: 25, marginBottom: 20, color: 'rgba(78, 116, 289, 1)'}}>
                    Numéro d'immmatriculation</Text></View>}>
                     
                 <Input placeholder="Saisir l'immatriculation" maxLength={7} value={plaque} onChangeText={(text) => setPlaque(text)}/>
                 <Text style={{fontSize: 12,  marginBottom: 20, marginLeft: 20, marginTop: -16}}>
                    Exemple : AN301GJ</Text>
                 <Button title="Valider" onPress={onClose4}
                    buttonStyle={{borderColor: 'rgba(78, 116, 289, 1)', borderWidth: 0.5, borderRadius: 5, marginTop: 30}}
                    type="outline" titleStyle={{color: 'rgba(78, 116, 289, 1)'}} 
                    containerStyle={{width: 200, marginHorizontal: 100, marginTop: 20, marginVertical: 10}}/>
                 </Modalize>

                 <Modalize ref={modalizeRef5} snapPoint={600} panGestureEnabled={false}
                 HeaderComponent={ <View>
                      <Text style={{fontSize: 18, textAlign: 'center', marginTop: 25, marginBottom: 20, color: 'rgba(78, 116, 289, 1)'}}>
                    Kilométrage</Text></View>}>
                     
                 <Input placeholder="Saisir le nombre de kilomètre" keyboardType='numeric' value={kilometre} maxLength={7} onChangeText={(text) => setKilometre(text)}/>
                 <Button title="Valider" onPress={onClose5}
                    buttonStyle={{borderColor: 'rgba(78, 116, 289, 1)', borderWidth: 0.5, borderRadius: 5, marginTop: 30}}
                    type="outline" titleStyle={{color: 'rgba(78, 116, 289, 1)'}} 
                    containerStyle={{width: 200, marginHorizontal: 100, marginTop: 20, marginVertical: 10}}/>
                 </Modalize>


        </>
    );
}
