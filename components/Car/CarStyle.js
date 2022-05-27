import {StyleSheet} from "react-native";

//Fichier de style

const styles = StyleSheet.create({
    card : {
        borderWidth: 0.5,
        borderRadius:5,
        margin: 10,
        flexDirection:"row",
    },
    photo: {
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        borderRightWidth:0.3,
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
        marginLeft:'auto',
        marginRight:'auto'
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
        marginLeft:'auto',
        marginRight:'auto',
    },
    fieldOpacity :{
            height: 40, 
            textAlign: 'justify', 
            borderRadius: 5,
            margin:20, 
            borderColor: 'rgba(78, 116, 289, 1)', 
            borderWidth: 0.5
    },
    fieldView: {
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
    fieldLabel:{
        marginLeft: 10, 
        fontSize: 18, 
        textAlign: 'left', 
        float: 'left',   
        lineHeight: 40, 
        color: 'rgba(78, 116, 289, 1)'
    },
    fieldResult: {
        fontSize: 14, 
        textAlign: 'right', 
        float: 'right', 
        lineHeight: 40,
        color: '#9F9F9F', 
        marginLeft: 'auto'
    },
    fieldChevron:{
        marginBottom: 'auto', 
        paddingHorizontal: 10, 
        color: "#9F9F9F"
    },
    modalTitle: {
        fontSize: 18, 
        textAlign: 'center', 
        marginTop: 25, 
        marginBottom: 20, 
        color: 'rgba(78, 116, 289, 1)' 
    },
    modalButton:{
        borderColor: 'rgba(78, 116, 289, 1)', 
        borderWidth: 1, 
        borderRadius: 5,
        marginTop: 30
    },
    buttonContainer:{
        width: 200, 
        marginHorizontal: 100, 
        marginTop: 20, 
        marginVertical: 10
    },
    boldText:{
        fontWeight:'bold',
    },
    editButton:{
        backgroundColor:'grey',
        height:'100%',
    },
    editIcon:{
        marginTop:'auto',
        marginBottom:'auto',
        marginLeft:25
    },
    deleteButton:{
        backgroundColor:'red',
        height:'100%',

    },
    deleteIcon:{
        marginTop:'auto',
        marginBottom:'auto',
        marginLeft:25
    },

});

export default styles;