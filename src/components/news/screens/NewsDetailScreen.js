import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { FONTFAMILY, FONTSTYLE, FONTWEIGHT, COLORS } from '../../../constants/theme';

const NewsDetailScreen = () => {
    const navigation = useNavigation();
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
      <FlatList
          data={DataItemProfile}
          renderItem={renderItemProfile}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  )
}

export default NewsDetailScreen

const styles = StyleSheet.create({
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
        // padding: 8,
        marginTop: 16,
      },
      container: {
        flex: 1,
        // marginHorizontal: 24,
        // marginTop: 24,
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