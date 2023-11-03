import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {FONTSTYLE, FONTWEIGHT, COLORS} from '../../../constants/theme';
// import { Image } from 'react-native-svg'
const Explore = () => {
  const [isSave, setisSave] = useState(true);
  const [numberSave, setnumberSave] = useState(1);

  const itemExplore = val => {
    const {id, image, title, subtitle} = val.item;
    const handlePress = () => {
      setnumberSave(id);
    };
    return (
      <View style={styles.viewContainerHealth}>
        <Image
          style={{width: 70, height: 70, borderRadius: 6, objectFit: 'cover'}}
          source={{uri: image}}
        />
        <View style={styles.viewHealth}>
          <Text style={[styles.title, styles.textHealth]}>{title}</Text>
          <Text
            numberOfLines={2}
            style={[styles.title, styles.textGetenergizing]}>
            {subtitle}
          </Text>
        </View>

        <TouchableOpacity
          onPress={handlePress}
          style={[
            styles.touchableopacitySave2,
            id.toString() == numberSave.toString()
              ? styles.touchableopacitySave
              : null,
          ]}>
          <Text
            style={[
              styles.title,
              styles.textSave2,
              id.toString() == numberSave.toString()
                ? [styles.title, styles.textSave]
                : null,
            ]}>
            {id.toString() == numberSave.toString() ? 'Save' : 'Saved'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.backgroudContainer}>
      <ScrollView>
      <View style={styles.container}>
        <View>
          <Text style={[styles.title, styles.textExplore]}>Explore</Text>
        </View>
        <View style={styles.viewTopic}>
          <Text style={[styles.title, styles.textTopic]}>Topic</Text>
          <Text style={[styles.title, styles.textSee]}>See all</Text>
        </View>
        {/* <View style={styles.viewContainerHealth}>
            <Image style={{width:70, height:70}} source={require('..../../../assets/imgUkraine.png')}/>
            <View style={styles.viewHealth}>
                <Text style={[styles.title,styles.textHealth]}>Health</Text>
                <Text numberOfLines={2} style={[styles.title,styles.textGetenergizing]}>Get energizing workout moves, healthy recipes...</Text>
            </View>

            <TouchableOpacity style={styles.touchableopacitySave}>
                <Text style={[styles.title,styles.textSave]}>Save</Text>
            </TouchableOpacity>
        </View> */}
        <FlatList
          data={DataItemExplort}
          renderItem={itemExplore}
          key={item => item.id}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
        />
        <View style={{marginTop: 16}}>
          <Text style={styles.textPopular}>Popular Topic</Text>
        </View>
        <View style={styles.viewContainerImgShipBig}>
          <Image
            style={{width: '100%', borderRadius: 6}}
            source={require('../../../assets/imgShip_big.png')}
          />
          <Text style={styles.textEurope}>Europe</Text>
          <Text style={styles.textRussian}>
            Russian warship: Moskva sinks in Black Sea
          </Text>
          <View style={styles.viewContainerBBCNews}>
            <View style={styles.viewBBCNews}>
              <Image
                style={styles.imageLogoBBC}
                source={require('../../../assets/LogoBBC.png')}
              />
              <Text style={styles.textBBC}>BBC News</Text>
            </View>
            <View style={styles.viewTime}>
              <Image source={require('../../../assets/Iconclock.png')} />
              <Text style={styles.text4h}>4h ago</Text>
            </View>
            <View style={styles.viewImage3dots}>
              <Image source={require('../../../assets/Icon3dots.png')} />
            </View>
          </View>
        </View>
        <View style={styles.viewContainerImgShipBig}>
          <Image
            style={{width: '100%', borderRadius: 6}}
            source={require('../../../assets/imgShip_big.png')}
          />
          <Text style={styles.textEurope}>Europe</Text>
          <Text style={styles.textRussian}>
            Russian warship: Moskva sinks in Black Sea
          </Text>
          <View style={styles.viewContainerBBCNews}>
            <View style={styles.viewBBCNews}>
              <Image
                style={styles.imageLogoBBC}
                source={require('../../../assets/LogoBBC.png')}
              />
              <Text style={styles.textBBC}>BBC News</Text>
            </View>
            <View style={styles.viewTime}>
              <Image source={require('../../../assets/Iconclock.png')} />
              <Text style={styles.text4h}>4h ago</Text>
            </View>
            <View style={styles.viewImage3dots}>
              <Image source={require('../../../assets/Icon3dots.png')} />
            </View>
          </View>
        </View>
      </View>
      </ScrollView>
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  viewImage3dots: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  text4h: {
    fontSize: 13,
    fontWeight: FONTWEIGHT.four_hundred,
    lineHeight: 19.5,
    color: COLORS.subtitle,
    marginStart: 4,
  },
  viewTime: {
    flexDirection: 'row',
    marginStart: 12,
    alignItems: 'center',
  },
  textBBC: {
    fontSize: 13,
    fontWeight: FONTWEIGHT.six_hundred,
    lineHeight: 19.5,
    color: COLORS.subtitle,
    marginStart: 4,
  },
  viewBBCNews: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewContainerBBCNews: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  textRussian: {
    fontSize: 16,
    fontWeight: FONTWEIGHT.four_hundred,
    lineHeight: 24,
    color: COLORS.title,
    marginTop: 4,
  },
  textEurope: {
    marginTop: 8,
    fontSize: 13,
    fontWeight: FONTWEIGHT.four_hundred,
    lineHeight: 19.5,
    color: COLORS.subtitle,
  },
  viewContainerImgShipBig: {
    marginTop: 16,
    overflow: 'hidden',
  },
  textPopular: {
    fontSize: 16,
    fontWeight: FONTWEIGHT.seven_hundred,
    lineHeight: 22,
    letterSpacing: -0.32,
    color: '#000',
  },
  textSave2: {
    fontSize: 16,
    fontWeight: FONTWEIGHT.six_hundred,
    lineHeight: 24,
    color: 'white',
  },
  textSave: {
    fontSize: 16,
    fontWeight: FONTWEIGHT.six_hundred,
    lineHeight: 24,
    color: '#1877F2',
  },
  textGetenergizing: {
    fontSize: 14,
    fontWeight: FONTWEIGHT.four_hundred,
    lineHeight: 21,
    color: '#4E4B66',
  },
  textHealth: {
    fontSize: 16,
    fontWeight: FONTWEIGHT.four_hundred,
    lineHeight: 24,
    color: '#000',
  },
  touchableopacitySave2: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#1877F2',
    width: 74,
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  touchableopacitySave: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#1877F2',
    width: 74,
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  viewHealth: {
    width: '54%',
  },
  viewContainerHealth: {
    padding: 8,
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textSee: {
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: -0.28,
    color: '#4E4B66',
  },
  textTopic: {
    fontSize: 16,
    lineHeight: 22,
    color: '#000',
    letterSpacing: -0.32,
    fontWeight: FONTWEIGHT.seven_hundred,
  },
  viewTopic: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontStyle: FONTSTYLE.normal,
    letterSpacing: 0.12,
  },
  textExplore: {
    fontSize: 32,
    lineHeight: 48,
    color: '#000',
    fontWeight: FONTWEIGHT.seven_hundred,
  },
  container: {
    flex: 1,
    marginHorizontal: 24,
    marginTop: 24,
    marginBottom:8
  },
  backgroudContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
});

var DataItemExplort = [
  {
    id: 1,
    image:
      'https://images2.thanhnien.vn/528068263637045248/2023/9/25/dji0828-1695644886078630408676.jpg',
    title: 'Karoline',
    subtitle: "Ukraine's President Zelensky to BBC: Blood money being paid...",
  },
  {
    id: 2,
    image:
      'https://images2.thanhnien.vn/528068263637045248/2023/9/25/dji0828-1695644886078630408676.jpg',
    title: 'Karoline',
    subtitle: 'Get energizing workout moves, healthy recipes...',
  },
  {
    id: 3,
    image:
      'https://images2.thanhnien.vn/528068263637045248/2023/9/25/dji0828-1695644886078630408676.jpg',
    title: 'Karoline',
    subtitle: "Ukraine's President Zelensky to BBC: Blood money being paid...",
  },
];
