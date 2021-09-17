import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux'
import { login } from '../../../redux/actions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { register } from '../../../redux/actions';
import styles from './styles';
export default function Drive_login({authPage, Drive_setDetailsPage, setDrive_login}){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [custEmailSu, onChangeCustEmailSu] = useState(null);
    const [custPasswordSu, onChangeCustPasswordSu] = useState(null);
    const [custPhone, setCustPhone] = useState('');
    

    const dispatch = useDispatch()

    const handleLogin = () => {
        dispatch(login(email, password))
            .then(() => {
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
                console.log('register successful')
                setPackage_detail(true)
                Cus_setDetailsPage(false)

            })
            .catch(() => {
                console.log(email)
                console.log(password)
                console.log("can not use same email twice")
                //can not use same email twice
                console.log('register unsuccessful')
            })
    }
    
  
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity  onPress={() => setDrive_login(false)} >
                    <AntDesign 
                        name="arrowleft" // panah
                        color="black"
                        size={30}
                        style= {{paddingTop: 10, paddingBottom: 20, paddingRight: 58, paddingLeft: 20}}
                    />
                </TouchableOpacity>
                <Text style={[styles.orderDetails, {marginLeft: 53, marginTop: 3}]}> Login </Text>
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
                    

                </View>
        
                <View style={styles.containerBottom3}>
                    <TouchableOpacity  style={styles.start}
                        
                        onPress={() => handleLogin()} >
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>

                </View>
                <View>
                    <Text>
                        Already have an account? <TouchableOpacity 
                        
                        onPress={() => {setDrive_login(false); Drive_setDetailsPage(true)}}>
                        <Text style={styles.small_word}> Sign in </Text>
                    </TouchableOpacity>
                    </Text>
                </View>
                    
                
            </View>            
        </View >
    
    )
}

/*

<TextInput
onChangeText={(text) => setEmail(text)}

style={styles.textInput}
placeholder='Email'
/>
<TextInput
onChangeText={(text) => setPassword(text)}
style={styles.textInput}
secureTextEntry
placeholder='Password'
/>
*/