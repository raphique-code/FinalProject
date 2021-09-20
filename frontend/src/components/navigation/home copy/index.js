import { useState } from 'react';
import PackageDetails from '../package_details';
import Logout from '../logout';
import React from 'react';
import { View, Text } from 'react-native';

//setPackage_detail={setPackage_detail} setHome={setHome}
export default function Home(){
      
    const [home, setHome] = useState(0);
    const [signOut, setSignOut] = useState(false)
    const [Drive_detailsPage, Drive_setDetailsPage] = useState(true)
    const [Package_details, setPackage_detail] = useState(true)
    const [cus_login, setCus_login] = useState(false)
    const [drive_login, setDrive_login] = useState(false)
    return(
        <View style = {{marginTop:30}}>
            <PackageDetails/>
            
       </View>
      
             


           

    )

}
