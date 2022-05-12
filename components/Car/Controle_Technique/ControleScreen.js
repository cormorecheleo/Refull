import RNDateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import React from "react";
import { Text, Button, TextInput, View } from "react-native";
import styles from "../CarStyle";

const Controle = ({navigation, route}) => {
    const [naturePicker, setNaturePicker] = React.useState("Visite technique périodique");
    const [resultatPicker, setResultatPicker] = React.useState("Vehicule non soumis a contre visite");
    const [date, setDate] = React.useState(new Date());
    const {id} = route.params;
    const onChangeDate = (event, value) => {
        setDate(value);
    }

    return(
        <>
        <View style={{marginLeft:"auto", marginRight:"auto", margin:15}}>
            <Text style={styles.eventTitle}>CONTROLE TECHNIQUE</Text>
        </View>
        <Text>Nature du controle : </Text>
        <Picker
        selectedValue={naturePicker}
        onValueChange={(itemValue, itemIndex) => setNaturePicker(itemValue)}>
            <Picker.Item label="Visite technique périodique" value="Visite technique périodique"/>
            <Picker.Item label="Contre visite" value="Contre visite"/>
            <Picker.Item label="Visite volontaire" value="Visite volontaire"/>
            <Picker.Item label="Visite complémentaire anti-pollution" value="Visite complémentaire anti-pollution"/>
        </Picker>

        <Text>Date du controle : </Text>
        <RNDateTimePicker
        value={date}
        mode='date'
        display="default"
        maximumDate={new Date()}
        onChange={onChangeDate}
        />
        <Text>Numero du procès verbal : </Text>
        <TextInput/>

        <Text>Resultat du controle</Text>
        <Picker
        selectedValue={resultatPicker}
        onValueChange={(itemValue, itemIndex) => setResultatPicker(itemValue)}>
            <Picker.Item label="Vehicule non soumis a contre visite" value="Vehicule non soumis a contre visite"/>
            <Picker.Item label="Vehicule soumis a contre visite" value="Vehicule soumis a contre visite"/>
        </Picker>


        <Button onPress={() => navigation.pop(2)} title="Valider"/>
        </>
    )
}

export default Controle;