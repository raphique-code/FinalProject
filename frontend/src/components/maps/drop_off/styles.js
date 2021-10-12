import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
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
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
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
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      backgroundColor:'#F0843C'
    },

    textSign: {
      fontSize: 18,
      fontWeight: 'bold'
  },

  header: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#F4ECE7',
    borderBottomWidth: 2,
    borderColor: 'grey'
  },

  subText: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    color: '#1A130E',
    fontWeight: 'bold',
    lineHeight: 30,
    paddingTop: 5
  },

  containerAddr: {
    backgroundColor: '#F4ECE7',
    paddingLeft: 8,
    paddingRight: 8,
    //elevation: 10,
    //shadowColor: '#52006A'
    
  },

  inputAddr: {
    backgroundColor: '#F4ECE7',
    flexDirection: 'row'

  },

  input: {
    height: 40,
    margin: 12,
    borderWidth:1,
    padding: 10,
    width: '94%',
    borderRadius: 2
},

input2: {
  height: 40,
  margin: 12,
  borderWidth: 1,
  padding: 10,
  width: '80%',
  borderRadius: 2
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

subText3: { // font color: orange
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 20,
  color: '#1A130E',
  fontWeight: 'bold',
  color: '#F0843C',
  marginLeft: 0,
  marginBottom: 10
},

conLeft: {
  backgroundColor: '#F4ECE7',
  width: '35%'
},

conRight: {
  backgroundColor: '#F4ECE7',
  width: '63%'
}


});
export default styles;