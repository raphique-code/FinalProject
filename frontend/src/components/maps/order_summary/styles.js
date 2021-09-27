import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'grey',
      marginTop: 30
    
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
        marginTop: 20,
        marginBottom: 80,
        width: '100%'
      },


    
    subText: { //font color: black
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 15,
      color: '#1A130E',
      //fontWeight: 'bold',
      //lineHeight: 33.75,
      marginTop: 7,
      marginBottom: 7,
      marginRight: 20,
    },

    subText2: { // font color: orange
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#F0843C',
        //lineHeight: 40,
        marginLeft: 20,
        marginTop: 5,
        marginBottom: 2.9,
      },


    subText3: { // font color: orange
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F0843C',
    //lineHeight: 40,
    marginLeft: 1,
    marginTop: 30,
    marginBottom: 1,
    },

    kmMin: {
      color: "#6c7682",
      fontSize: 17,
    },

    orderDetails: { //font color: black
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#1A130E',
        fontWeight: 'bold',
        lineHeight: 40,
        marginBottom: 10,
        marginLeft: 90
      },

    
    edit: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 15,
        color: '#1A130E',
        fontWeight: 'bold',
        color: '#F0843C'
      },

      

      buttonText: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
      },
    

    containerLeft: {
        height: '100%',
        width: '50%',
        alignItems: 'flex-start',
        flex: 1,
        backgroundColor: '#F4ECE7'
    },

    containerRight: {
        height: '100%',
        width: '50%',
        alignItems: 'flex-end',
        flex: 1,
        backgroundColor: '#F4ECE7'
},


    containerMiddle: {
        backgroundColor: '#F4ECE7',
        height: 200,
        elevation: 10,
        shadowColor: '#52006A',
        borderRadius: 3,
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'row'
    },

    containerBottom: {
        backgroundColor: '#F4ECE7',
        height: 65,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },

    conatinerLeft2: {
      height: 28,
      backgroundColor: '#F4ECE7',
      width: '22%',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      borderRightWidth: 1,
      borderRightColor: "#6c7682"
    },

    conatinerRight2: {
      height: 28,
      backgroundColor: '#F4ECE7',
      width: '22%',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      //borderLeftWidth: 1,
      //borderLeftColor: "#6c7682"
    },

    pickUpDropOffButton: {
      width: '95%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      backgroundColor:'#F0843C',
      //flexDirection: 'row',
      marginBottom: 20,
      //marginRight: 20
    },


    containerFinish: {
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      backgroundColor:'#F0843C',
      //flexDirection: 'row',
      marginBottom: 50,
      //paddingRight: 100
    },


    header: {
        flexDirection: 'row',
        height: 50,
        backgroundColor: '#F4ECE7',
        borderBottomWidth: 2,
        borderColor: '#F4ECE7'
      },

    mapContainer: {
        marginTop: 10,
        marginBottom: 10,
        height: 350
    },
  
    bottomButtonShortLeft: {
      width: '50%',
      //flexDirection: 'row',
      backgroundColor: '#F4ECE7',
      alignItems: 'flex-start'

    },

    bottomButtonShortRight: {
      width: '50%',
      //flexDirection: 'row',
      backgroundColor: '#F4ECE7',
      alignItems: 'flex-end'
    },
    
    });
    export default styles;
    
