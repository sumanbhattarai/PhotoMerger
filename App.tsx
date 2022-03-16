import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import RootNavigator from 'navigators/RootNavigator';
import AppProvider from 'providers/AppProvider';

const App = () => {
  return (
    <NavigationContainer>
      <AppProvider>
        <RootNavigator />
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
