
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert
} from 'react-native';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
        marginTop: 0
     
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
        //marginBottom: 20,
      },
    
      start: {
          //width: '100',
          height: '18%',
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: '#F0843C',
          backgroundColor: '#F0843C',
          borderWidth: 2,
          borderRadius: 10,
          flexDirection: 'row',
          marginTop: 10,
          marginBottom: 1,
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
          fontSize: 22,
          //color: '#1A130E',
          fontWeight: 'bold',
          color: '#F0843C',
          marginBottom: 5,
          //marginTop:10
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
      },
     
    
      containerTop: {
          alignItems: 'center',
          height: '40%',
          backgroundColor: '#F4ECE7',
          justifyContent: 'center'
      },
    
    
      containerMiddle: {
          backgroundColor: '#F4ECE7',
          height: '43%',
          //elevation: 10,
          shadowColor: '#52006A',
          borderRadius: 3,
          alignItems: 'center',
          justifyContent: 'center'
      },
    
      containerBottom: {
          backgroundColor: '#F4ECE7',
          height: '39%',
          alignItems: 'center',
          justifyContent: 'flex-start'
      },

});

