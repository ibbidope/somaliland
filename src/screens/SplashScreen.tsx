import React, {useEffect} from 'react';
import {
  StyleSheet,
  Image,
  ImageBackground,
  View,
  ActivityIndicator,
} from 'react-native';

interface SplashScreenProps {
  navigation: any;
}

const SplashScreen: React.FC<SplashScreenProps> = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('DrawerNavigator');
    }, 6000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <ImageBackground
      source={require('../assets/images/splash-background.png')}
      style={styles.container}>
      <Image
        source={require('../assets/images/logo-green.png')}
        style={styles.logo}
      />
      <View style={{marginTop: 6}}>
        <ActivityIndicator size="large" color="#03A803" />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: 350,
    height: 350,
    marginTop: '25%',
  },
});

export default SplashScreen;
