import React, { useRef }  from 'react';
import WebView from 'react-native-webview-bootpay';

import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity
} from 'react-native'; 



export default function App() {
  
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{
          uri: 'https://dev-js.bootapi.com/test/payment/',
        }}
        startInLoadingState={true}
        scalesPageToFit={true}
        style={styles.webview}
      /> 
    </SafeAreaView>
  );
}


const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  webview: {
      width: deviceWidth,
      height: deviceHeight
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    margin: 10,
  },
}); 
 

 