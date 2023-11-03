import {Image, StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  COLORS,
  FONTFAMILY,
  FONTSTYLE,
  FONTWEIGHT,
} from '../../../constants/theme';

const Verification2 = () => {
  return (
    <View style={styles.backgroudContainer}>
      <View style={styles.container}>
        <View>
          <Image source={require('../../../assets/IconBackLeft.png')} />
        </View>
        <View style={styles.viewReset}>
          <Text style={[styles.title, styles.textReset]}>Reset Password</Text>
        </View>
        <View style={styles.viewContainerNewPass}>
          <Text style={[styles.title, styles.textNewsPass]}>News Password</Text>
          <View style={styles.viewNewsPassword}>
            <View style={styles.viewTextInputNewPass}>
              <TextInput fontSize={20} />
            </View>
            <Image source={require('../../../assets/Icon.png')} />
          </View>
        </View>
        <View style={styles.viewContainerNewPass}>
          <Text style={[styles.title, styles.textNewsPass]}>Confirm new password*</Text>
          <View style={styles.viewNewsPassword}>
            <View style={styles.viewTextInputNewPass}>
              <TextInput fontSize={20} />
            </View>
            <Image source={require('../../../assets/Icon.png')} />
          </View>
        </View>
      </View>
      <View style={styles.viewVerify}>
        <TouchableOpacity style={styles.touchableOpacityVerify}>
          <Text style={[styles.title, styles.textVerify]}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Verification2;

const styles = StyleSheet.create({
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
  textNewsPass: {
    fontSize: 14,
    fontWeight: FONTWEIGHT.four_hundred,
    lineHeight: 21,
    color: COLORS.subtitle,
  },
  viewContainerNewPass: {
    marginTop: 13,
  },
  viewTextInputNewPass: {
    flex: 1,
    flexDirection: 'row',
  },
  viewNewsPassword: {
    borderWidth: 1,
    height: 58,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
    marginTop: 4,
  },
  textReset: {
    fontSize: 32,
    fontWeight: FONTWEIGHT.seven_hundred,
    lineHeight: 48,
    color: COLORS.subtitle,
  },
  viewReset: {
    width: 162,
    height: 96,
    marginTop: 13,
  },
  title: {
    fontSize: FONTSTYLE.normal,
    letterSpacing: 0.12,
  },
  container: {
    marginHorizontal: 24,
    marginTop: 24,
    flex: 1,
  },
  backgroudContainer: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
});
