import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'grey',
     
    
    },
    
    container_SB: {  
      backgroundColor: '#F4ECE7',
      fontSize: 20,
      alignContent: "center",
      justifyContent: "flex-start",
      padding: 20,
      flex: 1
    },
    
    inner_container_one: {
     marginBottom: 100,
     backgroundColor: 'pink',
     marginLeft: 10,
     marginRight: 10,
     height: "30%",
     flexDirection: 'row',
     width: 338,
     alignContent: 'center',
    },
    
    inner_container: {
      marginBottom: 10,
      marginLeft: 10,
      marginRight: 10,
      position: 'absolute',
      backgroundColor: 'red'
    },
    
    recentsearch:{
      height: 100,
      width: 350,
      backgroundColor: 'red',
      borderRadius: 4,
      zIndex: 0
    },
    
    confirm: {
      width: '100%',
      height: 150,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      borderRadius: 10,
      backgroundColor:'#F0843C',
      flexDirection: 'row',
      marginBottom: 20
    },
    
    subText: {
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 20,
      color: '#1A130E',
      fontWeight: 'bold',
      lineHeight: 30
    },
    
    subText2: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#1A130E',
        fontWeight: 'bold',
        lineHeight: 30,
        paddingTop: 10,
        marginLeft: 25
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
      borderColor: 'grey'
    }
    
    
    });

    export default styles;
    