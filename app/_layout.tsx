// _layout.tsx
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import './globals.css';

// IMPORTANT: Prevent the splash screen from auto-hiding immediately
// This should ideally be done right after imports at the top level
// if you want the splash screen to stay until fonts load.
// SplashScreen.preventAutoHideAsync(); // You might already have this in your main App.js/Root.js

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    'QuickSand-Bold': require('../assets/fonts/Quicksand-Bold.ttf'),
    'QuickSand-Medium': require('../assets/fonts/Quicksand-Medium.ttf'),
    'QuickSand-Regular': require('../assets/fonts/Quicksand-Regular.ttf'),
    'QuickSand-SemiBold': require('../assets/fonts/Quicksand-SemiBold.ttf'),
    'QuickSand-Light': require('../assets/fonts/Quicksand-Light.ttf'),
    // If SpaceMono is not needed/present, remove this line:
    // 'SpaceMono-Regular': require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    console.log('Font loading status:');
    console.log('  fontsLoaded:', fontsLoaded);
    console.log('  error:', error);

    if (error) {
      console.error('Critical Font Loading Error:', error);
      // If you're comfortable, you can throw here, but for debugging,
      // sometimes it's better to log and allow rendering for a moment.
      // throw error;
    }

    if (fontsLoaded) {
      console.log('Fonts successfully loaded! Hiding splash screen.');
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  // This is crucial: don't render anything until fonts are loaded OR there's an error
  if (!fontsLoaded && !error) {
    console.log(
      'Fonts not yet loaded, returning null (splash screen visible).'
    );
    return null;
  }

  // If fonts are loaded (or an error occurred), render your stack
  return <Stack screenOptions={{ headerShown: false }} />;
}
