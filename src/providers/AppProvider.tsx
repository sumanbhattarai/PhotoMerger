import React, {
  createContext,
  ReactNode,
  useEffect,
  useState,
  useRef,
} from 'react';
import SplashScreen from 'react-native-splash-screen';

import {getAppOpenedStatus, setAppOpenedStatus} from 'services/AsyncStorage';

interface IAppLoadContext {
  isAppFirstRun: boolean;
  updateAppFirstRun: () => Promise<void>;
  updateImageConfig: (id: number, changes: Partial<ImageConfig>) => void;
  getImageConfig: (id: number) => ImageConfig;
  isBothImageSelected: boolean;
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
  const isBothImageSelected = useRef<boolean>(false);

  useEffect(() => {
    if (frontImageConfig.uri && backImageConfig.uri) {
      isBothImageSelected.current = true;
    }
  }, [frontImageConfig.uri, backImageConfig.uri]);

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

  const updateImageConfig = (id: number, changes: Partial<ImageConfig>) => {
    if (id === 1) {
      setFrontImageConfig({...frontImageConfig, ...changes});
    } else {
      setBackImageConfig({...backImageConfig, ...changes});
    }
  };

  const getImageConfig = (id: number) => {
    if (id === 1) {
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
        isBothImageSelected: isBothImageSelected.current,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
export {AppContext};
