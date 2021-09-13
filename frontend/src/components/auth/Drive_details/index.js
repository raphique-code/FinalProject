
import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux'
import { login } from '../../../redux/actions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { register } from '../../../redux/actions';
import styles from './styles';

export default function Drive_AuthDetails({authPage, Drive_setDetailsPage, setDrive_login}){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [custEmailSu, onChangeCustEmailSu] = useState(null);
    const [custPasswordSu, onChangeCustPasswordSu] = useState(null);
    const [custPhone, setCustPhone] = useState('');
    

    const dispatch = useDispatch()

    const handleLogin = () => {
        dispatch(login(email, password))
            .then(() => {
                console.log(email)
                console.log(password)
                console.log('login successful')
            })
            .catch(() => {
                 console.log(email)
                console.log(password)
                console.log('login unsuccessful')
            })
    }
    const handleRegister = () => {
        dispatch(register(email, password))
            .then(() => {
                console.log(email)
                console.log(password)
                console.log('register successful')
            })
            .catch(() => {
                console.log(email)
                console.log(password)
                console.log('register unsuccessful')
            })
    }

    return (
       
            <View style={styles.container}>
    
                <View style={styles.header}>
                    <TouchableOpacity  onPress={() => Drive_setDetailsPage(false)} >
                        <AntDesign 
                            name="arrowleft" // panah
                            color="black"
                            size={30}
                            style= {{paddingTop: 10, paddingBottom: 20, paddingRight: 58, paddingLeft: 20}}
                        />
                    </TouchableOpacity>
                    <Text style={[styles.orderDetails, {marginLeft: 53, marginTop: 3}]}> Sign Up </Text>
                </View>
    
                <View style = {styles.container_SB}>
                    <View style = {styles.containerMiddle}>
                        <View style={styles.containerBottom}>
                            <Text style={styles.subText2}>E-mail</Text>
                                <TextInput style={styles.input}
    
                                    onChangeText={(text) => setEmail(text)}
                                    placeholder='Email'
                  
                                />
    
                        </View>
    
                        <View style={styles.containerBottom}>
                            <Text style={styles.subText2}>Password</Text>
                                <TextInput style={styles.input}
                                    
                                    onChangeText={(text) => setPassword(text)}
                                    secureTextEntry
                                    placeholder='*********'
                                />
                         </View>
                         <View style={styles.containerBottom}>
                            <Text style={styles.subText2}>Phone Number</Text>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={(text) => setCustPhone(text)}
                                    placeholder='09** *** ***'
                                    keyboardType="numeric"
                                />
                        </View>
    
                    </View>
            
                    <View style={styles.containerBottom3}>
                        <TouchableOpacity  style={styles.start}
                            
                            onPress={() => handleRegister()}>
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </TouchableOpacity>
    
                    </View>
                    <View>
                    <Text>
                        Already have an account? <TouchableOpacity 
                        
                        onPress={() => {setDrive_login(true); Drive_setDetailsPage(false)}}>
                        <Text style={styles.small_word}> Sign in </Text>
                    </TouchableOpacity>
                    </Text>
                </View>
                        
                    
                </View>            
            </View >
        
        
    )
    
    
    
}