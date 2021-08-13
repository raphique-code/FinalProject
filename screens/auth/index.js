import React, { useState } from 'react'
import { View,Text } from 'react-native'

export default function AuthScreen(){
    const [authpage, setAuthPage] = useState(0);
    return(
        <View style = {{marginTop:30}}>
            <AuthMenu authpage={authpage} setAuthPage={setAuthPage}/>
        </View>
    )

}