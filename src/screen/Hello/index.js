import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';

import {colors, normalize} from '../../helper';
import {IMG_BACKGROUND} from '../../assets';

export const Hello = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <FastImage
          source={IMG_BACKGROUND}
          resizeMode="contain"
          style={styles.background}
        />
      </View>

      <View style={styles.txt}>
        <Text style={styles.txtContainer}>{'Meet Our Expert Instructors'}</Text>
        <Text style={styles.txtContent}>
          {
            'Learn with fitness experts, at your own pace, and 100% updated content'
          }
        </Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.btnStart}>
        <Text style={styles.txtButton}>{'Get Start'}</Text>
      </TouchableOpacity>
      <View style = {styles.txtBottom}>
        <Text style={styles.txtAccount}>
          {'Already have account ? '}
          <Text style={styles.txtSignIn}>{'Sign In'}</Text>
        </Text>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BACKGROUND,
    alignSelf: 'center',
  },
  background: {
    width: normalize(650),
    aspectRatio: 1,
  },
  txt: {
    position: 'absolute',
    bottom: 0,
    marginBottom: normalize(150),
    alignSelf: 'center',
    width: normalize(250),
  },
  txtContainer: {
    color: colors.TEXT,
    textAlign: 'center',
    fontSize: normalize(24),
    fontWeight: '700',
    lineHeight: normalize(32),
    letterSpacing: 1,
  },
  txtContent: {
    color: colors.TEXT,
    textAlign: 'center',
    fontSize: normalize(16),
    fontWeight: '500',
    lineHeight: 22,
    opacity: 0.7,
    marginTop: normalize(20),
  },
  btnStart: {
    backgroundColor: colors.BUTTON,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: normalize(232),
    height: normalize(50),
    borderRadius: 30,
    marginTop: normalize(40),
  },
  txtButton: {
    color: colors.TEXT,
    fontSize: normalize(16),
    fontWeight: '900',
    letterSpacing: 1,
    lineHeight: normalize(22),
  },
  txtBottom:{
    position: 'absolute',
    bottom : 0,
    alignSelf: 'center',
    marginBottom: normalize(50)
  },
  txtAccount:{
    color: colors.TEXT,
    fontSize: normalize(16),
    letterSpacing: 1,
    lineHeight: normalize(22),
    fontWeight: '500',
  },
  txtSignIn:{
    color: colors.BUTTON,
    fontSize: normalize(16),
    letterSpacing: 1,
    lineHeight: normalize(22),
    fontWeight: '700',
  }
});
