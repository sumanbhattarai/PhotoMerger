import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from 'screens/Home';
import Introduction from 'screens/Introduction';
import {RootStackParamList} from 'navigators/utils';

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Introduction" component={Introduction} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
