import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
  ToastAndroid
} from 'react-native';
import React, { useState } from 'react';
import {FONTWEIGHT} from '../../../constants/theme';
import CheckBox from '@react-native-community/checkbox';
import { signup } from '../UserHTTP';

const Signup = (props) => {
  const navigation = props.navigation;
  const [ischeckbox,setischeckbox] = useState(false);
  const [email , setEmail] = useState('');
  const [password, setPassword] = useState('');

  const togglecheckbox = () =>
  {
    setischeckbox(!ischeckbox);
  }

  const handleRegister = async () =>{
    try {
      const result = await signup(email, password);
      console.log(result);
      Alert.alert('Success', 'Register success, please login');
      navigation.navigate('Login');
    } catch (error) {
         console.log('>>>>>>dong 32', error);
         ToastAndroid.show(error.message, ToastAndroid.SHORT)
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.viewTitle}>
        <Text style={[styles.textHello, styles.title]}>Hello!</Text>
      </View>
      <View>
        <Text style={[styles.title, styles.textSubTitle]}>
        Signup to get Started
        </Text>
      </View>
      <View style={styles.viewUsername}>
        <Text style={[styles.title, styles.textUsername_Password]}>
          Username
        </Text>
        <TextInput
        placeholder="Username"
        onChangeText={(text) => setEmail(text)}
        value={email}
        style={[styles.textInputRepeat, styles.textInputUsername]} />
      </View>
      <View style={styles.viewPassword}>
        <Text style={[styles.title, styles.textUsername_Password]}>
          Password
        </Text>
        <View style={styles.viewTextInputPassword}>
          <TextInput
          onChangeText={(text) => setPassword(text)}
          value={password}
          placeholder="Password"
            style={[styles.textInputRepeat, styles.textInputPassword]}
          />
          <Image
            style={styles.imagePassword}
            source={require('../../../assets/Icon.png')}
          />
        </View>
      </View>
      <View style={styles.viewCheckbox}>
        <CheckBox tintColors={{true:'#1877F2', false:'back'}} value={ischeckbox} onValueChange={togglecheckbox}/>
        <Text style={[styles.title,styles.textRemember]}>Remember me</Text>
      </View>
      <View>
        <TouchableOpacity onPress={handleRegister} style={styles.touchableOpacityLogin}>
          <Text style={[styles.title, styles.textButtonlogin]}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewContinue}>
        <Text style={styles.textContinue}>or continue with</Text>
      </View>
      <View style={styles.viewSocialnetwork}>
        <TouchableOpacity style={styles.touchableOpacitySocialnetwork}>
          <Image
            style={styles.imgSocialnetwork}
            source={require('../../../assets/fb.png')}
          />
          <Text style={[styles.title, styles.textSocialnetwork]}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOpacitySocialnetwork}>
          <Image
            style={styles.imgSocialnetwork}
            source={require('../../../assets/gg.png')}
          />
          <Text style={[styles.title, styles.textSocialnetwork]}>Google</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewAccount}>
        <Text style={styles.textAccount}>Already have an account ?  </Text>
        <Text onPress={()=>{navigation.goBack()}} style={[styles.textLogin]}>Login</Text>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  textRemember:{
    fontSize:14,
    fontWeight:FONTWEIGHT.four_hundred,
    lineHeight:21,
    color:'#4E4B66'
  },
  viewCheckbox:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:8,
  },
  textLogin:{
    fontSize:14,
    color:'#1877F2',
    fontWeight:FONTWEIGHT.six_hundred,
    lineHeight:21
  },
  textAccount:{
    fontSize:14,
    color:'#667080',
    fontWeight:FONTWEIGHT.four_hundred,
    lineHeight:21
  },
  viewAccount:{
    marginTop:16,
    justifyContent:'center',
    flexDirection:'row'
  },
  imgSocialnetwork: {
    marginEnd: 10,
  },
  textSocialnetwork: {
    fontSize: 16,
    fontWeight: FONTWEIGHT.six_hundred,
    lineHeight: 24,
    color:'#667080'
  },
  touchableOpacitySocialnetwork: {
    flexDirection: 'row',
    height: 48,
    width: '46%',
    backgroundColor: '#EEF1F4',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewSocialnetwork: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textContinue:{
    fontSize:14,
    color:'#4E4B66',
    fontWeight:FONTWEIGHT.four_hundred,
    lineHeight:21
  },
  viewContinue:{
    marginTop:16,
    marginBottom:16,
    alignItems:'center'
  },
  textButtonlogin: {
    fontSize: 16,
    fontWeight: FONTWEIGHT.six_hundred,
    lineHeight: 24,
    color: '#FFF',
  },
  touchableOpacityLogin: {
    backgroundColor: '#1877F2',
    height: 50,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  imagePassword: {
    position: 'absolute',
    top: 16,
    right: 10,
  },
  textInputPassword: {
    marginTop: 4,
  },
  viewTextInputPassword: {
    borderRadius: 6,
    position: 'relative',
  },
  viewPassword: {
    marginTop: 16,
  },
  textInputRepeat: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#4E4B66',
    padding: 10,
  },
  textInputUsername: {
    marginTop: 4,
  },
  textUsername_Password: {
    fontSize: 14,
    fontWeight: FONTWEIGHT.four_hundred,
    lineHeight: 21,
    color: '#4E4B66',
  },
  viewUsername: {
    marginTop: 65,
  },
  textSubTitle: {
    fontSize: 20,
    fontWeight: FONTWEIGHT.four_hundred,
    lineHeight: 30,
    color: '#4E4B66',
  },
  title: {
    // fontFamily: 'Poppins',
    fontStyle: 'normal',
    letterSpacing: 0.12,
  },
  textHello: {
    color: '#1877F2',
    fontWeight: '700',
    fontSize: 48,
    lineHeight: 72,
  },
  viewTitle: {
    width: 167,
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    backgroundColor: 'white',
  },
});
