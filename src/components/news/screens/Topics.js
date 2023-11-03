import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {getNewsSearch} from '../NewsHTTP';

const Topics = () => {
  const [keyword, setKeyword] = useState('');

  const hanlderTopics = async (text) => {
    try {
      const result = await getNewsSearch(text);
      console.log(result);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  return (
    <View style={styles.backgroudContainer}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Image source={require('../../../assets/IconBackLeft.png')} />
          <Text style={styles.textChoose}>Choose your Topics</Text>
        </View>
        <View style={styles.viewContainerSearch}>
          <View style={styles.viewTextIputSearch}>
            <TextInput
              value={keyword}
              onChangeText={text => {
                setKeyword(text);
                hanlderTopics(text);
              }}
            />
          </View>
          <Image source={require('../../../assets/search.png')} />
        </View>
      </View>
    </View>
  );
};

export default Topics;

const styles = StyleSheet.create({
  viewTextIputSearch: {
    flex: 1,
    marginEnd: 10,
  },
  viewContainerSearch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#4E4B66',
    paddingHorizontal: 10,
    marginTop: 17,
  },
  textChoose: {
    color: '#000',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: 0.12,
    marginStart: 80,
  },
  headerContainer: {
    flexDirection: 'row',
  },
  container: {
    marginHorizontal: 24,
    marginTop: 24,
  },
  backgroudContainer: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});
