import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput
} from 'react-native';
import React from 'react';
import SeachTouchable from '../../SeachTouchable';
import {COLORS, FONTSTYLE, FONTWEIGHT} from '../../../constants/theme';
import { useEffect, useState } from 'react';
import { getNews } from '../NewsHTTP';
import { getNewsSearch } from '../NewsHTTP';

const Bookmark = () => {
  const [news, setNews] = useState([]);

  const hanlderTopics = async (text) => {
    try {
      const result = await getNewsSearch(text);
      setNews(result.data);
      console.log(result);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };



  useEffect(()=>{
    const fetchData = async() =>{
      try {
        const result = await getNews();
        setNews(result.data);
      } catch (error) {
        console.log(error);
        throw error;
      }
    }
    fetchData();
  },[])


  const redenItemBookmark = val => {
    const {_id, image, content, title} = val.item;

    return (
      <TouchableOpacity
        onPress={() => {
          //   navigation.navigate('DetailScreen');
        }}>
        <View style={styles.viewItemBody}>
          {image && (<Image
            style={{
              width: 96,
              height: 96,
              borderRadius: 6,
            }}
            source={{uri: image}}
          />)}
          
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'flex-start',
              marginStart: 4,
              width:'70%',
            }}>
           <View style={styles.viewItemEurope}>
            <Text style={[styles.title, styles.textEurope]}>{title}</Text>
            <Text numberOfLines={2} style={[styles.title, styles.textRussian]}>
              {content}
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
      <View style={styles.viewContainer}>
        <View>
          <Text style={styles.textBookmark}>Bookmark</Text>
        </View>
        <View style={styles.viewContainerSearch}>
        <Image source={require('../../../assets/search.png')} />
        <TextInput
        onChangeText={text => {
          hanlderTopics(text);
        }}
          style={[styles.title, styles.textInputSearch]}
          placeholder="Search"
        />
        <Image source={require('../../../assets/setting.png')} />
      </View>
        <FlatList
          data={news}
          renderItem={redenItemBookmark}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Bookmark;

const styles = StyleSheet.create({
  textInputSearch: {
    flex: 1,
    fontSize: 14,
    fontWeight: FONTWEIGHT.four_hundred,
    lineHeight: 21,
  },
  viewContainerSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 6,
    height: 48,
    padding: 5,
    marginTop: 16,
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
  title: {
    fontStyle: FONTSTYLE.normal,
    letterSpacing: 0.12,
  },
  viewContainer: {
    flex: 1,
    marginHorizontal: 24,
    marginTop: 24,
  },
  backgroudContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
