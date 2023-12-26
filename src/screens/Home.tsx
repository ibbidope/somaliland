import {
  StyleSheet,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {WebView, WebViewNavigation} from 'react-native-webview';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Home() {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);

  const openDrawer = () => {
    navigation.openDrawer();
  };

  const replaceFooter = `
    var newFooter = document.createElement('footer');
    var newDiv = document.createElement('div');
    newDiv.style.height = '50px'; 
    newDiv.style.backgroundColor = '#FFFFFF';

    newFooter.appendChild(newDiv);

    var existingFooter = document.querySelector('.bg2'); 

    if (existingFooter) {
      existingFooter.parentNode.replaceChild(newFooter, existingFooter);
    }
    
    document.documentElement.style.webkitTouchCallout = 'none'; 
    document.documentElement.style.webkitUserSelect = 'none'; 
    document.body.style.userSelect = 'none'; 
  `;

  const handleLoad = (event: WebViewNavigation) => {
    // 'onLoad' event indicates the WebView content has started loading
    setIsLoading(true);
  };

  const handleLoadEnd = () => {
    // 'onLoadEnd' event indicates the WebView content has finished loading
    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      <WebView
        source={{
          uri: 'https://www.govsomaliland.online',
        }}
        injectedJavaScript={replaceFooter}
        showsVerticalScrollIndicator={false}
        overScrollMode="never"
        javaScriptEnabled={true}
        style={styles.webview}
        decelerationRate="normal"
        bounces={false}
        onLoad={() => handleLoad}
        onLoadEnd={handleLoadEnd}
      />
      {isLoading && (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#03A803" />
        </View>
      )}
      <TouchableOpacity style={styles.floatingButton} onPress={openDrawer}>
        <Icon name="menu" size={30} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  webview: {
    flex: 1,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 100,
    //right: 20,
    left: 20,
    backgroundColor: '#F7931E',
    borderRadius: 30,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  loader: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
});
