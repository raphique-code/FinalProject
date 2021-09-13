import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        
        backgroundColor: 'grey',
        height: "100%",
        //marginTop: 30
    },
    container_SB: {  
        backgroundColor: '#F4ECE7',
        fontSize: 20,
        alignContent: "center",
        justifyContent: "flex-start",
        padding: 20,
        height: "100%"
    

        
      },

      small_word: {
        color: "blue",
        fontSize: 15,
        marginTop: 10
      },
  
    textInput: {
        
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: "black",
        borderBottomWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 20,
        height: '40%'
    },
    subText2: { // font color: orange
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#1A130E',
        fontWeight: 'bold',
        color: '#F0843C',
        marginLeft: 12,
        marginTop: 5
      },
      
    orderDetails: { //font color: black
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#1A130E',
        fontWeight: 'bold',
        lineHeight: 40,
        marginBottom: 10,
        marginLeft: 30
      },
    start: {
      // width: 200,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#F0843C',
        backgroundColor: '#F0843C',
        borderWidth: 2,
        borderRadius: 10,
        width: 300
        //flexDirection: 'row',
        //marginTop: 20,
        //marginBottom: 80,
      
      },

    containerBottom3:{
        height:'30%',
        //backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'flex-end',
     

    },
    button: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        borderRadius: 10,
        backgroundColor: "black"
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
      },
    buttonText: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
     
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: '94%'
    },

    
    containerMiddle: {
        //backgroundColor: 'black',
        backgroundColor: '#F4ECE7',
        height: 300,
        elevation: 10,
        shadowColor: '#52006A',
        borderRadius: 3,
        alignItems: 'flex-start',
        justifyContent: 'center',
        //flexDirection: 'row'
    },

    containerBottom: {
        backgroundColor: '#F4ECE7',
        height: 90,
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        //flexDirection: 'row',
        //backgroundColor:'pink'
    },

    containerBottom2: {
        backgroundColor: '#F4ECE7',
        height: 50,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        //backgroundColor:'pink'
    },


    header: {
        flexDirection: 'row',
        height: 50,
        backgroundColor: '#F4ECE7',
        borderBottomWidth: 2,
        borderColor: 'grey'
      },
});

export default styles;