import { useRouter } from 'expo-router';
import { Button, View, Text } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to the App</Text>
      <Button title="Open WebView" onPress={() => router.push('/webview')} />
    </View>
  );
}
