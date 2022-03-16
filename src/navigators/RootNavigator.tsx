import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from 'screens/Home';
import Introduction from 'screens/Introduction';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Introduction" component={Introduction} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
