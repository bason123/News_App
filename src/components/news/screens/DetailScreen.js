import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import {FONTFAMILY, FONTSTYLE, FONTWEIGHT} from '../../../constants/theme';
import {useNavigation} from '@react-navigation/native';
import { getNewsDetail } from '../NewsHTTP';

const DetailScreen = props => {
  const {route: {params: {id}}} = props;
  const navigation = props.navigation;
  const [newsDetail, setNewsDetail] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!id) return;
        const result = await getNewsDetail(id);
        setNewsDetail(result.data[0]);
      } catch (error) {
        console.log('>>>>>fetch data: ', error);
      }
    }
    fetchData(); 
  }, [])

  return (
    <View style={styles.backgroudContainer}>
      <View style={styles.container}>
        <View style={styles.ViewContainerHeader}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Image source={require('../../../assets/IconBackLeft.png')} />
          </TouchableOpacity>
          <View style={styles.viewTwoImgHeader}>
            <Image
              style={{marginEnd: 8}}
              source={require('../../../assets/Icon1.png')}
            />
            <Image source={require('../../../assets/Icon3dotsvertical.png')} />
          </View>
        </View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          <View style={styles.viewContainerBBC_BIG}>
            <View style={styles.viewContainerNameBBC}>
              <Image source={require('../../../assets/LogoBBC_big.png')} />
              <View style={styles.viewBBC}>
                <Text style={[styles.title, styles.textBBC]}>BBC News</Text>
                <Text style={[styles.title, styles.textTime]}>14m ago</Text>
              </View>
            </View>
            <TouchableOpacity
              style={[styles.title, styles.touchableOpacityFollowing]}>
              <Text style={[styles.title, styles.textFollowing]}>
                Following
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 16}}>
            {/* <Image
              style={{width: '100%', borderRadius: 6}}
              source={require('../../../assets/imgShip_big.png')}
            /> */}
             {
              newsDetail.image ?  <Image style={{width: '100%',height:248, borderRadius: 6}} source={{ uri: newsDetail.image }} /> : null
             }
          </View>
          <View style={{marginTop: 16}}>
            <Text style={[styles.title, styles.textEurope]}>Europe</Text>
            <Text style={[styles.title, styles.textTitleUkraine]}>
              Ukraine's President Zelensky to BBC: Blood money being paid for
              Russian oil
            </Text>
          </View>
          <View style={{marginTop: 16}}>
            {/* <Text style={[styles.title, styles.textContent]}>
              Ukrainian President Volodymyr Zelensky has accused European
              countries that continue to buy Russian oil of "earning their money
              in other people's blood".{'\n'}
              {'\n'}
              In an interview with the BBC, President Zelensky singled out
              Germany and Hungary, accusing them of blocking efforts to embargo
              energy sales, from which Russia stands to make up to £250bn
              ($326bn) this year. There has been a growing frustration among
              Ukraine's leadership with Berlin, which has backed some sanctions
              against Russia but so far resisted calls to back tougher action on
              oil sales.
            </Text> */}
            {
              newsDetail.title ? <Text style={[styles.title, styles.textContent]}>{newsDetail.content}</Text> : null
            }
            
          </View>
        </ScrollView>
      </View>
      <View style={styles.viewFooter}>
        <View style={styles.viewHeart}>
          <Image source={require('../../../assets/IconHeart.png')} />
          <Text style={[styles.title, styles.textNumberHeart]}>24.5k</Text>
        </View>
        <View style={styles.viewComment}>
          <Image source={require('../../../assets/IconComment.png')} />
          <Text style={[styles.title, styles.textNumberHeart]}>1k</Text>
        </View>
        <View style={styles.viewIconSave}>
          <Image source={require('../../../assets/IconSave.png')} />
        </View>
      </View>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  viewIconSave: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  textNumberHeart: {
    fontSize: 16,
    fontWeight: FONTWEIGHT.four_hundred,
    lineHeight: 24,
    color: '#050505',
    marginStart: 4,
  },
  viewComment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewHeart: {
    flexDirection: 'row',
    alignItems: 'center',
    marginEnd: 29,
  },
  viewFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 78,
    backgroundColor: 'white',
    elevation: 20,
    paddingHorizontal: 34,
    paddingVertical: 24,
  },
  textContent: {
    fontSize: 16,
    fontWeight: FONTWEIGHT.four_hundred,
    lineHeight: 24,
    color: '#4E4B66',
  },
  textEurope: {
    fontSize: 14,
    fontWeight: FONTWEIGHT.four_hundred,
    lineHeight: 21,
    color: '#4E4B66',
  },
  textTitleUkraine: {
    fontSize: 24,
    fontWeight: FONTWEIGHT.four_hundred,
    lineHeight: 36,
    color: '#000',
  },
  touchableOpacityFollowing: {
    paddingVertical: 5,
    paddingEnd: 11,
    paddingStart: 12,
    borderRadius: 6,
    backgroundColor: '#1877F2',
  },
  textFollowing: {
    fontSize: 16,
    fontWeight: FONTWEIGHT.six_hundred,
    color: '#fff',
    lineHeight: 24,
  },
  viewBBC: {
    marginStart: 4,
  },
  textTime: {
    fontSize: 14,
    fontWeight: FONTWEIGHT.four_hundred,
    lineHeight: 21,
  },
  textBBC: {
    fontSize: 16,
    fontWeight: FONTWEIGHT.six_hundred,
    lineHeight: 24,
    color: '#000',
  },
  title: {
    // fontFamily: FONTFAMILY.poppins,
    fontStyle: FONTSTYLE.normal,
    letterSpacing: 0.12,
  },
  viewContainerNameBBC: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewContainerBBC_BIG: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  viewTwoImgHeader: {
    flexDirection: 'row',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  ViewContainerHeader: {
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    marginHorizontal: 24,
    marginTop: 24,
  },
  backgroudContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
});
