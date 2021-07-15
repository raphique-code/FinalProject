// For MapScreen, i didnt use the tutorial from youtube. I combine Foodmate code https://github.com/Mcuicac/foodmate
// and use https://www.youtube.com/watch?v=diUDjNwZ8Lg&ab_channel=ByProgrammers for designing button.

// I started from making the MapScreen screen's
import React, { useState, useEffect, useRef } from 'react'; // import react native and built in functions
import MapView from 'react-native-maps'; 
import { StyleSheet, Dimensions, View, Text, TouchableOpacity } from 'react-native';
import * as Location from 'expo-location'; // used expo features to handle the location

export default function MapScreen(props) {
    const [userPosition, setUserPosition] = useState(null);
    const mapRef = useRef(null);

    useEffect(() => {
        getUserPosition();

    
    }, []);

    // the code below is to get and display the user location
    useEffect(() => {
        if (userPosition && mapRef.current) {
            setTimeout(() => {
                mapRef.current.animateToRegion({
                    latitude: userPosition.latitude,
                    longitude: userPosition.longitude,
                    latitudeDelta: 0.006322, // to set user's location on the screen (horizontal)
                    longitudeDelta: 0.000621, // (vertical)
                }, 800);
            }, 100);
        }
    }, [userPosition, mapRef]);
    
    // the code below is to ask users permission for retrieving their location
    async function getUserPosition() {
        try {
            await Location.requestPermissionsAsync(); 
            const position = await Location.getCurrentPositionAsync({}); 

            console.log({ position })
            setUserPosition({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            });
        }
        catch (e) {
            throw e;
        }
    }

    // the code below is to implement google map API
    // https://github.com/react-native-maps/react-native-maps (reference)
    return (
        <View style={styles.mapStyle}> 
            <MapView
                style={styles.mapStyle}
                provider="google"
                ref={mapRef}
                showsUserLocation={true}
                showsMyLocationButton={true}
            />
            {renderDeliveryInfo() /*call the renderDeliveryInfo function*/ }
        </View>
    )
}

// the code below is to make the create order button
function renderDeliveryInfo() {
    return (
        <View
            style={{
                // to set the main screen position for the button
                position: 'absolute',
                bottom: 100,
                left: 0,
                right: 0,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <View
                style={{
                    // to get the size of the button and set the button margin
                    width: Dimensions.get('window').width * 0.9,
                    paddingVertical: 30,
                    paddingHorizontal: 20,
                    borderRadius: 30,
                }}
            >

                {/* Buttons */}
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}
                >
                    <TouchableOpacity
                        style={{
                            flex: 1,
                            height: 50,
                            marginRight: 10,
                            backgroundColor: "#FC6D3F",
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 10
                        }}
                    >
                        <Text style={{ 
                            fontSize: 18, 
                            fontWeight: 'bold',
                            color: 'white'}}>Create Order</Text>
                    </TouchableOpacity>

                </View>

            </View>
        </View>
    )
}

// the code below is to set the style of the map (width and height of the map)
const styles = StyleSheet.create({
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
})