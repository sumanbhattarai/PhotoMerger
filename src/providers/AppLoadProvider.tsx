import React, {createContext, ReactNode, useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';

import {getAppOpenedStatus, setAppOpenedStatus} from 'services/AsyncStorage';

interface IAppLoadContext {
  isAppFirstRun: boolean;
  updateAppFirstRun: () => Promise<void>;
}

const AppLoad = createContext<IAppLoadContext>({} as IAppLoadContext);

interface Props {
  children: ReactNode;
}

const AppLoadProvider = ({children}: Props) => {
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
    <AppLoad.Provider value={{isAppFirstRun, updateAppFirstRun}}>
      {children}
    </AppLoad.Provider>
  );
};

export default AppLoadProvider;
export {AppLoad};
