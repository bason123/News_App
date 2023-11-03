import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  useWindowDimensions
} from 'react-native';
import React, { useEffect, useState } from 'react';
import {
  COLORS,
  FONTFAMILY,
  FONTSTYLE,
  FONTWEIGHT,
} from '../../../constants/theme';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import NewsDetailScreen from './NewsDetailScreen';
import RecentDetailScreen from './RecentDetailScreen';

const renderScene = SceneMap({
  News : NewsDetailScreen,
  Recent: RecentDetailScreen,
});

const Profile = props => {
  const navigation = props.navigation;
  const layout = useWindowDimensions();

  
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'News', title: 'news' },
    { key: 'Recent', title: 'recent' },
  ])

  const renderItemProfile = val => {
    const {id, image, title, subtitle} = val.item;
    return (
      <TouchableOpacity
        onPress={() => {
          //   navigation.navigate('DetailScreen');
        }}>
        <View style={styles.viewItemBody}>
          <Image
            style={{
              width: 96,
              height: 96,
              borderRadius: 6,
            }}
            source={{uri: image}}
          />
          <View
            style={{
              marginStart: 4,
              width: '70%',
              justifyContent: 'space-between',
            }}>
            <View style={styles.viewItemEurope}>
              <Text style={[styles.title, styles.textEurope]}>{title}</Text>
              <Text
                numberOfLines={2}
                style={[styles.title, styles.textRussian]}>
                {subtitle}
              </Text>
            </View>
            <View style={styles.viewContainerLogoBBC}>
              <View style={styles.viewBBC}>
                <Image
                  style={{width: 20, height: 20}}
                  source={require('../../../assets/LogoBBC.png')}
                />
                <Text style={[styles.title, styles.textBBC]}>BBC News</Text>
              </View>
              <View style={styles.viewTime}>
                <Image
                  style={{width: 14, height: 14}}
                  source={require('../../../assets/Iconclock.png')}
                />
                <Text style={[styles.title, styles.textTime]}>14m ago</Text>
              </View>
              <View style={styles.viewIcon3dots}>
                <Image
                  style={{width: 14, height: 14}}
                  source={require('../../../assets/Icon3dots.png')}
                />
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.backgroudContainer}>
      <View style={styles.container}>
        <View style={styles.viewProfile}>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.textProfile}>Profile</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ProfileSettings');
            }}>
            <Image source={require('../../../assets/SettingIcon.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.viewPersonImage}>
          <Image source={require('../../../assets/PersonImage.png')} />
          <View style={styles.viewFolloed}>
            <View style={styles.viewFollowers}>
              <Text style={[styles.title, styles.text2156]}>2156</Text>
              <Text style={[styles.title, styles.textFollwers]}>Followers</Text>
            </View>
            <View style={styles.viewFollowers}>
              <Text style={[styles.title, styles.text2156]}>567</Text>
              <Text style={[styles.title, styles.textFollwers]}>Following</Text>
            </View>
            <View style={styles.viewFollowers}>
              <Text style={[styles.title, styles.text2156]}>23</Text>
              <Text style={[styles.title, styles.textFollwers]}>News</Text>
            </View>
          </View>
        </View>
        <View style={styles.viewWilson}>
          <Text style={[styles.title, styles.text2156]}>Wilson Franci</Text>
          <Text style={[styles.title, styles.textFollwers]}>
            Lorem Ipsum is simply dummy text of the {'\n'}printing and
            typesetting industry.
          </Text>
        </View>
        <View style={styles.viewtouchaleOpacityEdit}>
          <TouchableOpacity onPress={()=>{navigation.navigate('EditProfile')}}
           style={[styles.touchableOpacityEdit]}>
            <Text style={[styles.title, styles.textEdit]}>Edit profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.touchableOpacityEdit]}>
            <Text style={[styles.title, styles.textEdit]}>Website</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewCategory}>
          {/* <Text style={[styles.title, styles.textNews]}>News</Text>
          <Text style={[styles.title, styles.textNews, {marginStart: 24}]}>
            Recent
          </Text> */}
          <TouchableOpacity onPress={() => {
            setIndex(0)
          }}>
            <Text style={[(index == 0) ? styles.tabLabel_focus : styles.tabLabel_, { fontSize: 16, fontWeight: '400', lineHeight: 22 } ]}>News</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            setIndex(1)
          }}>
            <Text style={[(index == 1) ? styles.tabLabel_focus : styles.tabLabel_, { fontSize: 16, fontWeight: '400', lineHeight: 22 } , { marginStart: 24 }]}>
              Recent
            </Text>
            </TouchableOpacity>
        </View>
        <TabView
              style={{backgroundColor:'white'}}
              navigationState={{ index, routes }}
              renderScene={renderScene}
              onIndexChange={setIndex}
              initialLayout={{ width: layout.width }}
              renderTabBar={(props) => (
                <TabBar
      {...props}
      style={styles.tabBar}         // Apply styles to the TabBar component
      labelStyle={styles.labelStyle} // Apply styles to the tab labels
    />
              )}
            />
        {/* <FlatList
          data={DataItemProfile}
          renderItem={renderItemProfile}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        /> */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('DetailScreenNewArticles');
          }}>
          <View style={styles.viewImageFloating}>
            <Image source={require('../../../assets/FloatingButton.png')} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  tabView: {
    flex: 1,
    backgroundColor: 'red',   // Set the background color of the TabView
  },
  tabBar: {
    backgroundColor: 'white',    // Set the background color of the TabBar
    borderBottomColor: 'blue',   // Set the borderBottom color of the TabBar
    borderBottomWidth: 2
  },
  labelStyle: {
    color: '#000',             // Set the text color of the tab labels
    
  },
  viewImageFloating: {
    position: 'absolute',
    right: 0,
    bottom: 27,
  },
  textRussian: {
    fontSize: 16,
    fontWeight: FONTWEIGHT.four_hundred,
    lineHeight: 24,
    color: '#000',
  },
  textEurope: {
    fontSize: 13,
    fontWeight: FONTWEIGHT.four_hundred,
    lineHeight: 19.5,
    color: '#4E4B66',
  },
  textTime: {
    fontSize: 13,
    fontWeight: FONTWEIGHT.four_hundred,
    lineHeight: 19.5,
    color: '#4E4B66',
    marginStart: 4,
  },
  textBBC: {
    marginStart: 4,
    fontWeight: FONTWEIGHT.six_hundred,
    fontSize: 13,
    lineHeight: 19.5,
    color: '#4E4B66',
  },
  viewIcon3dots: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  viewTime: {
    flexDirection: 'row',
    alignItems: 'center',
    marginStart: 12,
  },
  viewBBC: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewContainerLogoBBC: {
    flexDirection: 'row',
    marginTop: 4,
  },
  viewItemBody: {
    flexDirection: 'row',
    padding: 8,
    marginTop: 16,
  },
  textBookmark: {
    fontSize: 32,
    fontWeight: FONTWEIGHT.seven_hundred,
    lineHeight: 48,
    color: COLORS.title,
  },
  textNews: {
    fontSize: 16,
    fontWeight: FONTWEIGHT.four_hundred,
    lineHeight: 24,
    color: COLORS.subtitle,
  },
  viewCategory: {
    marginTop: 13,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textEdit: {
    fontSize: 16,
    fontWeight: FONTWEIGHT.six_hundred,
    lineHeight: 24,
    color: COLORS.white,
  },
  touchableOpacityEdit: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    backgroundColor: COLORS.primary,
    borderRadius: 6,
    paddingHorizontal: 24,
    paddingVertical: 13,
    width: '47%',
    alignItems: 'center',
  },
  viewtouchaleOpacityEdit: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewWilson: {
    marginTop: 16,
  },
  textFollwers: {
    fontSize: 16,
    fontWeight: FONTWEIGHT.four_hundred,
    lineHeight: 24,
    color: COLORS.subtitle,
  },
  text2156: {
    fontSize: 16,
    fontWeight: FONTWEIGHT.six_hundred,
    lineHeight: 24,
    color: COLORS.title,
  },
  viewFollowers: {
    alignItems: 'center',
  },
  viewFolloed: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginStart: 16,
    justifyContent: 'space-between',
  },
  viewPersonImage: {
    flexDirection: 'row',
    marginTop: 13,
  },
  textProfile: {
    fontSize: 16,
    fontWeight: FONTWEIGHT.four_hundred,
    lineHeight: 24,
    color: COLORS.title,
  },
  title: {
    fontStyle: FONTSTYLE.normal,
    letterSpacing: 0.12,
  },
  viewProfile: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  container: {
    flex: 1,
    marginHorizontal: 24,
    marginTop: 24,
  },
  backgroudContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});

var DataItemProfile = [
  {
    id: 1,
    image:
      'https://images2.thanhnien.vn/528068263637045248/2023/9/25/dji0828-1695644886078630408676.jpg',
    title: 'NFTs',
    subtitle: 'Minting Your First NFT: A Beginner’s Guide to Creating...',
  },
  {
    id: 2,
    image:
      'https://images2.thanhnien.vn/528068263637045248/2023/9/25/dji0828-1695644886078630408676.jpg',
    title: 'Business',
    subtitle: '5 things to know before the stock market opens Monday',
  },
  {
    id: 3,
    image:
      'https://images2.thanhnien.vn/528068263637045248/2023/9/25/dji0828-1695644886078630408676.jpg',
    title: 'Karoline',
    subtitle: 'Bali plans to reopen to international tourists in Septe...',
  },
];
