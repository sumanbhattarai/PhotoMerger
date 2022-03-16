import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import RootNavigator from 'navigators/RootNavigator';
import AppLoadProvider from 'providers/AppLoadProvider';

const App = () => {
  return (
    <NavigationContainer>
      <AppLoadProvider>
        <RootNavigator />
      </AppLoadProvider>
    </NavigationContainer>
  );
};

export default App;
