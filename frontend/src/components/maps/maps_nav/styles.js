import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'grey',
      marginTop: 20
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
      margin: 580,
     backgroundColor: 'azure',
    
      position: 'absolute',
      marginLeft: 10,
      marginRight: 10,
      borderRadius: 10
      
    },

    inner_container: {
      marginBottom: 10,
      marginTop: 20,

      marginLeft: 12,
      marginRight: 10,
      position: 'absolute',
      width: "94%",
      height: "20%",
      alignContent: "center",
      borderRadius: 20,
      justifyContent: "space-evenly",
      backgroundColor: 'azure'
      
      
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
      marginTop: 12,
      marginLeft: 10,
      margin: 5,
      marginRight: 10,


    },

    Box_button_top: {

   
      marginLeft: 10,
      marginTop: 30,
      marginRight: 10,
      borderRadius: 10,
      height:"45%",
      backgroundColor: 'gainsboro',
      flexDirection: 'row',

    },

    Box_button_bottom: {

   
      marginLeft: 10,
      marginBottom: 10,
      marginTop: 15,
      marginRight: 10,
      borderRadius: 10,
      height:"47%", 
      backgroundColor: 'gainsboro',
      flexDirection: 'row',
    },
      
      
    map: {
      flex: 3,
      marginTop: 10,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    },
});
