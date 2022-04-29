import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    first: {
        height:"20%",
        marginTop:"5%",
        alignItems:"center"
    },
    logoImage:{
        width:150,
        height:120,
        marginLeft:"auto",
        marginRight:"auto",
        marginTop:"auto",
        marginBottom:"auto",
    },
    carousel:{
        height:"40%",
        width:"100%",
    },
    carouselContent:{
        flex:1,
        alignItems:"center",
        paddingTop:"15%",
    },
    carouselImage:{
        width:150,
        height:150,
    },
    carouselText:{
        marginTop:"4%",
        fontSize:20,
        textAlign:"center",
    },
    buttonRegister:{
        height:50,
        width:"80%",
        borderRadius:20,
        marginLeft:"auto",
        marginRight:"auto",
        marginTop:50,
    },
    buttonText:{
        color:"white",
        marginLeft:"auto",
        marginRight:"auto",
        marginTop:"auto",
        marginBottom:"auto",
        fontSize:16,
        fontWeight:"bold",
    },
    buttonLogin:{
        color:"rgba(0,100,255,1)",
        fontSize:16,
        marginTop:30,
        marginLeft:"auto",
        marginRight:"auto",
        fontWeight:"bold",
    }

})

export default styles;