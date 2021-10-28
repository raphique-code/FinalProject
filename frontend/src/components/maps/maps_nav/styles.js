import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'grey',
      marginTop: 10
    },

    header: {
      flexDirection: 'row',
      height: 50,
      width:'100%',
      backgroundColor: '#F4ECE7',
      borderBottomWidth: 1,
      borderColor: '#F4ECE7',
      position: 'absolute',
      //elevation: 5,
      //shadowColor: '#52006A'
      

    },

    confirm: {
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      backgroundColor:'#F0843C',
      
    },
  
    
    textSign: {
      fontSize: 18,
      fontWeight: 'bold'
  },

    container_SB: {  
    
      backgroundColor: 'blue',
      fontSize: 20,
      alignContent: "center",
      justifyContent: "center",
      padding: 20,
      flex: 1,
      marginTop: 20
    
    },
    inner_container_one: {
      marginBottom: 0,
      marginTop: 620,
     backgroundColor: '#F4ECE7',
    
      position: 'absolute',
      marginLeft: 12,
      marginRight: 10,
      borderRadius: 10,
      elevation: 10,
      shadowColor: '#52006A'
      
    },

    inner_container: {
      marginBottom: 10,
      marginTop: 70,

      //marginLeft: 12,
      marginRight: 10,
      position: 'absolute',
      width: "100%",
      height: "25%",
      alignContent: "center",
      borderRadius: 10,
      justifyContent: "space-evenly",
      backgroundColor: '#F4ECE7',
      elevation: 10,
      shadowColor: '#52006A'
      
      
      },

      inner_container_two: {
        marginBottom: 10,
        marginTop: 20,
  
        marginLeft: 12,
        marginRight: 10,
        position: 'absolute',
        width: "94%",
        height: 50,
        alignContent: "center",
        borderRadius: 20,
        justifyContent: "center",
        backgroundColor: 'azure',
        elevation: 10,
        shadowColor: '#52006A'
        },
    
    display_text: {

      fontSize : 20,
      fontWeight: 'bold',
      marginBottom: 5,
      marginLeft: 10,
      marginRight: 10,


    },
    
    display_text_two: {

      fontSize : 15,
      fontWeight: 'normal',
      
      marginLeft: 10,
      marginTop: 5,
      marginRight: 10,



    },

    display_text_three:{

      fontSize : 15,
      fontWeight: 'normal',
      marginTop: 14,
      marginLeft: 10,
      margin: 5,
      marginRight: 10,
      color: 'grey'


    },

    Box_button_top: {

      
      marginLeft: 10,
      marginTop: 60,
      marginRight: 10,
      borderRadius: 5,
      borderWidth: 1,
      height:"38%",
      //backgroundColor: 'gainsboro',
      backgroundColor: '#F4ECE7',
      flexDirection: 'row',

    },

    Box_button_bottom: {

   
      marginLeft: 10,
      marginBottom: 10,
      borderWidth: 1,
      marginTop: 15,
      marginRight: 10,
      borderRadius: 5,
      height:"45%", 
      //backgroundColor: 'gainsboro',
      backgroundColor: '#F4ECE7',
      flexDirection: 'row',
    },
      
      
    map: {
      flex: 3,
      marginTop: 10,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    },
});