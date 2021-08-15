import React, { useState } from "react";
import {LinearGradient} from 'expo-linear-gradient';
import { colors,PageLogo } from '../../../../components/styles';

    import { 
      View, 
      Text, 
      Picker,
      Modal,
      TouchableOpacity, 
      TextInput,
      Platform,
      SafeAreaView,
      StyleSheet ,
      StatusBar,
      Alert
  } from 'react-native';
import {DropDownContainers, StyledContainer, WhiteContainer, Subtitle, ButtonContainersHorizontal} from '../../../../components/styles';
const { primary, background, offWhite, darklight, green,primary_D,primary_DD } = colors;

const PackageDetails2 = ({navigation}) => {
  const [selectedValue, setSelectedValue] = useState("java");
  return (
    <WhiteContainer>
        <Text style={DropDownContainers.TextBlack}> Package Size </Text>
        <View
            style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    justifyContent: 'space-between', }}/>
        <View style = {styles2.container}>
            <Picker
            selectedValue={selectedValue}
            style={{ height: 60, width: 300  }}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
            <Picker.Item label="SMALL" value="S" />
            <Picker.Item label="MEDIUM" value="M" />
            <Picker.Item label="LARGE" value="L" />
            <Picker.Item label="EXTRA LARGE" value="XL" />
            </Picker>
        </View>
        <Text style={DropDownContainers.TextBlack}> Items Warning </Text>
        <View
            style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    justifyContent: 'space-between', }}/>
        <View style = {styles2.container}>
            <Picker
            selectedValue={selectedValue}
            style={{ height: 60, width: 300  }}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
            <Picker.Item label="FRAGILE" value="fragile" />
            <Picker.Item label="FLAMABLE" value="flamable" />
            <Picker.Item label="NONE" value="none" />
            </Picker>
        </View>
        <Text style={{color:"#9ca3af", fontSize: 11}}>{"\n"}
        {"\n"}
            Size Details: {"\n"}{"\n"}
                SMALL    = 0.3 X 0.6 X 0.4 M . up to 20  kg{"\n"}
                MEDIUM = 1   X   1 X   1 M . up to 200 kg{"\n"}
                LARGE    = 1.5 X 1   X   1 M . up to 300 kg{"\n"}
                JUMBO   = 2   X 1.2 X 1.2 M . up to 500 kg{"\n"}
        </Text>
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
                                }]}>Next</Text>
                            </LinearGradient>
                      </TouchableOpacity>

                
        </View>
        
    </WhiteContainer>
  );
}

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
      width: '100%',
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
export default PackageDetails2;
