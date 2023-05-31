import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ChatApp from './src/ChatApp';
import { ThemeProvider } from '@rneui/themed';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style='dark' />
      <ThemeProvider >
        <GestureHandlerRootView style={{ flex: 1 }}>
          <ChatApp />
        </GestureHandlerRootView>
      </ThemeProvider>

    </SafeAreaProvider>
  );
}

