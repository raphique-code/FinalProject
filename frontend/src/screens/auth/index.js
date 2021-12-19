import React, { useState } from 'react'
import { View,Text } from 'react-native'
import styles from './styles';

import AuthMenu from '../../components/auth/menu';
import Cus_AuthDetails from '../../components/auth/Cus_details';
import Drive_AuthDetails from '../../components/auth/Drive_details';


//import AuthMen from '../../components/auth/test';
import PackageDetails from '../../components/navigation/package_details';
import Cus_login from '../../components/auth/cus_login';
import Drive_login from '../../components/auth/Drive_login';



export default function AuthScreen(){
    const [authPage, setAuthPage] = useState(0);
    const [Cus_detailsPage, Cus_setDetailsPage] = useState(false)
    const [Drive_detailsPage, Drive_setDetailsPage] = useState(false)
    const [Package_details, setPackage_detail] = useState(false)
    const [cus_login, setCus_login] = useState(false)
    const [drive_login, setDrive_login] = useState(false)
    return(
        <View style = {{marginTop:0}}>

            

            {Drive_detailsPage?
            
            <Drive_AuthDetails authPage = {authPage} Drive_setDetailsPage={Drive_setDetailsPage} setDrive_login={setDrive_login}/>

            :
 
            Cus_detailsPage?

            <Cus_AuthDetails authPage={authPage} Cus_setDetailsPage={Cus_setDetailsPage} setCus_login={setCus_login}/>

            :

            cus_login?

            <Cus_login  authPage={authPage} Cus_setDetailsPage={Cus_setDetailsPage} setCus_login={setCus_login}/>

            :

            drive_login?

            <Drive_login  authPage={authPage} Drive_setDetailsPage={Drive_setDetailsPage} setDrive_login={setDrive_login}/>

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