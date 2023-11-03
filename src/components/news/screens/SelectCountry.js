import { StyleSheet, Text, View, Image, FlatList, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
// import { Image } from 'react-native-svg'

var dataCountry = [
  {
    id: 1,
    nameCountry: "Afghanistan",
    image: require('../../../assets/country/Afghanistan.png')
  },
  {
    id: 2,
    nameCountry: "Albania",
    image: require('../../../assets/country/Albania.png')
  },
  {
    id: 3,
    nameCountry: "Algeria",
    image: require('../../../assets/country/Algeria.png')
  },
  {
    id: 4,
    nameCountry: "Andorra",
    image: require('../../../assets/country/Andorra.png')
  },
  {
    id: 5,
    nameCountry: "Angola",
    image: require('../../../assets/country/Angola.png')
  },
  {
    id: 6,
    nameCountry: "Argentina",
    image: require('../../../assets/country/Argentina.png')
  },
  {
    id: 7,
    nameCountry: "Armenia",
    image: require('../../../assets/country/Armenia.png')
  },
  {
    id: 8,
    nameCountry: "Australia",
    image: require('../../../assets/country/Australia.png')
  },
  {
    id: 9,
    nameCountry: "Austria",
    image: require('../../../assets/country/Austria.png')
  },
  {
    id: 10,
    nameCountry: "Azerbaijan",
    image: require('../../../assets/country/Azerbaijan.png')
  },
]
const SelectCountry = () => {
  const [country, setCountry] = useState(dataCountry)
  const renderCountry = (val) => {
    const { id, nameCountry, image } = val.item;
    return (
      <View style={styles.country}>
        <Image style={{ width: 32, height: 32 }} source={image}></Image>
        <Text style={styles.textNameCountry}>{nameCountry}</Text>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Image source={require('../../../assets/IconBackLeft.png')} />
        <Text style={styles.textTitleCountry}>Select your Country</Text>
        <View></View>
      </View>
      <View style={styles.inputSearchContainer}>
          <TextInput placeholder='Country'></TextInput>
          <Image source={require('../../../assets/search.png')} />
        </View>
      <View style={styles.countryContainer}>
        <FlatList
          data={country}
          renderItem={renderCountry}
          keyExtractor={item => item.id}
          horizontal={false}
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
        </FlatList>
      </View>
      <View style={styles.buttonNextContainer}>
        <TouchableOpacity style={styles.buttonNext}>
          <Text style={styles.buttonTextNext}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SelectCountry

const styles = StyleSheet.create({
  buttonTextNext: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: 0.12,
  },
  buttonNext: {
    height: 50,
    borderRadius: 6,
    borderColor: '#1877F2',
    borderWidth: 1,
    backgroundColor: '#1877F2',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonNextContainer: {
    paddingVertical: 50
  },
  textNameCountry: {
    color: '#4E4B66',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.12,
    marginStart: 16
  },
  country: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 8,
    alignItems: 'center',
    // backgroundColor: 'red',
    marginVertical: 2
  },
  countryContainer: {
    marginTop: 16
  },
  inputSearchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#4E4B66',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 16
  },
  textTitleCountry: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: 0.12
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    padding: 24,
    backgroundColor: '#fff'
  }
})