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
import CheckBox from '@react-native-community/checkbox';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {colors, height, normalize, normalizeHorizontal} from '../../helper';
import {IMG_LOGIN, IC_SHOWPASS, IC_EMAIL, IC_FACEBOOK} from '../../assets';
import {loginHook} from './hook';
import { ActivityIndicator } from 'react-native-paper';

export const Login = () => {
  const navigation = useNavigation();
  const [checked, setChecked] = useState(false);
  const [isShowPassWord, setIsShowPassWord] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('cityslicka');

  const showPass = () => {
    setIsShowPassWord(!isShowPassWord);
  };

  const onLogin = async () => {
    
		setIsLoading(true);
		const params = {
			username: email,
			password: password,
		}
		const response = await getUserAction.onGetUser(params, dispatch)
    console.log(response, 'response saga') //abc
		const { statusCode, data } = response
		if (data != "") {
			navigation.navigate('Register')
      console.log('login success')
		}
		setIsLoading(false);
	}

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <FastImage
          source={IMG_LOGIN}
          resizeMode= 'cover'
          style={styles.imgLogin}
        />
        <Text style={styles.txtLogin}>{'Login'}</Text>
      </View>
      <View style={styles.form}>
        <View style={styles.txtFormEmail}>
          <Text style={styles.txtEmail}>{'Email'}</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            placeholderTextColor="#707070"
            style={styles.tipEmail}
          />
          <View style={styles.borderEmail}></View>
        </View>
        <View style={styles.txtFormPassword}>
          <Text style={styles.txtPassword}>{'Password'}</Text>
          <View style={styles.flex}>
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Enter your password"
              placeholderTextColor="#707070"
              style={styles.tipPassword}
              secureTextEntry = {isShowPassWord}
            />
            <TouchableOpacity onPress={showPass} >
              <FastImage
                source={IC_SHOWPASS}
                resizeMode="contain"
                style={styles.icShowPassWord}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.borderPassword}></View>
        </View>
        <View style={styles.check}>
          <View style={styles.flexCheck}>
            <CheckBox
              disabled={false}
              value={checked}
              onValueChange={() => setChecked(!checked)}
              onCheckColor="red"
              tintColor="#707070"
              onTintColor="green"
              style={styles.checkBox}
            />
            <Text style={styles.txtCheckBox}>{'Stay logged in?'}</Text>
          </View>

          <Text style={styles.txtForgot}>{'Forgot Password?'}</Text>
        </View>
        <TouchableOpacity onPress={onLogin} style={styles.btnLogin}>
          {isLoading ? <ActivityIndicator /> : <Text style={styles.login}>{'Login'}</Text>}
        </TouchableOpacity>
        <TouchableOpacity style = {styles.txt}>
          <Text style={styles.txtAccount}>
            {'Don’t have an account yet ? '}
            <Text style={styles.txtRegister}>{'Register here'}</Text>
          </Text>
        </TouchableOpacity>
        <View style = {styles.flexIcon}>
          <TouchableOpacity style = {styles.btnEmail}>
            <FastImage source={IC_EMAIL} resizeMode = 'contain' style = {styles.icEmail} />
          </TouchableOpacity>

          <TouchableOpacity style = {styles.btnFaceBook}>
            <FastImage source={IC_FACEBOOK} resizeMode = 'contain' style = {styles.icFaceBook} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 0.4,
  },
  imgLogin: {
    width: normalize(390),
    aspectRatio: 1,
    alignSelf: 'center'
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
  check: {
    flexDirection: 'row',
    marginTop: normalize(20),
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: normalizeHorizontal(40),
  },
  flexCheck: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtCheckBox: {
    fontSize: normalize(14),
    lineHeight: normalize(22),
    fontWeight: '500',
    color: '#707070',
    marginLeft: normalizeHorizontal(10),
  },
  txtForgot: {
    fontSize: normalize(14),
    lineHeight: normalize(22),
    fontWeight: '500',
    color: '#707070',
    marginLeft: normalizeHorizontal(10),
  },
  btnLogin: {
    backgroundColor: '#F9A826',
    width: normalize(250),
    height: normalize(50),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: normalize(20),
  },
  login: {
    fontSize: normalize(18),
    lineHeight: normalize(22),
    color: colors.TEXT,
    fontWeight: '700',
    letterSpacing: 1,
  },
  txt: {
    marginTop: normalize(20),
    alignSelf:'center'
  },
  txtAccount:{
    fontSize: normalize(14),
    fontWeight: '500',
    lineHeight: normalize(16),
    color: '#000'
  },
  txtRegister:{
    fontSize: normalize(14),
    fontWeight: '700',
    lineHeight: normalize(16),
    color: '#F9A826'
  },
  flexIcon:{
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: normalize(20)
  },
  icEmail:{
    height: normalize(40),
    aspectRatio: 1,
  },
  icFaceBook: {
    height: normalize(40),
    aspectRatio: 1,
  },
  btnEmail:{
    backgroundColor: '#96be25',
    justifyContent:'center',
    alignItems:'center',
    marginHorizontal: normalizeHorizontal(20),
    borderRadius: 100 / 2,
    height: normalize(50),
    aspectRatio: 1
  },
  btnFaceBook: {
    backgroundColor: '#96be25',
    justifyContent:'center',
    alignItems:'center',
    marginHorizontal: normalizeHorizontal(20),
    borderRadius: 100 / 2,
    height: normalize(50),
    aspectRatio: 1
  }
});
