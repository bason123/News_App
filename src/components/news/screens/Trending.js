import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Trending = () => {
  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Image source={require('../../../assets/IconBackLeft.png')} />
          <Text style={styles.textTrending}>Trending</Text>
          <Image source={require('../../../assets/Icon3dotsvertical.png')} />
        </View>
        <View style={styles.contentContainer}>
          <Image
            style={styles.imageShip}
            source={require('../../../assets/imgShip_big.png')}
          />
          <Text style={styles.textEurope}>Europe</Text>
          <Text numberOfLines={2} style={styles.textRussian}>
            Russian warship: Moskva sinks in Black Sea
          </Text>
          <View style={styles.bottomContent}>
            <View style={styles.viewBBC}>
              <Image source={require('../../../assets/LogoBBC.png')} />
              <Text style={styles.textBBC}>BBC News</Text>
            </View>
            <View style={styles.viewTime}>
              <Image source={require('../../../assets/Iconclock.png')} />
              <Text style={styles.textTime}>4h ago</Text>
            </View>
            <View style={styles.viewImage3dots}>
            <Image source={require('../../../assets/Icon3dots.png')} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Trending;

const styles = StyleSheet.create({
  viewImage3dots:{
    flex:1,
    alignItems:'flex-end'
  },
  textTime:{
    marginStart:4
  },
  textBBC:{
    marginStart:4
  },
  textRussian:{
    marginTop:4,
    color:'#000',
    fontSize:16,
    fontStyle:'normal',
    fontWeight:'400',
    lineHeight:24,
    letterSpacing:0.12,
  },
  textEurope:{
    marginTop:8,
    color:'#4E4B66',
    fontSize:13,
    fontStyle:'normal',
    fontWeight:'400',
    lineHeight:19.5,
    letterSpacing:0.12,
  },
  viewTime: {
    flexDirection: 'row',
    alignItems: 'center',
    marginStart:12
  },
  viewBBC: {
    flexDirection: 'row',
  },
  bottomContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:4
  },
  imageShip: {
    width: '100%',
    borderRadius: 6,
    height: 183,
  },
  contentContainer: {
    padding:8,
    marginTop:17,

  },
  textTrending:{
    color:'#000',
    fontSize:16,
    fontStyle:'normal',
    fontWeight:'600',
    lineHeight:24,
    letterSpacing:0.12,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    marginHorizontal: 24,
    marginTop: 24,
  },
  background: {
    flex: 1,
    backgroundColor: 'white',
  },
});
