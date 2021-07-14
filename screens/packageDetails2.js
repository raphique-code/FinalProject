import React, { useState } from "react";
import { View, Picker, StyleSheet,Text, Modal, 
    TouchableOpacity, SafeAreaView } from "react-native";
import {DropDownContainers, StyledContainer, WhiteContainer, Subtitle, ButtonContainersHorizontal} from '../components/styles';
import {ModalPicker} from '../components/modalPicker';
import { StatusBar } from 'expo-status-bar';
import ButtBlack from '../components/BlackButtons';
import Butt from '../components/CustomButton';

const PackageDetails2 = () => {
  const [selectedValue, setSelectedValue] = useState("java");
  return (
    <WhiteContainer>
        <Text style={DropDownContainers.TextBlack}> Package Size </Text>
        <View
            style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    justifyContent: 'space-between', }}/>
        <View style = {styles.container}>
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
        <View style = {styles.container}>
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
                    <ButtBlack title="BACK"/>
                    <Butt title= "NEXT"/>
                </View>
        
    </WhiteContainer>
  );
}

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

export default PackageDetails2;