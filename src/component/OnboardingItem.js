import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {colors, normalize, normalizeHorizontal} from '../helper';
import {Onboarding} from './onboarding';
import FastImage from 'react-native-fast-image';

export default OnboardingItem = ({item}) => {
  const {width} = useWindowDimensions();
  return (
    <View style={[styles.container, {width}]}>
      <FastImage
        source={item.image}
        style={[styles.image, {width, resizeMode: 'contain'}]}
      />
      <View style = {styles.txt}>
        <Text style = {styles.txtTitle}>{item.title}</Text>
        <TouchableOpacity style = {styles.btnButton}>
          <Text style = {styles.txtTitle} >{item.button}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: normalize(300),
    alignSelf: 'center',
    marginTop: normalize(20),
    aspectRatio: 1,
    borderRadius: 20,
  },
  txt:{
    position: 'absolute',
    marginTop: normalize(150),
    marginLeft: normalizeHorizontal(60)
  },
  btnButton:{
    backgroundColor: colors.BUTTON,
    height: normalize(40),
    width: normalizeHorizontal(150),
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 12,
    marginTop: normalize(20)
  },
  txtTitle:{
    fontSize: normalize(16),
    fontWeight: '700',
    color: '#fff'
  }
});
