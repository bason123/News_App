import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  COLORS,
  FONTFAMILY,
  FONTSTYLE,
  FONTWEIGHT,
} from '../../../constants/theme';

const Verification = () => {
  return (
    <View style={styles.backgroudContainer}>
      <View style={styles.container}>
        <View>
          <Image source={require('../../../assets/IconBackLeft.png')} />
        </View>
        <View style={styles.viewOTP}>
          <Text style={[styles.title, styles.textOTP]}>OTP Verification</Text>
          <Text style={[styles.title, styles.textEnter]}>
            Enter the OTP sent to +67-1234-5678-9
          </Text>
        </View>
        <View style={styles.viewTextInputOTP}>
          <View style={[styles.viewInputOTP, {marginStart: 0}]}>
            <TextInput maxLength={1} fontSize={32} style={[styles.title,styles.textInputOTP]} />
          </View>
          <View style={styles.viewInputOTP}>
            <TextInput maxLength={1} fontSize={32} style={[styles.title,styles.textInputOTP]} />
          </View>
          <View style={styles.viewInputOTP}>
            <TextInput maxLength={1} fontSize={32} style={[styles.title,styles.textInputOTP]}/>
          </View>
          <View style={styles.viewInputOTP}>
            <TextInput maxLength={1} fontSize={32} style={[styles.title,styles.textInputOTP]}/>
          </View>
        </View>
        <View style={styles.viewResend}>
          <Text style={styles.Resend}>Resend code in </Text>
          <Text style={[styles.Resend, {color: '#C30052'}]}>56s</Text>
        </View>
      </View>
      <View style={styles.viewVerify}>
        <TouchableOpacity style={styles.touchableOpacityVerify}>
          <Text style={[styles.title, styles.textVerify]}>Verify</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Verification;

const styles = StyleSheet.create({
  textInputEmail: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: COLORS.subtitle,
    marginTop: 4,
  },
  textEmail: {
    fontSize: 14,
    fontWeight: FONTWEIGHT.four_hundred,
    lineHeight: 21,
    color: COLORS.subtitle,
  },
  viewInputEmail: {
    marginTop: 16,
  },
  textVerify: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    color: '#FFF',
  },
  touchableOpacityVerify: {
    backgroundColor: '#1877F2',
    borderRadius: 6,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewVerify: {
    height: 130,
    elevation: 25,
    paddingHorizontal: 24,
    paddingVertical: 40,
    backgroundColor: 'white',
  },
  viewResend: {
    marginTop: 27,
    // justifyContent:'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textInputOTP:{
    color:'#050505',
    fontWeight:FONTWEIGHT.seven_hundred,
    lineHeight:48,
  },
  viewInputOTP: {
    width: 64,
    height: 64,
    borderWidth: 1,
    borderRadius: 6,
    marginStart: 16,
    borderColor: COLORS.subtitle,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewTextInputOTP: {
    marginTop: 27,
    // alignItems:'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textEnter: {
    fontSize: 16,
    fontWeight: FONTWEIGHT.four_hundred,
    lineHeight: 24,
    color: COLORS.subtitle,
    marginTop: 8,
  },
  textOTP: {
    fontSize: 32,
    fontWeight: FONTWEIGHT.seven_hundred,
    lineHeight: 48,
    color: COLORS.subtitle,
  },
  title: {
    fontStyle: FONTSTYLE.normal,
    letterSpacing: 0.12,
  },
  viewOTP: {
    marginTop: 27,
    alignItems: 'center',
  },
  container: {
    marginHorizontal: 24,
    marginTop: 24,
    flex: 1,
  },
  backgroudContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
