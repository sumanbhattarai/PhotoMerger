import React, {createContext, ReactNode, useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';

import {getAppOpenedStatus, setAppOpenedStatus} from 'services/AsyncStorage';

interface IAppLoadContext {
  isAppFirstRun: boolean;
  updateAppFirstRun: () => Promise<void>;
}

const AppContext = createContext<IAppLoadContext>({} as IAppLoadContext);

interface Props {
  children: ReactNode;
}

const AppProvider = ({children}: Props) => {
  const [isAppFirstRun, setIsAppFirstRun] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      const status: boolean = await getAppOpenedStatus();
      setIsAppFirstRun(status);
    })().then(() => SplashScreen.hide());
  }, []);

  const updateAppFirstRun = async () => {
    await setAppOpenedStatus();
    setIsAppFirstRun(false);
  };

  return (
    <AppContext.Provider value={{isAppFirstRun, updateAppFirstRun}}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
export {AppContext};
