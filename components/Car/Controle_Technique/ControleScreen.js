import RNDateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import React, { useRef, useState } from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import { Button, Input, ListItem, PricingCard, colors } from "react-native-elements";
import styles from "../CarStyle";
import { Modalize } from "react-native-modalize";
import moment from "moment";
import "moment/locale/fr";
import {firebase} from "../../../firebase/config";


const Controle = ({ navigation, route }) => {
    const [naturePicker, setNaturePicker] = useState("");
    const [resultatPicker, setResultatPicker] = useState("");
    const [date, setDate] = useState(new Date());
    const [contreVisiteDate, setContreVisiteDate] = useState(new Date());
    const [numVerbal, setNumVerbal] = useState("");
    const { id } = route.params;
    const onChangeDate = (event, value) => {
        setDate(value);
    }
    const onChangeContreDate = (event, value) => {
        setContreVisiteDate(value);
    }
    const natureModal = useRef(null);
    const dateModal = useRef(null);
    const numModal = useRef(null);
    const resModal = useRef(null);
    const [limiteDate, setLimiteDate] = useState(new Date());
    const OpenModal = (ModalRef) => {
        ModalRef.current?.open();
    }

    const CloseModal = (ModalRef) => {
        ModalRef.current?.close();
    }

    const data = {
        carid:id,
        numVerbal:numVerbal,
        type:"Controle technique",
        date:date,
        nature:naturePicker,
        resultat:resultatPicker
    }
    const onSavePress = () => {
        if(!naturePicker.trim()){
            alert("Nature is required !!");
            return;
        }else if(!resultatPicker.trim()){
            alert("Resultat is required !!");
            return;
        }else if(!numVerbal.trim()){
            alert("Numero is required !!");
            return;
        }

        const historiqueRef = firebase.firestore().collection('historique');
        historiqueRef
            .doc(id+"_"+moment(date).format('L').replace('/', '-').replace('/', '-')+"_"+moment(date).format('LTS'))
            .set(data)
            .then(() => {
                alert("SUCCESS !!")
                navigation.pop(2);
            }).catch((error) => {
                alert("ERROR!!")
                alert(error)
            });


    }
    /*
    const renderEle = () => {
        if(naturePicker == "Visite périodique" && resultatPicker == "Non valide"){
            return(
                <View>
                <Text>Date contre visite : </Text>
                <RNDateTimePicker
                    value={contreVisiteDate}
                    mode='date'
                    display="default"
                    maximumDate={limiteDate}
                    onChange={onChangeContreDate}
                />
                <Text>Contre visite au plus tard : {renderLimiteDate()}</Text>
                </View>
            )
        }
    }
    */
    
    const renderLimiteDate = () => {
        console.log("Limite", limiteDate)
        return(
            moment(limiteDate).format("D MMMM YYYY")
        )
    }

    return (
        <>
            <View style={{ marginLeft: "auto", marginRight: "auto", margin: 15 }}>
                <Text style={styles.eventTitle}>CONTROLE TECHNIQUE</Text>
            </View>


            <View>
                <TouchableOpacity style={styles.fieldOpacity} onPress={() => OpenModal(natureModal)}>
                    <View style={styles.fieldView}>
                        <Text style={styles.fieldLabel}>Nature du controle : </Text>
                        <Text style={styles.fieldResult}>{naturePicker}</Text>
                        <ListItem.Chevron style={styles.fieldChevron} />
                    </View>
                </TouchableOpacity>


                <TouchableOpacity style={styles.fieldOpacity} onPress={() => OpenModal(dateModal)}>
                    <View style={styles.fieldView}>
                        <Text style={styles.fieldLabel}>Date du controle : </Text>
                        <Text style={styles.fieldResult}>{moment(date).format("D MMM YYYY")}</Text>
                        <ListItem.Chevron style={styles.fieldChevron} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.fieldOpacity} onPress={() => OpenModal(numModal)}>
                    <View style={styles.fieldView}>
                        <Text style={styles.fieldLabel}>N° du procès verbal : </Text>
                        <Text style={styles.fieldResult}>{numVerbal}</Text>
                        <ListItem.Chevron style={styles.fieldChevron} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.fieldOpacity} onPress={() => OpenModal(resModal)}>
                    <View style={styles.fieldView}>
                        <Text style={styles.fieldLabel}>Resultat du controle</Text>
                        <Text style={styles.fieldResult}>{resultatPicker}</Text>
                        <ListItem.Chevron style={styles.fieldChevron} />
                    </View>
                </TouchableOpacity>

                <Button onPress={() =>{onSavePress()}} type="outline" title="Valider" />
            </View>

            <Modalize ref={natureModal} snapPoint={600} panGestureEnabled={false}
                HeaderComponent={
                    <View>
                        <Text style={styles.modalTitle}>
                            Nature du controle
                        </Text>
                    </View>}>
                <Picker
                    selectedValue={naturePicker}
                    onValueChange={(itemValue, itemIndex) => setNaturePicker(itemValue)}>
                    <Picker.Item label="Choisir la nature du controle" value="" />
                    <Picker.Item label="Visite technique périodique" value="Visite périodique" />
                    <Picker.Item label="Contre visite" value="Contre visite" />
                    <Picker.Item label="Visite volontaire" value="Visite volontaire" />
                    <Picker.Item label="Visite complémentaire anti-pollution" value="Visite anti-pollution" />
                </Picker>

                <Button title="Valider" onPress={() => CloseModal(natureModal)}
                    buttonStyle={styles.modalButton}
                    type="outline" titleStyle={{ color: 'rgba(78, 116, 289, 1)' }}
                    containerStyle={styles.buttonContainer} />
            </Modalize>

            <Modalize ref={dateModal} snapPoint={600} panGestureEnabled={false}
                HeaderComponent={
                    <View>
                        <Text style={styles.modalTitle}>
                            Date du controle
                        </Text>
                    </View>
                }>
                <RNDateTimePicker
                    value={date}
                    mode='date'
                    display="default"
                    maximumDate={new Date()}
                    onChange={onChangeDate}
                />
                
                <Button title="Valider" onPress={() => CloseModal(dateModal)}
                    buttonStyle={styles.modalButton}
                    type="outline" titleStyle={{ color: 'rgba(78, 116, 289, 1)' }}
                    containerStyle={styles.buttonContainer} />
            </Modalize>
            <Modalize ref={numModal} snapPoint={600} panGestureEnabled={false}
                HeaderComponent={
                    <View>
                        <Text style={styles.modalTitle}>
                            Numero du controle
                        </Text>
                    </View>
                }>

                <Input placeholder="Numero" value={numVerbal} onChangeText={(text) => setNumVerbal(text)} />
                <Button title="Valider" onPress={() => CloseModal(numModal)}
                    buttonStyle={styles.modalButton}
                    type="outline" titleStyle={{ color: 'rgba(78, 116, 289, 1)' }}
                    containerStyle={styles.buttonContainer} />
            </Modalize>

            <Modalize ref={resModal} snapPoint={600} panGestureEnabled={false}
                HeaderComponent={
                    <View>
                        <Text style={styles.modalTitle}>
                            Resultat
                        </Text>
                    </View>
                }>
                <Picker
                    selectedValue={resultatPicker}
                    onValueChange={(itemValue, itemIndex) => setResultatPicker(itemValue)}>
                    <Picker.Item label="Choisir un résultat" value="" />
                    <Picker.Item label="Vehicule non soumis a contre visite" value="Valide" />
                    <Picker.Item label="Vehicule soumis a contre visite" value="Non valide" />
                </Picker>
                {/*renderEle()*/}

                <Button title="Valider" onPress={() => CloseModal(resModal)}
                    buttonStyle={styles.modalButton}
                    type="outline" titleStyle={{ color: 'rgba(78, 116, 289, 1)' }}
                    containerStyle={styles.buttonContainer} />
            </Modalize>
        </>
    )
}

export default Controle;