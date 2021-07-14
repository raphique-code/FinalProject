import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; //npm install @react-navigation/stack
import MapScreen from './screens/MapScreen3';
import { Feather } from '@expo/vector-icons';;

const Stack = createStackNavigator();

function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MapScreen" /* Change the initialRouteName to the screen you want to view */> 
          <Stack.Screen name="MapScreen" component={MapScreen}
            options={({ navigation }) => ({
              headerLeftContainerStyle: {
                marginLeft: 20 /* The spacing on the left side of the tab button icon */
              },
              headerTitle: 'DAILYVER', /*The header title on top of the screen */
              headerLeft: () => (
                <Feather name="list" size={20} color="black"
                /* onPress={() =>
                  Write here the navigation code to show the side tab */
                  />
              )
            })} 
          />

          </Stack.Navigator>
      </NavigationContainer>
    );
}

export default App;
