import React, { useState, useEffect, useRef } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Dimensions, View, Text, TouchableOpacity } from 'react-native';
import * as Location from 'expo-location';

export default function MapScreen(props) {
    const [userPosition, setUserPosition] = useState(null);
    const mapRef = useRef(null);

    useEffect(() => {
        getUserPosition();

        // props.navigation.navigate('Create');
    }, []);

    useEffect(() => {
        if (userPosition && mapRef.current) {
            setTimeout(() => {
                mapRef.current.animateToRegion({
                    latitude: userPosition.latitude,
                    longitude: userPosition.longitude,
                    latitudeDelta: 0.006322,
                    longitudeDelta: 0.000621,
                }, 800);
            }, 100);
        }
    }, [userPosition, mapRef]);

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

    return (
        <View style={styles.mapStyle}>
            <MapView
                style={styles.mapStyle}
                provider="google"
                ref={mapRef}
                showsUserLocation={true}
                showsMyLocationButton={true}
            />
            {renderDeliveryInfo()}
        </View>
    )
}

function renderDeliveryInfo() {
    return (
        <View
            style={{
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

const styles = StyleSheet.create({
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
})