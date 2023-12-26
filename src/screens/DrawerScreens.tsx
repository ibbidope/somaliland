import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {WebView} from 'react-native-webview';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

interface ScreenProps {
  uri: string;
}

export default function DrawerScreens({uri}: ScreenProps) {
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
    
    document.documentElement.style.webkitTouchCallout = 'none'; 
    document.documentElement.style.webkitUserSelect = 'none'; 
    document.body.style.userSelect = 'none'; 
  `;

  return (
    <View style={styles.container}>
      <WebView
        source={{uri}}
        injectedJavaScript={replaceFooter}
        showsVerticalScrollIndicator={false}
        overScrollMode="never"
      />
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
  floatingButton: {
    position: 'absolute',
    bottom: 60,
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
});
