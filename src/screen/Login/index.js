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
  import React from 'react';
  import FastImage from 'react-native-fast-image';
  import {useNavigation} from '@react-navigation/native';
  
  import {colors, normalize, normalizeHorizontal} from '../../helper';
  import {
    IMG_LOGIN
  } from '../../assets';
export const Login = () => {
  return (
    <SafeAreaView style = {styles.container}>
      <View style = {styles.content}>
        <FastImage source={IMG_LOGIN} resizeMode ='contain' style = {styles.imgLogin} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content:{
        flex: 0.4
    },
    imgLogin:{
        height: normalize(300),
        aspectRatio: 1
    }
})