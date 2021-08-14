import React, { useState } from 'react'
import { View,Text } from 'react-native'
import styles from './styles';
import AuthMenu from '../authPage';
import Cus_AuthDetails from './Cus_details';
import Drive_AuthDetails from './Drive_details';



export default function AuthScreen(){
    const [authPage, setAuthPage] = useState(0);
    const [Cus_detailsPage, Cus_setDetailsPage] = useState(false)
    const [Drive_detailsPage, Drive_setDetailsPage] = useState(false)
    return(
        <View style = {{marginTop:30}}>

            {Cus_detailsPage ?
            
            <Cus_AuthDetails authPage={authPage} Cus_setDetailsPage={Cus_setDetailsPage}/>

            :

            Drive_detailsPage ?

            <Drive_AuthDetails authPage = {authPage} Drive_setdetailsPage={Drive_setDetailsPage}/>

            :

            <AuthMenu authPage={authPage} 
                      setAuthPage={setAuthPage} 
                      Drive_setdetailsPage={Drive_setDetailsPage}
                      Cus_setDetailsPage={Cus_setDetailsPage}
                      
                      />
        
            }       
        </View>
    )

}