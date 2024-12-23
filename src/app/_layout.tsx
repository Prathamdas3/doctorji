import { useGlobalSearchParams } from 'expo-router';
import { PaperProvider } from 'react-native-paper'
import { Stack } from 'expo-router';
import { Appearance } from 'react-native'
import { useEffect } from 'react';

export default function RootLayout() {
  const data = useGlobalSearchParams()
  useEffect(() => {
    Appearance.setColorScheme("light")
  }, [])

  return <PaperProvider>
    <Stack>
      <Stack.Screen name="(drawer)" options={{headerShown:false}}/>
      <Stack.Screen name='[id]' options={{ title: `${data.name}` }} />
    </Stack>
  </PaperProvider>;
}
