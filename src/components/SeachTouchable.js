import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React from 'react';
import {FONTSTYLE, FONTWEIGHT} from '../constants/theme';

const SeachTouchable = () => {
  return (
    <View>
      <View style={styles.viewContainerSearch}>
        <Image source={require('../assets/search.png')} />
        <TextInput
          style={[styles.title, styles.textInputSearch]}
          placeholder="Search"
        />
        <Image source={require('../assets/setting.png')} />
      </View>
    </View>
  );
};

export default SeachTouchable;

const styles = StyleSheet.create({
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
});
