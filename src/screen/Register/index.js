import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {colors, height, normalize, normalizeHorizontal} from '../../helper';
import {IMG_LOGIN, IC_SHOWPASS,} from '../../assets';

export const Register = () => {
  const [checked, setChecked] = useState(false);
  const [isShowPassWord, setIsShowPassWord] = useState(false);

  const showPass = () => {
    setIsShowPassWord(!isShowPassWord);
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView extraHeight={150} style={styles.content}>
        <View>
          <FastImage
            source={IMG_LOGIN}
            resizeMode="cover"
            style={styles.imgLogin}
          />
          <Text style={styles.txtLogin}>{'Register'}</Text>
        </View>

        <View style={styles.form}>
          <View style={styles.txtFormEmail}>
            <Text style={styles.txtEmail}>{'Email'}</Text>
            <TextInput
              placeholder="Enter your email"
              placeholderTextColor="#707070"
              style={styles.tipEmail}
            />
            <View style={styles.borderEmail}></View>
          </View>
          <View style={styles.txtFormPhone}>
            <Text style={styles.txtPhone}>{'Phone'}</Text>
            <TextInput
              placeholder="Enter your Phone"
              placeholderTextColor="#707070"
              style={styles.tipPhone}
            />
            <View style={styles.borderPhone}></View>
          </View>
          <View style={styles.txtFormPassword}>
            <Text style={styles.txtPassword}>{'Password'}</Text>
            <View style={styles.flex}>
              <TextInput
                placeholder="Enter your password"
                placeholderTextColor="#707070"
                style={styles.tipPassword}
                secureTextEntry={isShowPassWord}
              />
              <TouchableOpacity onPress={showPass}>
                <FastImage
                  source={IC_SHOWPASS}
                  resizeMode="contain"
                  style={styles.icShowPassWord}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.borderPassword}></View>
          </View>

          <View style={styles.txtFormConfirmPassword}>
            <Text style={styles.txtConfirmPassword}>{'Confirm Password'}</Text>
            <View style={styles.flex}>
              <TextInput
                placeholder="Enter your password"
                placeholderTextColor="#707070"
                style={styles.tipConfirmPassword}
                secureTextEntry={isShowPassWord}
              />
              <TouchableOpacity onPress={showPass}>
                <FastImage
                  source={IC_SHOWPASS}
                  resizeMode="contain"
                  style={styles.icShowPassWord}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.borderConfirmPassword}></View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  imgLogin: {
    width: normalize(390),
    aspectRatio: 1,
    alignSelf: 'center',
  },
  txtLogin: {
    position: 'absolute',
    color: colors.TEXT,
    fontSize: normalize(48),
    lineHeight: normalize(60),
    fontWeight: '700',
    marginLeft: normalizeHorizontal(40),
    marginTop: normalize(180),
  },
  form: {
    flex: 0.6,
    backgroundColor: colors.TEXT,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  txtFormEmail: {
    marginLeft: normalizeHorizontal(40),
    marginTop: normalize(40),
  },
  txtEmail: {
    fontSize: normalize(18),
    lineHeight: normalize(22),
    fontWeight: '700',
  },
  tipEmail: {
    marginTop: normalize(20),
    fontSize: normalize(16),
  },
  borderEmail: {
    width: '90%',
    borderColor: '#707070',
    borderWidth: 1,
    marginTop: normalize(10),
  },
  txtFormPassword: {
    marginLeft: normalizeHorizontal(40),
    marginTop: normalize(40),
  },
  txtPassword: {
    fontSize: normalize(18),
    lineHeight: normalize(22),
    fontWeight: '700',
  },
  tipPassword: {
    marginTop: normalize(20),
    fontSize: normalize(16),
  },
  borderPassword: {
    width: '90%',
    borderColor: '#707070',
    borderWidth: 1,
    marginTop: normalize(10),
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icShowPassWord: {
    height: normalize(20),
    aspectRatio: 1,
    marginTop: normalize(20),
    marginRight: normalizeHorizontal(40),
  },
  txtFormPhone: {
    marginLeft: normalizeHorizontal(40),
    marginTop: normalize(40),
  },
  txtPhone: {
    fontSize: normalize(18),
    lineHeight: normalize(22),
    fontWeight: '700',
  },
  tipPhone: {
    marginTop: normalize(20),
    fontSize: normalize(16),
  },
  borderPhone: {
    width: '90%',
    borderColor: '#707070',
    borderWidth: 1,
    marginTop: normalize(10),
  },
  txtFormConfirmPassword: {
    marginLeft: normalizeHorizontal(40),
    marginTop: normalize(40),
  },
  txtConfirmPassword: {
    fontSize: normalize(18),
    lineHeight: normalize(22),
    fontWeight: '700',
  },
  tipConfirmPassword: {
    marginTop: normalize(20),
    fontSize: normalize(16),
  },
  borderConfirmPassword: {
    width: '90%',
    borderColor: '#707070',
    borderWidth: 1,
    marginTop: normalize(10),
  },
});
