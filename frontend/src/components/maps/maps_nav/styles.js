export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'grey'
      
  
    },
    container_SB: {  
    
      backgroundColor: 'blue',
      fontSize: 20,
      alignContent: "center",
      justifyContent: "center",
      padding: 20,
      

  
      flex: 1
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
      
      
      
      backgroundColor: 'azure'
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

    Box_button_top: {

   
      marginLeft: 5,
      marginTop: 5,
      marginRight: 5,
    },

    Box_button_bottom: {

   
      marginLeft: 5,
      marginBottom: 5,
      marginRight: 5,
    },
      
      
    map: {
      flex: 3,
      marginTop: 10,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    },
});
