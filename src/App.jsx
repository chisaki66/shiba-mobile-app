import React from 'react';
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Lists from './components/Lists';
import SubLists from './components/SubLists';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Lists"
      >
        <Stack.Screen name="Lists">{() => <Lists />}</Stack.Screen>

        <Stack.Screen name="SubLists">{() => <SubLists />}</Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default registerRootComponent(App);
