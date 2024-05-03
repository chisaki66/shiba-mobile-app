import React, { useState } from 'react';
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Lists from './components/Lists';
import SubLists from './components/SubLists';

const Stack = createNativeStackNavigator();

const App = () => {
  const [title, setTitle] = useState('');
  const [lists, setLists] = useState([]);
  const [listNum, setListNum] = useState(0);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Lists"
      >
        <Stack.Screen name="Lists">
          {() => (
            <Lists
              lists={lists}
              title={title}
              setLists={setLists}
              setTitle={setTitle}
              setListNum={setListNum}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name="SubLists">
          {() => (
            <SubLists
              lists={lists}
              listNum={listNum}
              list={lists[listNum]}
              title={lists[listNum]?.title}
              setLists={setLists}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default registerRootComponent(App);
