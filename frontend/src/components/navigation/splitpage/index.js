import { T_index } from '../../../redux/constants';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Text, View} from 'react-native'
import styles from "./styles"
import { userAuthStateListener } from '../../../redux/actions';
import { customer } from '../../../redux/actions';
import { USER_TYPE } from '../../../redux/constants';
import { driver } from '../../../redux/actions';
//const {primary,background,offWhite, darklight} = Colors;
const Split_page = () =>{

    const currentUserObj = useSelector(state => state.type)
    console.log(currentUserObj)

    const dispatch = useDispatch();
    //const [Package_details, setPackage_detail] = useState(false)

   
   
    return(
        <View style={styles.container}>
            <StatusBar style="dark"/>
            <View style={styles.container_SB}>
                <View style={styles.inner_container}>    
                    <View style={styles.logo} resizeMode="cover"source={require('./../../../../assets/logoV-full.png')} />
                  

                    
                </View>
                <Text style={[styles.subText], {marginTop:30}}> Sign In as: </Text>
                <View style={[styles.container], {marginTop:30}}>
                    <TouchableOpacity style={[styles.container], {marginTop:30}} 
                    onPress={() =>  {
                        dispatch(driver())}}>
                    <Text style={styles.subText}>Driver</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.container], {marginTop:30}}
                    onPress={() =>  {
                        dispatch(customer())}}>
                    <Text style={styles.subText}>Customer</Text>
                    </TouchableOpacity>
                  
                </View>
                <View style={[styles.container], {marginTop:30}}>
                    <Text  style={styles.subText}>
                        {currentUserObj.currentUserType}
                    </Text>
                </View>
            </View>
        </View>

    );
}

//place logo in View container to mae it center 

export default Split_page;
