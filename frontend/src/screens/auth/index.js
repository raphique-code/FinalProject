import React, { useState } from 'react'
import { View,Text } from 'react-native'
import styles from './styles';
import AuthMenu from '../../components/auth/menu';
import Cus_AuthDetails from '../../components/auth/Cus_details';
import Drive_AuthDetails from '../../components/auth/Drive_details';



export default function AuthScreen(){
    const [authPage, setAuthPage] = useState(0);
    const [Cus_detailsPage, Cus_setDetailsPage] = useState(false)
    const [Drive_detailsPage, Drive_setDetailsPage] = useState(false)
    return(
        <View style = {{marginTop:30}}>

            {Drive_detailsPage?
            
            <Drive_AuthDetails authPage = {authPage} Drive_setDetailsPage={Drive_setDetailsPage}/>

            :

            Cus_detailsPage?

            <Cus_AuthDetails authPage={authPage} Cus_setDetailsPage={Cus_setDetailsPage}/>

            :

            <AuthMenu authPage={authPage} 
                      setAuthPage={setAuthPage} 
                      Drive_setDetailsPage={Drive_setDetailsPage}
                      Cus_setDetailsPage={Cus_setDetailsPage}
                      
                      />
        
            }       

        </View>
    )

}