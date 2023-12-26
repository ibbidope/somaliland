import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {WebView} from 'react-native-webview';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Login() {
  const navigation = useNavigation();

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
    
    document.documentElement.style.webkitTouchCallout = 'none'; // Disable long press on iOS
    document.documentElement.style.webkitUserSelect = 'none'; // Disable text selection on iOS
    document.body.style.userSelect = 'none'; // Disable text selection on Android
  `;

  return (
    <View style={styles.container}>
      <WebView
        source={{
          uri: 'https://www.govsomaliland.online/user/signin',
        }}
        injectedJavaScript={replaceFooter}
        showsVerticalScrollIndicator={false}
        overScrollMode="never"
        javaScriptEnabled={true} // Enable JavaScript
        style={styles.webview}
      />
      <TouchableOpacity style={styles.floatingButton} onPress={openDrawer}>
        <Icon name="menu" size={35} color="#FFF" />
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
    right: 20,
    backgroundColor: '#F7931E',
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
