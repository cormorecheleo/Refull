import React from "react";
import {Text, TouchableOpacity} from "react-native";


export default function Info({navigation}){

    return(
        <>
            <Text>Les infos :</Text>
            <TouchableOpacity onPress={() => navigation.navigate('PrÃ©vention routière')}><Text>PrÃ©vention Routiere</Text></TouchableOpacity>
        </>
    )

}