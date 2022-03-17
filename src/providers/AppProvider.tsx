import React, {createContext, ReactNode, useEffect, useState} from 'react';
import {ImageSourcePropType} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import {getAppOpenedStatus, setAppOpenedStatus} from 'services/AsyncStorage';

type ImageIdentifier = 'front' | 'back' | number;

interface IAppLoadContext {
  isAppFirstRun: boolean;
  updateAppFirstRun: () => Promise<void>;
  updateImageConfig: (
    id: ImageIdentifier,
    changes: Partial<ImageConfig>,
  ) => void;
  getImageConfig: (id: ImageIdentifier) => ImageConfig;
}

interface ImageConfig {
  uri: string;
  angle: number;
  scale: number;
}

const initialImageConfig = {
  uri: '',
  angle: 0,
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
    id: ImageIdentifier,
    changes: Partial<ImageConfig>,
  ) => {
    if (id === 'front' || id === 1) {
      setFrontImageConfig({...frontImageConfig, ...changes});
    } else {
      setBackImageConfig({...backImageConfig, ...changes});
    }
  };

  const getImageConfig = (id: ImageIdentifier) => {
    if (id === 'front' || id === 1) {
      return frontImageConfig;
    } else {
      return backImageConfig;
    }
  };

  return (
    <AppContext.Provider
      value={{
        isAppFirstRun,
        updateAppFirstRun,
        updateImageConfig,
        getImageConfig,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
export {AppContext};
