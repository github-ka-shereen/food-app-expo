// index.tsx
import { Text, View } from 'react-native';

export default function Index() {
  return (
    <View className='flex-1 items-center justify-center bg-white'>
      {/* Your Nativewind class usage (keep this for now) */}
      <Text className='text-4xl text-center font-quicksand-bold text-blue-500'>
        Welcome to Nativewind
      </Text>

      {/* ADD THIS NEW TEXT COMPONENT */}
      <Text
        style={{
          fontFamily: 'QuickSand-Bold',
          fontSize: 24,
          color: 'red',
          marginTop: 20,
        }}
      >
        This text uses direct style!
      </Text>

      {/* You can also try other weights directly if you want */}
      <Text
        style={{ fontFamily: 'QuickSand-Regular', fontSize: 20, color: 'blue' }}
      >
        Direct Style - Regular
      </Text>
    </View>
  );
}
