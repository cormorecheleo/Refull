import {StyleSheet} from "react-native";


const styles = StyleSheet.create({
    card : {
        backgroundColor: "#dbdbdb",
        borderWidth: 0.5,
        borderRadius:5,
        margin: 10,
        flexDirection:"row",
    },
    photo: {
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    },
    icon:{
        borderWidth:1,
        padding:2,
        borderRadius:22,
        backgroundColor:"white",
        overflow:"hidden",
    },
    info: {
        flex:2,
        padding:5,
        alignItems:"center",
    },
    line: {
        borderTopWidth:0.5,
        width:"90%",
    },
    addView: {
        width:50,
        marginLeft:'auto',
        marginTop:10,
    },
    addButton: {
        fontSize:30,
        color:'#007bff',
    },
    eventView: {
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    eventCard: {
        margin:10,
        borderWidth:0.5,
        paddingTop:10,
        width:'40%',
        height:'100%',
        alignItems:"center",
    },
    eventIcon: {
        borderWidth:1,
        padding:10,
        margin:10,
        borderRadius:30,
    },
    eventCardTitle: {
        fontSize:20,
        color:'grey',
    },
    eventTitle: {
        fontSize:25,
        color:'grey',
    }
});

export default styles;