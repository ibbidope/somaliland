import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Drawer} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import drawerData from '../dataset/DrawerData';

interface DrawerContentProps {
  navigation: any; // Replace 'any' with the appropriate navigation type
}

export function DrawerContent(props: DrawerContentProps) {
  const [selectedTab, setSelectedTab] = useState<string>('Home'); // State to track the selected tab

  const renderDrawerItem = (route: any) => {
    const isSelected = selectedTab === route.name;

    return (
      <DrawerItem
        icon={({color, size}) => (
          <Icon
            name="account-outline"
            color={isSelected ? '#fff' : '#000'}
            size={size}
          />
        )}
        label={route.name}
        onPress={() => {
          props.navigation.navigate('DrawerScreens', {
            uri: route.uri,
          });
          setSelectedTab(route.name);
        }}
        style={{backgroundColor: isSelected ? '#03A803' : 'transparent'}}
        labelStyle={{color: isSelected ? '#fff' : '#000'}}
      />
    );
  };

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon
                  name="home-outline"
                  color={selectedTab === 'Home' ? '#fff' : '#000'}
                  size={size}
                />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate('Home');
                setSelectedTab('Home');
              }}
              style={{
                backgroundColor:
                  selectedTab === 'Home' ? '#03A803' : 'transparent',
              }}
              labelStyle={{color: selectedTab === 'Home' ? '#fff' : '#000'}}
            />
          </Drawer.Section>

          {drawerData.map((section, index) => (
            <Drawer.Section
              key={index}
              style={styles.drawerSection}
              title={section.sectionTitle}>
              {section.routes.map((route, routeIndex) => (
                <React.Fragment key={routeIndex}>
                  {renderDrawerItem(route)}
                </React.Fragment>
              ))}
            </Drawer.Section>
          ))}
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon
              name="help-circle-outline"
              color={selectedTab === 'Contact' ? '#fff' : '#000'}
              size={size}
            />
          )}
          label="Contact"
          onPress={() => {
            props.navigation.navigate('Contact');
            setSelectedTab('Contact');
          }}
          style={{
            backgroundColor:
              selectedTab === 'Contact' ? '#00FF00' : 'transparent',
          }}
          labelStyle={{color: selectedTab === 'Contact' ? '#fff' : '#000'}}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
