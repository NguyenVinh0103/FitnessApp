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
import {Rating, AirbnbRating} from 'react-native-ratings';

import {colors, normalize, normalizeHorizontal} from '../../helper';
import {
  IC_BACK,
  IC_AVATAR,
  IC_NOTIFICATION,
  IC_SEARCH,
  IMG_ITEM1,
  IMG_ITEM2,
  IMG_SLIDE,
  IC_TIME,
  IMG_BOTTOM,
} from '../../assets';
import {Onboarding} from '../../component';

const Product = [
  {
    id: 1,
    image: IMG_ITEM1,
    title: 'Fitness',
    content: 'Personal Trainer',
    ratingCount: 1,
    rating: 4.9,
    icon: IC_TIME,
    timer: '5h 30m',
  },
  {
    id: 2,
    image: IMG_SLIDE,
    title: 'Nutrition',
    content: 'Sport Nutrition',
    ratingCount: 1,
    rating: 5,
    icon: IC_TIME,
    timer: '5h 30m',
  },
];

const renderItem = ({item}) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity style={styles.img}>
        <FastImage
          source={item.image}
          resizeMode="contain"
          style={styles.imgItem}
        />
      </TouchableOpacity>
      <View style={styles.txt}>
        <Text style={styles.txtItemTitle}>{item.title}</Text>
        <Text style={styles.txtItemContent}>{item.content}</Text>
      </View>
      <View style={styles.rate}>
        <Rating
          type="star"
          ratingCount={item.ratingCount}
          imageSize={20}
          style={styles.rating}
        />
        <Text style={styles.txtRating}>{item.rating}</Text>
        <FastImage
          source={item.icon}
          resizeMode="contain"
          style={styles.icTime}
        />
        <Text style={styles.txtTime}>{item.timer}</Text>
      </View>
    </View>
  );
};

export const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
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
            <TouchableOpacity style={styles.btnSearch}>
              <FastImage
                source={IC_SEARCH}
                resizeMode="contain"
                style={styles.icSearch}
              />
            </TouchableOpacity>
          </View>
          <Onboarding />
          <View style={styles.title}>
            <Text style={styles.txtTitle}>{'Trending courses'}</Text>
            <Text style={styles.txtSeeAll}>{'See All'}</Text>
          </View>
          <View>
            <FlatList
              data={Product}
              keyExtractor={item => `${item.id}`}
              renderItem={renderItem}
              contentContainerStyle={styles.flatList}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <FastImage
            source={IMG_BOTTOM}
            resizeMode="contain"
            style={styles.imgBottom}
          />
        </View>
      </ScrollView>
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
  btnSearch: {
    position: 'absolute',
    marginLeft: normalizeHorizontal(12),
  },
  icSearch: {
    height: normalize(30),
    aspectRatio: 1,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: normalizeHorizontal(20),
  },
  txtTitle: {
    fontWeight: '700',
    fontSize: normalize(16),
    lineHeight: normalize(22),
    letterSpacing: 0.2,
  },
  txtSeeAll: {
    fontWeight: '700',
    fontSize: normalize(16),
    lineHeight: normalize(22),
    letterSpacing: 0.2,
    color: colors.BUTTON,
  },
  imgItem: {
    width: 270,
    height: 140,
    borderRadius: 20,
  },
  item: {
    margin: normalize(10),
    backgroundColor: '#fff',
    borderRadius: 20,
  },
  txt: {
    marginHorizontal: normalizeHorizontal(12),
    marginTop: normalize(8),
  },
  txtItemTitle: {
    color: '#9CA3AF',
    fontSize: normalize(12),
    fontWeight: '500',
    lineHeight: normalize(16),
    letterSpacing: 0.2,
  },
  txtItemContent: {
    fontSize: normalize(16),
    fontWeight: '700',
    lineHeight: normalize(22),
    letterSpacing: 0.2,
    color: '#1F2E45',
  },
  rate: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: normalizeHorizontal(10),
    marginTop: normalize(4),
  },
  rating: {
    height: normalize(20),
    aspectRatio: 1,
  },
  txtRating: {
    color: '#9CA3AF',
    fontSize: normalize(14),
    fontWeight: '400',
    marginLeft: normalizeHorizontal(10),
  },
  icTime: {
    height: normalize(20),
    aspectRatio: 1,
    marginLeft: normalizeHorizontal(20),
  },
  txtTime: {
    color: '#9CA3AF',
    fontSize: normalize(14),
    fontWeight: '400',
    marginLeft: normalizeHorizontal(8),
  },
  imgBottom: {
    height: normalize(80),
    aspectRatio: 4,
    alignSelf: 'center',
  },
});
