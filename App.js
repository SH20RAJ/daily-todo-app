import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <View style={styles.container}>
      <WebView source={{ uri: 'file:///android_asset/index.html' }} style={{ flex: 1 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
