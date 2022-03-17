import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';

import RootNavigator from 'navigators/RootNavigator';
import AppProvider from 'providers/AppProvider';

const App = () => {
  return (
    <NavigationContainer>
      <AppProvider>
        <RootNavigator />
        <FlashMessage />
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
