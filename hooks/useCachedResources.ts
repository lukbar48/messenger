import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        await Font.loadAsync({
          ...FontAwesome.font,
          'poppins-bold': require('../assets/fonts/Poppins Bold 700.ttf'),
          'poppins-semibold': require('../assets/fonts/Poppins SemiBold 600.ttf'),
          'poppins-medium': require('../assets/fonts/Poppins Medium 500.ttf'),
          'poppins-regular': require('../assets/fonts/Poppins Regular 400.ttf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
