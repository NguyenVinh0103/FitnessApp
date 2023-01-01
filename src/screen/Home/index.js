import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors, normalize, normalizeHorizontal} from '../../helper';
import FastImage from 'react-native-fast-image';
import {IC_BACK, IC_AVATAR, IC_NOTIFICATION, IC_SEARCH} from '../../assets';
import {useNavigation} from '@react-navigation/native';
import {Onboarding} from '../../component';

export const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('Hello')}>
            <FastImage
              source={IC_BACK}
              resizeMode="contain"
              style={styles.icBack}
            />
          </TouchableOpacity>

          <View style={styles.headerRight}>
            <TouchableOpacity>
              <FastImage
                source={IC_NOTIFICATION}
                resizeMode="contain"
                style={styles.icNotification}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <FastImage
                source={IC_AVATAR}
                resizeMode="contain"
                style={styles.icAvatar}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.search}>
          <TextInput
            placeholderTextColor="#000"
            placeholder="What do you learn today?"
            style={styles.tipSearch}
          />
          <TouchableOpacity style = {styles.btnSearch}>
            <FastImage
                source={IC_SEARCH}
                resizeMode="contain"
                style={styles.icSearch}
            />
          </TouchableOpacity>
        </View>
        <Onboarding />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.TEXT,
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: normalizeHorizontal(20),
  },
  headerRight: {
    flexDirection: 'row',
  },
  icBack: {
    height: normalize(28),
    aspectRatio: 1,
  },
  icNotification: {
    height: normalize(28),
    aspectRatio: 1,
    marginRight: normalizeHorizontal(16),
  },
  icAvatar: {
    height: normalize(28),
    aspectRatio: 1,
  },
  search: {
    width: '90%',
    backgroundColor: '#EEF2F5',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: normalize(20),
    borderRadius: 8,
    aspectRatio: 8,
  },
  tipSearch: {
    backgroundColor: '#EEF2F5',
    height: normalize(30),
    paddingLeft: normalizeHorizontal(50),
  },
  btnSearch:{
    position: 'absolute',
    marginLeft: normalizeHorizontal(12)
  },
  icSearch: {
    height: normalize(30),
    aspectRatio: 1,
    
  },
});
