import { StyleSheet } from "react-native";







export const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#F4ECE7',
          marginTop: 20
        
        },

        header: {
            flexDirection: 'row',
            height: 50,
            backgroundColor: '#F4ECE7',
            borderBottomWidth: 2,
            borderColor: 'grey'
          },

        editProfile: { //font color: black
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 20,
            color: '#1A130E',
            fontWeight: 'bold',
            lineHeight: 40,
            marginBottom: 10,
            marginLeft: 40
          },

        input: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            width: '94%'
        },

        containerMiddle: {
            backgroundColor: '#F4ECE7',
            height: '15%',
            elevation: 10,
            shadowColor: '#52006A',
            borderRadius: 3,
            alignItems: 'flex-start',
            justifyContent: 'center',
            //flexDirection: 'row',
            marginBottom: 10
          },

        container_SB: {  
            backgroundColor: '#F4ECE7',
            fontSize: 20,
            alignContent: "center",
            justifyContent: "flex-start",
            padding: 20,
            flex: 1
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



          containerSave: {
            width: '100%',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            backgroundColor:'#F0843C',
            marginBottom: 1
          },

          buttonText: {
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 20,
            color: 'white',
            fontWeight: 'bold'
          },
    });
