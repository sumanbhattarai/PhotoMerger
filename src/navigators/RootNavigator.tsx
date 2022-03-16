import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from 'screens/Home';
import Introduction from 'screens/Introduction';
import {RootStackParamList} from 'navigators/utils';
import {AppContext} from 'providers/AppProvider';

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const {isAppFirstRun} = useContext(AppContext);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isAppFirstRun && (
        <Stack.Screen name="Introduction" component={Introduction} />
      )}
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
