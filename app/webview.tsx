import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function WebViewScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{ uri: 'https://sawamahe-frontend.vercel.app' }} // replace with your web app UR
        javaScriptEnabled
        domStorageEnabled
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
