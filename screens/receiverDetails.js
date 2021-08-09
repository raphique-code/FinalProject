import * as React from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';
import Constants from 'expo-constants';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import ButtBlack from '../components/BlackButtons2';
import Butt from '../components/CustomButton2';
import {DropDownContainers, StyledContainer, WhiteContainer, Subtitle, ButtonContainersHorizontal} from '../components/styles';
const GOOGLE_PLACES_API_KEY = 'AIzaSyCr7M9Y948P_wcJ400eix6EfLjKRRzVCbQ'; // never save your real api key in a snack!

const ReceiverDetails = () => {
    const [text, onChangeText] = React.useState(null);
    const [number, onChangeNumber] = React.useState(null);
  return (
    <WhiteContainer>
      
      <Text style={DropDownContainers.TextBlack}> Receiver Name </Text>
      <View
            style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    justifyContent: 'space-between', }}/>
            <TextInput
                style={styles.container}
                onChangeText={onChangeText}
                value={text}
                placeholder="Name"        
            />
       
      <Text style={DropDownContainers.TextBlack}> Receiver Phone Number </Text>
      <View
            style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    justifyContent: 'space-between', }}/>
            <TextInput
                style={styles.container}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Phone Number"
                keyboardType="numeric"      
            />
          <Text style={DropDownContainers.TextBlack}> Receiver Address </Text>
        <View
            style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    justifyContent: 'space-between', }}/>
        <GooglePlacesAutocomplete
            placeholder="Search"
            styles={{
                textInputContainer: {
                  backgroundColor: '#F4ECE7',
                },
                textInput: {
                    color: '#5d5d5d',
                    fontSize: 16,
                    backgroundColor:'#F4ECE7',
                    alignItems: 'center',
                    padding: 20,
                    height: 60, 
                    width: 345,
                    borderWidth: 2,
                    flexDirection: 'row', 
                    borderRadius:10,
                    marginTop: 30,
                    elevation:2,
                    justifyContent: 'center',
                },
                predefinedPlacesDescription: {
                  color: '#1faadb',
                },
              }}
            query={{
            key: GOOGLE_PLACES_API_KEY,
            language: 'en', // language of the results
            }}
            onPress={(data, details = null) => console.log(data)}
            onFail={(error) => console.error(error)}
            requestUrl={{
            url:
                'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api',
            useOnPlatform: 'web',
            }} // this in only required for use on the web. See https://git.io/JflFv more for details.
        />
         <View style={ButtonContainersHorizontal.container}>
                    <ButtBlack title="BACK"/>
                    <Butt title= "NEXT"/>
                </View>
    </WhiteContainer>

  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#F4ECE7',
        alignItems: 'center',
        padding: 20,
        height: 60, 
        width: 345,
        borderWidth: 2,
        flexDirection: 'row', 
        borderRadius:10,
        marginTop: 30,
        elevation:2,
        justifyContent: 'center',
      }
});

export default ReceiverDetails;