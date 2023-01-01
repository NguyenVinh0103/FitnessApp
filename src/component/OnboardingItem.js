import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  useWindowDimensions,
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: normalize(270),
    alignSelf: 'center',
    marginTop: normalize(20),
    aspectRatio: 1,
    borderRadius: 20,
  },
});
