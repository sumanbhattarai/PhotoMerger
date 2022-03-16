import React, {createContext, ReactNode, useEffect, useState} from 'react';
import {ImageSourcePropType} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import {getAppOpenedStatus, setAppOpenedStatus} from 'services/AsyncStorage';

interface IAppLoadContext {
  isAppFirstRun: boolean;
  updateAppFirstRun: () => Promise<void>;
  updateImageConfig: (
    imageIdentifier: 'front' | 'back',
    changes: Partial<ImageConfig>,
  ) => void;
}

interface ImageConfig {
  uri: null | ImageSourcePropType;
  angle: number;
  scale: number;
}

const initialImageConfig = {
  uri: null,
  angle: 1,
  scale: 0.8,
};

const AppContext = createContext<IAppLoadContext>({} as IAppLoadContext);

interface Props {
  children: ReactNode;
}

const AppProvider = ({children}: Props) => {
  const [isAppFirstRun, setIsAppFirstRun] = useState<boolean>(true);
  const [frontImageConfig, setFrontImageConfig] =
    useState<ImageConfig>(initialImageConfig);
  const [backImageConfig, setBackImageConfig] =
    useState<ImageConfig>(initialImageConfig);

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

  const updateImageConfig = (
    imageIdentifier: 'front' | 'back',
    changes: Partial<ImageConfig>,
  ) => {
    if (imageIdentifier === 'front') {
      setFrontImageConfig({...frontImageConfig, ...changes});
    } else {
      setBackImageConfig({...backImageConfig, ...changes});
    }
  };

  return (
    <AppContext.Provider
      value={{isAppFirstRun, updateAppFirstRun, updateImageConfig}}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
export {AppContext};
