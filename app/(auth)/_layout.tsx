import { Slot } from 'expo-router';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Auth_Layout = () => {
  return (
    <SafeAreaView>
      <Slot/>
    </SafeAreaView>
  );
};

export default Auth_Layout;
