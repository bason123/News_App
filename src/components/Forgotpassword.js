import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useMemo, useState} from 'react';
import {FONTFAMILY, FONTWEIGHT, FONTSTYLE} from '../constants/theme';
import {RadioGroup} from 'react-native-radio-buttons-group';
const Forgotpassword = () => {
  const radioButtons = useMemo(
    () => [
      {
        id: '1',
        label: '',
        value: 'option1',
      },
      {
        id: '2',
        label: '',
        value: 'option2',
      },
    ],
    [],
  );
  const [selectedId, setSelectedId] = useState();
  return (
    <View style={styles.Containerbackgroud}>
      <View style={styles.Container}>
        <View>
          <Image source={require('../assets/IconBackLeft.png')} />
        </View>
        <View style={styles.viewForgot}>
          <Text style={[styles.title, styles.textForgot]}>
            Forgot Password ?
          </Text>
        </View>
        <View style={styles.viewDont}>
          <Text style={[styles.title, styles.textDont]}>
            Don’t worry! it happens. Please select the {'\n'}email or number
            associated with your {'\n'}account.
          </Text>
        </View>
        <View style={styles.viewContainerEmail}>
          <View style={styles.viewImageEmail}>
            <Image source={require('../assets/IconEmail.png')} />
          </View>
          <View style={styles.viewEmail}>
            <Text style={styles.textViaEmail}>via Email:</Text>
            <Text style={styles.textEmail}>example@youremail.com</Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'flex-end',
            }}>
            <RadioGroup
              radioButtons={radioButtons}
              onPress={setSelectedId}
              selectedId={selectedId}
            />
          </View>
        </View>
        <View style={styles.viewContainerEmail}>
          <View style={styles.viewImageEmail}>
            <Image source={require('../assets/IconPhone.png')} />
          </View>
          <View style={styles.viewEmail}>
            <Text style={styles.textViaEmail}>via SMS:</Text>
            <Text style={styles.textEmail}>+62-8421-4512-2531</Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'flex-end',
            }}>
            <RadioGroup
              radioButtons={radioButtons}
              onPress={setSelectedId}
              selectedId={selectedId}
            />
          </View>
        </View>
      </View>
      <View style={styles.viewSubmit}>
        <TouchableOpacity style={styles.touchableOpacitySubmit}>
          <Text style={[styles.title,styles.textSubmit]}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Forgotpassword;

const styles = StyleSheet.create({
  textSubmit:{
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    color:'#FFF'
  },
  touchableOpacitySubmit:{
    backgroundColor:'#1877F2',
    borderRadius:6,
    height:50,
    alignItems:'center',
    justifyContent:'center'
  },
  viewSubmit:{
    height:130,
    elevation:25,
    paddingHorizontal:24,
    paddingVertical:40,
    backgroundColor:'white'
  },
  textEmail: {
    fontSize: 16,
    fontWeight: FONTWEIGHT.four_hundred,
    lineHeight: 24,
    color: '#050505',
    marginTop: 5,
  },
  textViaEmail: {
    fontSize: 14,
    fontWeight: FONTWEIGHT.four_hundred,
    lineHeight: 21,
    color: '#667080',
  },
  viewEmail: {
    marginStart: 16,
  },
  viewImageEmail: {
    width: 64,
    height: 64,
    backgroundColor: '#1877F2',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewContainerEmail: {
    height: 100,
    borderRadius: 6,
    backgroundColor: '#EEF1F4',
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 18,
    marginTop: 16,
  },
  textDont: {
    fontSize: 16,
    fontWeight: FONTWEIGHT.four_hundred,
    lineHeight: 24,
    color: '#4E4B66',
  },
  viewDont: {
    marginTop: 5,
  },
  textForgot: {
    fontSize: 32,
    fontWeight: FONTWEIGHT.title,
    lineHeight: 48,
    color: '#4E4B66',
  },
  viewForgot: {
    marginTop: 16,
    width: 186,
  },
  title: {
    // fontFamily: FONTFAMILY.poppins,
    fontStyle: FONTSTYLE.normal,
    letterSpacing: 0.12,
  },
  Container: {
    flex: 1,
    marginHorizontal: 24,
    marginTop: 24,
  },
  Containerbackgroud: {
    backgroundColor: 'white',
    flex: 1,
  },
});
