import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // handle navigation from 1 screen to another screen
import { createStackNavigator } from '@react-navigation/stack'; //npm install @react-navigation/stack
import MapScreen from './screens/MapScreen3'; // import screens we will use
import { Feather } from '@expo/vector-icons';; // hamburger button left top corner on my MapScreen

const Stack = createStackNavigator();

function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MapScreen" /* Change the initialRouteName to the screen you want to view */ > 
          <Stack.Screen name="MapScreen" component={MapScreen} // will tell you that we have this screen with components name
            options={({ navigation }) => ({ // navigation is for connecting 1 screen to another
              headerLeftContainerStyle: {
                marginLeft: 20 // The spacing on the left side of the tab button icon
              },
              headerTitle: 'DAILYVER', 
              headerLeft: () => (
                <Feather name="list" size={20} color="black"
                  />
              )
            })} 
          />

          </Stack.Navigator>
      </NavigationContainer>
    );
}

export default App;
