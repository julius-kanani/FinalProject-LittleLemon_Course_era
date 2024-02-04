import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from './components/Welcome';
import Subscribe from './components/Subscribe';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          options={{
            title: 'Welcome',
            headerTitleAlign: 'center',
          }}          
          name="Welcome" component={Welcome} 
        />
        <Stack.Screen
          options={{
            title: 'Subscribe',
            headerTitleAlign: 'center',
          }}    
          name="Subscribe" component={Subscribe} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
