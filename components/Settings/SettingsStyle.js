import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container:{
        marginVertical:15
    },
    label: {
        fontSize:17,
        color:'grey',
        marginVertical:10,
        marginHorizontal:15,
    },
    account: {
        width:'100%',
        height:'auto',
        backgroundColor:'white',
        borderTopColor: 'grey',
        borderTopWidth:0.5,
    },
    row:{
        flexDirection:"row",
        width:'100%',
        borderBottomColor: 'grey',
        borderBottomWidth:0.5,

    },
    scope:{
        margin:15,
        marginLeft:'auto',
        marginRight:'5%',
    },
    col: {
        fontSize:16,
        fontWeight:"bold",
        margin:15,
    },
    logout: {
        margin:15,
    },
    logoutButton: {
        margin:20,
    }

});

export default styles;