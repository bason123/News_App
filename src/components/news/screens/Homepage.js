import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState, useContext, useEffect} from 'react';
import {FONTFAMILY, FONTWEIGHT, FONTSTYLE} from '../../../constants/theme';
import {Icon} from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import { getNews } from '../NewsHTTP';


const Homepage = (props) => {
  const navigation = props.navigation;
  const [data, setdata] = useState(DataCategory);
  const [news, setNews] = useState([])
  const [textSearch, settextSearch] = useState("")

  const [indexCategory, setIndexCategory] = useState(1);

  if(textSearch.trim().length > 0){
    navigation.navigate("Search", {textSearch : textSearch, news : news});
    settextSearch("")
  }
  // useEffect(() => {
  //   console.log('>>>>>running 8');
  // })
  // // chay sau khi render
  // useEffect(() => {
  //   // lấy danh sách tin từ api
  //   const fetchData = async () => {
  //     try {
  //       const result = await getNews();
  //       setNews(result.data);
  //     } catch (error) {
  //       console.log('>>>>>fetch data 15: ', error);
  //     }
  //   }
  //   fetchData();
  // }, [])
  // const [count, setCount] = useState(0);
  // // chay sau khi render & sau khi state theo doi thay doi
  // useEffect(() => {
  //   console.log('>>>>>running 14');
  // }, [count])


  
    useEffect(() =>{
      const fetchData = async () =>{
        try {
          const response = await getNews();
          setNews(response.data)
        } catch (error) {
          console.log(error);
          throw error;
        }
      }
      fetchData();
    },[])

  const renderTitleCategory = val => {
    const {id, nameTitle} = val.item;
    const onSelectItem = () => {
      setIndexCategory(id);
    };

    return (
      <TouchableOpacity onPress={onSelectItem}>
        <Text
          style={
            id.toString() == indexCategory.toString()
              ? [styles.title, styles.textTitleContent2]
              : [styles.title, styles.textTitleContent]
          }>
          {nameTitle}
        </Text>
        <View
          style={
            id.toString() == indexCategory.toString()
              ? styles.bottomCategory
              : null
          }></View>
      </TouchableOpacity>
    );
  };
  const [indexDataItem, setIndexDataItem] = useState(DataItemNews);

  const renderDataItem = val => {
    const {
      _id,
      image,
      content,
      title,
      image2,
      textBBC,
      image3,
      textTime,
      image4,
    } = val.item;

    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('DetailScreen', {id: _id});
        }}>
        <View style={styles.viewItemBody}>
          <Image
            style={{
              width: 96,
              height: 96,
              borderRadius: 6,
              backgroundColor: 'red',
            }}
            source={{uri: image}}
          />
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'flex-start',
              marginStart: 4,
            }}>
            <Text numberOfLines={1} style={[styles.title, styles.textEurope]}>{title}</Text>
            <Text numberOfLines={2} style={[styles.title, styles.textRussian]}>
              {content}
            </Text>
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
                <Text style={[styles.title, styles.textTime]}>4h ago</Text>
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
      {/* <ScrollView> */}
      <View style={styles.container}>
        <View style={styles.viewHeader}>
          <Image source={require('../../../assets/kara.png')} />
          <View style={styles.viewBell}>
            <Image
              style={styles.imgBell}
              source={require('../../../assets/bell.png')}
            />
          </View>
        </View>
        <View style={styles.viewContainerSearch}>
          <Image source={require('../../../assets/search.png')} />
          <TextInput
            style={[styles.title, styles.textInputSearch]}
            placeholder="Search"
            onChangeText={text => settextSearch(text)}
            value={textSearch}
          />
          <Image source={require('../../../assets/setting.png')} />
        </View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          <View>
            <View style={styles.viewTitle}>
              <Text style={[styles.title, styles.textTrending]}>Trending</Text>
              <Text style={[styles.title, styles.textSee]}>See all</Text>
            </View>
            <View style={styles.viewContainerBody}>
              <Image
                style={{width: '100%', borderRadius: 6}}
                source={require('../../../assets/imgShip.png')}
              />
              <View style={styles.viewContainerTopic}>
                <Text style={[styles.title, styles.textEurope]}>Europe</Text>
                <Text style={[styles.title, styles.textRussian]}>
                  Russian warship: Moskva sinks in Black Sea
                </Text>
                <View style={styles.viewContainerLogoBBC}>
                  <View style={styles.viewBBC}>
                    <Image source={require('../../../assets/LogoBBC.png')} />
                    <Text style={[styles.title, styles.textBBC]}>BBC News</Text>
                  </View>
                  <View style={styles.viewTime}>
                    <Image source={require('../../../assets/Iconclock.png')} />
                    <Text style={[styles.title, styles.textTime]}>4h ago</Text>
                  </View>
                  <View style={styles.viewIcon3dots}>
                    <Image source={require('../../../assets/Icon3dots.png')} />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.viewContainerTitleBody}>
              <Text style={styles.textTrending}>Latest</Text>
              <Text style={styles.textSee}>See all</Text>
            </View>
            <View style={styles.viewContainerTitleContent}>
              <FlatList
                data={DataCategory}
                renderItem={renderTitleCategory}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
              />
            </View>
            <FlatList
              data={news}
              renderItem={renderDataItem}
              key={item => item._id}
              horizontal={false}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              scrollEnabled={false}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  viewItemBody: {
    flexDirection: 'row',
    width: '80%',
    padding: 8,
    marginTop: 16,
    // backgroundColor:'red'
  },
  textTitleContent2: {
    marginStart: 10,
    fontSize: 16,
    fontWeight: FONTFAMILY.four_hundred,
    lineHeight: 24,
    color: '#000',
  },
  textTitleContent: {
    marginStart: 10,
    fontSize: 16,
    fontWeight: FONTFAMILY.four_hundred,
    lineHeight: 24,
  },
  bottomCategory: {
    borderColor: '#1877F2',
    borderWidth: 2,
    marginStart: 10,
  },
  viewContainerTitleContent: {
    flexDirection: 'row',
    marginTop: 16,
  },
  viewContainerTitleBody: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  viewContainerBody: {
    marginTop: 16,
  },
  viewContainerTopic: {
    marginTop: 8,
  },
  textRussian: {
    fontSize: 16,
    fontWeight: FONTWEIGHT.four_hundred,
    lineHeight: 24,
    color: '#000',
    // marginTop: 4,
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
  textSee: {
    fontSize: 14,
    fontWeight: FONTWEIGHT.four_hundred,
    lineHeight: 21,
    color: '#4E4B66',
  },
  textTrending: {
    fontSize: 16,
    fontWeight: FONTWEIGHT.six_hundred,
    lineHeight: 24,
    color: '#000',
  },
  viewTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  title: {
    // fontFamily: FONTFAMILY.poppins,
    fontStyle: FONTSTYLE.normal,
    letterSpacing: 0.12,
  },
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
  viewBell: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 6,
    elevation: 10,
  },
  viewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 56,
  },
  container: {
    flex: 1,
    marginHorizontal: 24,
    marginTop: 24,
    marginEnd: 24,
  },
  backgroudContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});

var DataCategory = [
  {
    id: 1,
    nameTitle: 'All',
  },
  {
    id: 2,
    nameTitle: 'Sports',
  },
  {
    id: 3,
    nameTitle: 'Politics',
  },
  {
    id: 4,
    nameTitle: 'Bussiness',
  },
  {
    id: 5,
    nameTitle: 'Health',
  },
  {
    id: 6,
    nameTitle: 'Travel',
  },
  {
    id: 7,
    nameTitle: 'Science',
  },
];

var DataItemNews = [
  {
    id: 1,
    image:
      'https://images2.thanhnien.vn/528068263637045248/2023/9/25/dji0828-1695644886078630408676.jpg',
    category: 'Karoline',
    title: "Ukraine's President Zelensky to BBC: Blood money being paid...",
    image2:
      'https://images2.thanhnien.vn/528068263637045248/2023/9/25/dji0828-1695644886078630408676.jpg',
    textBBC: 'BBC News',
    image3:
      'https://images2.thanhnien.vn/528068263637045248/2023/9/25/dji0828-1695644886078630408676.jpg',
    textTime: '4h ago',
    image4:
      'https://images2.thanhnien.vn/528068263637045248/2023/9/25/dji0828-1695644886078630408676.jpg',
  },
  {
    id: 2,
    image:
      'https://images2.thanhnien.vn/528068263637045248/2023/9/25/dji0828-1695644886078630408676.jpg',
    category: 'Karoline',
    title: "Ukraine's President Zelensky to BBC: Blood money being paid...",
    image2:
      'https://images2.thanhnien.vn/528068263637045248/2023/9/25/dji0828-1695644886078630408676.jpg',
    textBBC: 'BBC News',
    image3:
      'https://images2.thanhnien.vn/528068263637045248/2023/9/25/dji0828-1695644886078630408676.jpg',
    textTime: '4h ago',
    image4:
      'https://images2.thanhnien.vn/528068263637045248/2023/9/25/dji0828-1695644886078630408676.jpg',
  },
  {
    id: 3,
    image:
      'https://images2.thanhnien.vn/528068263637045248/2023/9/25/dji0828-1695644886078630408676.jpg',
    category: 'Karoline',
    title: "Ukraine's President Zelensky to BBC: Blood money being paid...",
    image2:
      'https://images2.thanhnien.vn/528068263637045248/2023/9/25/dji0828-1695644886078630408676.jpg',
    textBBC: 'BBC News',
    image3:
      'https://images2.thanhnien.vn/528068263637045248/2023/9/25/dji0828-1695644886078630408676.jpg',
    textTime: '4h ago',
    image4:
      'https://images2.thanhnien.vn/528068263637045248/2023/9/25/dji0828-1695644886078630408676.jpg',
  },
];
