import { useGlobalSearchParams } from 'expo-router';
import { PaperProvider } from 'react-native-paper'
import { Stack } from 'expo-router';

export default function RootLayout() {
  const data = useGlobalSearchParams()
  return <PaperProvider>
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(drawer)" />
      <Stack.Screen name='[id]' options={{ title: `${data.name}` }} />
    </Stack>
  </PaperProvider>;
}
