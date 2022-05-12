import * as React from "react";
import {Button, StyleSheet, Text, TextInput, View} from "react-native";
import {Picker} from "@react-native-picker/picker";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import {firebase} from "../../firebase/config";

export default function AddVehiculeScreen({navigation}) {
    const [marque, setMarque] = React.useState('');
    const [modele, setModele] = React.useState('');
    const [chosenDate, setChosenDate] = React.useState(new Date());
    const [plaque, setPlaque] = React.useState('');
    const [select, setSelect] = React.useState("voiture");
    const [kilometre, setKilometre] = React.useState('');
    const uid = firebase.auth().currentUser.uid;
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

        //Check if fields null
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

    const onChange = (event, value) => {
        setChosenDate(value);
        console.log(chosenDate)
      };

    return (
        <>
            <View style={style.AddVehiculeTitle}>
                <Text>Ajouter nouveau vÃ©hicule</Text>
            </View>
            <View style={style.AddVehiculeBody}>
                <View style={style.FormGroup}>
                    <Text>Vehicule :</Text>
                    <Picker
                        selectedValue={select}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelect(itemValue)}>
                        <Picker.Item label="Voiture (B1-B)" value="car" />
                        <Picker.Item label="Moto (AM-A1-A2-A)" value="motorbike" />
                        <Picker.Item label="Camion" value="truck" />
                        <Picker.Item label="Bus" value="bus"/>
                    </Picker>
                </View>
                <View style={style.FormGroup}>
                    <Text>Marque :</Text>
                    <TextInput
                        style={style.Input}
                        onChangeText={setMarque}
                        placeholder="Entrer une marque"
                    />
                </View>
                <View style={style.FormGroup}>
                    <Text>ModÃ¨le :</Text>
                    <TextInput
                        style={style.Input}
                        onChangeText={setModele}
                        placeholder="Entrer une modele"
                    />
                </View>
                <View style={style.FormGroup}>
                    <Text>AnnÃ©e de mise en circulation :</Text>

                    <RNDateTimePicker
                        value={chosenDate}
                        mode='date'
                        display="default"
                        maximumDate={new Date()}
                        onChange={onChange}
                    />
                    
                </View>
                <View style={style.FormGroup}>
                    <Text>Plaque immatriculation :</Text>
                    <TextInput
                        style={style.Input}
                        onChangeText={setPlaque}
                        maxLength={7}
                        placeholder="AA000BB"
                    />
                </View>
                <View style={style.FormGroup}>
                    <Text>KilomÃ©trage :</Text>
                    <TextInput
                        style={style.Input}
                        onChangeText={setKilometre}
                        placeholder="Ex: 1584050"
                    />
                </View>
                <View style={style.FormGroup}>
                    <Button
                        title="Valider"
                        onPress={()=>{onButtonPress()}}
                    />
                </View>
            </View>
        </>
    );
}

const style = StyleSheet.create({
    AddVehiculeTitle: {
        alignItems: 'center',
        margin: 10,
        fontSize: 200
    },
    HomeView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    VehiculeButton: {
        alignItems: 'flex-end'
    },
    VehiculeView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Settings: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Input: {
        height: 40,
        borderWidth: 1,
        padding: 10
    },
    FormGroup: {
        margin: 'auto'
    }

})