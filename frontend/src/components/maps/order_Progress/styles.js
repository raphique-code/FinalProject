import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'grey',
      
    
    },
    buttonText: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
      },
    
    container_SB: {  
      backgroundColor: '#F4ECE7',
      fontSize: 20,
      alignContent: "center",
      justifyContent: "flex-start",
      padding: 20,
      flex: 1
    },
    
    confirm: {
      width: 150,
      height: 35,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#F0843C',
      borderWidth: 2,
      borderRadius: 10,
      flexDirection: 'row',
      marginBottom: 20,
      backgroundColor:'#F0843C',
    },
    
    inner_container: {
      marginBottom: 10,
      marginTop: 20,

      marginLeft: 12,
      marginRight: 10,
      position: 'absolute',
      width: "94%",
      height: "25%",
      alignContent: "center",
      borderRadius: 20,
      justifyContent: "space-evenly",
      backgroundColor: 'azure'
      
      
      },


    start: {
        width: 200,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#F0843C',
        backgroundColor: '#F0843C',
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: 'row',
        marginTop: 105,
        marginBottom: 20,
        width: '100%'
        
      },

    edit2: {
        fontWeight: 'bold',
        color: '#F4ECE7',
        fontSize: 25
    },
    
    subText: { //font color: black
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 20,
      color: '#1A130E',
      fontWeight: 'bold',
      lineHeight: 40,
      marginBottom: 10,
      marginLeft: 20
    },

    radius: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    color: 'grey',
    fontWeight: 'bold',
    marginBottom: 10
    },
    
    edit: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 15,
        color: '#1A130E',
        fontWeight: 'bold',
        color: '#F0843C'
      },

      subText2: { // font color: orange
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 15,
        color: '#1A130E',
        //fontWeight: 'bold',
        color: '#F0843C',
        marginLeft: 20,
        marginTop: 10
      },
    
    insubText: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 15,
        color: 'white',
        marginLeft: 25
    },
    
    textSign: {
      fontSize: 18,
      fontWeight: 'bold'
    },
    
    boxDimension: {
        fontSize: 15,
      color: '#F4ECE7',
      marginLeft: 25
    },
    
    header: {
        flexDirection: 'row',
        height: 50,
        backgroundColor: '#F4ECE7',
        borderBottomWidth: 2,
        borderColor: '#F4ECE7'
      },
    

    containerTop: {
        alignItems: 'center'
    },

    containerLeft: {
        width: '50%'
    },

    containerRight: {
        width: '50%'
    },

    containerStatus: {
        width: '100%',
        flexDirection: 'row'
    },

    containerMiddle: {
        backgroundColor: '#F4ECE7',
        height: 160,
        elevation: 10,
        shadowColor: '#52006A',
        borderRadius: 3,
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'row'
    },

    containerMiddle2: {
        backgroundColor: '#F4ECE7',
        height: 160,
        elevation: 10,
        shadowColor: '#52006A',
        borderRadius: 3,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        //flexDirection: 'row',
        marginTop: 10
    },

    containerBottom: {
        backgroundColor: '#F4ECE7',
        height: 300,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },


    orderDetails: { //font color: black
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#1A130E',
        fontWeight: 'bold',
        lineHeight: 40,
        marginBottom: 10,

        marginLeft: 40
    },

  
  });
  export default styles;