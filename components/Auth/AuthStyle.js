import {StyleSheet} from "react-native";


const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center'
    },
    logoView:{
        height:"auto",
        alignItems:"center",
        marginVertical:10,
    },
    logo: {
        width:120,
        height:180,
    },
    motorcycleLogo: {
        width:150,
        height:150,
        marginVertical:10,
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },
    button: {
        backgroundColor: '#788eec',
        marginRight: 30,
        marginLeft: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonTitle: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold"
    },
    footerView: {
        flex:1,
        alignItems: 'center',
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: '#2e2e2d'
    },
    footerLink: {
        color:"rgba(0,100,255,1)",
        fontSize:16,
        fontWeight: "bold"
    }

});

export default styles;