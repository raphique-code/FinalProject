import * as React from 'react';

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
import {LinearGradient} from 'expo-linear-gradient';
import { colors,PageLogo } from '../components/styles';
import Constants from 'expo-constants';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import {DropDownContainers, StyledContainer, WhiteContainer, Subtitle, ButtonContainersHorizontal} from '../components/styles';
const GOOGLE_PLACES_API_KEY = 'AIzaSyCr7M9Y948P_wcJ400eix6EfLjKRRzVCbQ'; // never save your real api key in a snack!
const { primary, background, offWhite, darklight, green,primary_D,primary_DD } = colors;
const SenderDetails = ({navigation}) => {
    const [text, onChangeText] = React.useState(null);
    const [number, onChangeNumber] = React.useState(null);
  return (
    <WhiteContainer>
      
      <Text style={DropDownContainers.TextBlack}> Sender Name </Text>
      <View
            style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    justifyContent: 'space-between', }}/>
            <TextInput
                style={styles2.container}
                onChangeText={onChangeText}
                value={text}
                placeholder="Name"        
            />
       
      <Text style={DropDownContainers.TextBlack}> Sender Phone Number </Text>
      <View
            style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    justifyContent: 'space-between', }}/>
            <TextInput
                style={styles2.container}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Phone Number"
                keyboardType="numeric"      
            />
          <Text style={DropDownContainers.TextBlack}> Sender Address </Text>
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
              <TouchableOpacity
                  style={styles.signIn}
                  onPress={() => navigation.navigate('ReceiverDetails')}>
                    <LinearGradient
                        colors={[primary, primary_D]}
                        style={styles.signIn}
                    >
                        <Text style={[styles.textSign, {
                            color:'#fff'
                        }]}>Back</Text>
                    </LinearGradient>

                    
              </TouchableOpacity>
              <TouchableOpacity
                  style={styles.signIn}
                  onPress={() => navigation.navigate('SenderDetails')}>
                    <LinearGradient
                        colors={[primary, primary_D]}
                        style={styles.signIn}
                    >
                        <Text style={[styles.textSign, {
                            color:'#fff'
                        }]}>Next</Text>
                    </LinearGradient>
              </TouchableOpacity>

                   
        </View>
    </WhiteContainer>

  );
};

const styles2 = StyleSheet.create({
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

export default SenderDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: background
  },
  header: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 50,
      alignItems: 'center',
      justifyContent: 'center'
  },
  footer: {
      flex: 3,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30
  },
  text_header: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 30
  },
  text_footer: {
      color: '#05375a',
      fontSize: 18
  },
  action: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5
  },
  actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#FF0000',
      paddingBottom: 5
  },
  textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
  },
  errorMsg: {
      color: '#FF0000',
      fontSize: 14,
  },
  button: {
      alignItems: 'center',
      marginTop: 50
  },
  signIn: {
      width: '50%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10
  },
  textSign: {
      fontSize: 18,
      fontWeight: 'bold'
  }
});