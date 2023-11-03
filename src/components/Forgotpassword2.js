import {Image, StyleSheet, Text, TouchableOpacity, View, TextInput} from 'react-native';
import React, {useMemo, useState} from 'react';
import {FONTFAMILY, FONTWEIGHT, FONTSTYLE, COLORS} from '../constants/theme';
import {RadioGroup} from 'react-native-radio-buttons-group';
const Forgotpassword2 = () => {
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
            Don’t worry! it happens. Please enter the address associated with
            your account.
          </Text>
        </View>
        <View style={styles.viewInputEmail}>
            <Text style={styles.textEmail}>
            Email ID / Mobile number
            </Text>
            <TextInput style={styles.textInputEmail}/>
        </View>
      </View>
      <View style={styles.viewSubmit}>
        <TouchableOpacity style={styles.touchableOpacitySubmit}>
          <Text style={[styles.title, styles.textSubmit]}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Forgotpassword2;

const styles = StyleSheet.create({
    textInputEmail:{
        borderWidth:1,
        borderRadius:6,
        borderColor:COLORS.subtitle,
        marginTop:4
    },
    textEmail:{
        fontSize:14,
        fontWeight:FONTWEIGHT.four_hundred,
        lineHeight:21,
        color:COLORS.subtitle
    },
    viewInputEmail:{
        marginTop:16,
    },
  textSubmit: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    color: '#FFF',
  },
  touchableOpacitySubmit: {
    backgroundColor: '#1877F2',
    borderRadius: 6,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewSubmit: {
    height: 130,
    elevation: 25,
    paddingHorizontal: 24,
    paddingVertical: 40,
    backgroundColor: 'white',
  },
  textDont: {
    fontSize: 16,
    fontWeight: FONTWEIGHT.four_hundred,
    lineHeight: 24,
    color: '#4E4B66',
  },
  viewDont: {
    marginTop: 5,
    width: 325,
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
