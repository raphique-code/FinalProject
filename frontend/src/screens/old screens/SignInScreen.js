import React from 'react';
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
import * as Animatable from 'react-native-animatable';
import {LinearGradient} from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

//import { useTheme } from 'react-native-paper';
import { colors,PageLogo } from '../components/styles';
import { AuthContext } from '../components/context';
import react from 'react';

//import {Users} from '../model/users';
export const Users = [
    {
        id: 1, 
        email: 'user1@email.com',
        username: 'user1', 
        password: 'password', 
        userToken: 'token123'
    },
    {
        id: 2, 
        email: 'user2@email.com',
        username: 'user2', 
        password: 'pass1234', 
        userToken: 'token12345'
    },
    {
        id: 3, 
        email: 'testuser@email.com',
        username: 'testuser', 
        password: 'testpass', 
        userToken: 'testtoken'
    },
];

const { primary, background, offWhite, darklight, green,primary_D,primary_DD } = colors;
const SignInScreen = ({navigation}) => {

    const [data,setData] = React.useState({

        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true
    });

    const textInputChange = (val) => {

        if( val.trim().length >= 4 ) {
            setData({  //used to update state
                ...data, // get current state
                email: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                email: val, 
                check_textInputChange: false, //asign changes
                isValidUser: false
            });
        }
    }

    const handleValidUser = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                isValidUser: false
            });
        }
    }

    const loginHandle = (username, password) => {

        const foundUser = Users.filter( item => {
            return username == item.username && password == item.password;
        } );

        if ( data.email.length == 0 || data.password.length == 0 ) {
            Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
                {text: 'Okay'}
            ]);
            return;
        }

        if ( foundUser.length == 0 ) {
            Alert.alert('Invalid User!', 'Username or password is incorrect.', [
                {text: 'Okay'}
            ]);
            return;
        }
        signIn(foundUser);
    }

    const handlePasswordChange = (val) => {
        if( val.trim().length >= 8 ) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }
    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

   
    return (
        <View style={styles.container}>
        <StatusBar backgroundColor='#B0602E' barStyle="light-content"/>
      <View style={styles.header}>
        <PageLogo resizeMode="contain" source={require('./../assets/logoV-full.png')} />  
      </View>
      <Animatable.View 
          animation="fadeInUpBig"
          style={[styles.footer, {
              backgroundColor: colors.offWhite
          }]}
      >
          <Text style={[styles.text_footer, {
              color: colors.text
          }]}>Username</Text>
          <View style={styles.action}>
              <FontAwesome 
                  name="user-o"
                  color={colors.text}
                  size={20}
              />
              <TextInput 
                  placeholder="Your Username"
                  placeholderTextColor="#666666"
                  style={[styles.textInput, {
                      color: colors.text
                  }]}
                  autoCapitalize="none"
                  onChangeText={(val) => textInputChange(val)}
                  onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
              />
              {data.check_textInputChange ? 
              <Animatable.View
                  animation="bounceIn"
              >
                  <Feather 
                      name="check-circle"
                      color="green"
                      size={20}
                  />
              </Animatable.View>
              : null}
          </View>
          { data.isValidUser ? null : 
          <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={styles.errorMsg}>Username must be 4 characters long.</Text>
          </Animatable.View>
          }
          

          <Text style={[styles.text_footer, {
              color: colors.text,
              marginTop: 35
          }]}>Password</Text>
          <View style={styles.action}>
              <Feather 
                  name="lock"
                  color={colors.text}
                  size={20}
              />
              <TextInput 
                  placeholder="Your Password"
                  placeholderTextColor="#666666"
                  secureTextEntry={data.secureTextEntry ? true : false}
                  style={[styles.textInput, {
                      color: colors.text
                  }]}
                  autoCapitalize="none"
                  onChangeText={(val) => handlePasswordChange(val)}
              />
              <TouchableOpacity
                  onPress={updateSecureTextEntry}
              >
                  {data.secureTextEntry ? 
                  <Feather 
                      name="eye-off"
                      color="grey"
                      size={20}
                  />
                  :
                  <Feather 
                      name="eye"
                      color="grey"
                      size={20}
                  />
                  }
              </TouchableOpacity>
          </View>
          { data.isValidPassword ? null : 
          <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
          </Animatable.View>
          }
          

          <TouchableOpacity>
              <Text style={{color: primary_DD, marginTop:15}}>Forgot password?</Text>
          </TouchableOpacity>
          <View style={styles.button}>
              <TouchableOpacity
                  style={styles.signIn}
                  onPress={() => navigation.navigate('PackageDetails2')}>
                    <LinearGradient
                        colors={[primary, primary_D]}
                        style={styles.signIn}
                    >
                        <Text style={[styles.textSign, {
                            color:'#fff'
                        }]}>Sign In</Text>
                    </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity
                  onPress={() => navigation.navigate('Signup')}
                  style={[styles.signIn, {
                      borderColor: primary_DD,
                      borderWidth: 1,
                      marginTop: 15
                  }]}
              >
                  <Text style={[styles.textSign, {
                      color: primary_DD
                  }]}>Sign Up</Text>
              </TouchableOpacity>
          </View>
      </Animatable.View>
    </View>
    );
};

export default SignInScreen;

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