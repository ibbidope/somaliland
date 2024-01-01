import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {WebView, WebViewNavigation} from 'react-native-webview';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Login() {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

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

  const handleLoad = () => {
    setIsLoading(true);
    setError(false);
  };

  const handleLoadEnd = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setError(true);
  };

  return (
    <View style={styles.container}>
      {!error ? (
        <WebView
          source={{
            uri: 'https://www.govsomaliland.online/user/signin/?apple=1',
          }}
          injectedJavaScript={replaceFooter}
          showsVerticalScrollIndicator={false}
          overScrollMode="never"
          javaScriptEnabled={true}
          style={styles.webview}
          decelerationRate="normal"
          bounces={false}
          onLoad={handleLoad}
          onLoadEnd={handleLoadEnd}
          onError={handleError}
        />
      ) : (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>
            There was an error loading the content. Please check your internet
            connection and try again.
          </Text>
        </View>
      )}
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
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 16,
    textAlign: 'center',
  },
});
