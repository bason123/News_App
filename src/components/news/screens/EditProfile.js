import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  ToastAndroid
} from 'react-native';
import {KeyboardAvoidingView, ScrollView} from 'react-native';
import {useContext, useState, useCallback} from 'react';
import {UserContext} from '../../user/UserContext';
import {setPersonInformation} from '../NewsHTTP';
import {useNavigation} from '@react-navigation/native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {getUpdateImage} from '../NewsHTTP';
import {Modal} from 'react-native';

const EditProfile = () => {
  const navigation = useNavigation();
  const {user} = useContext(UserContext);

  const [name, setName] = useState(user.email);
  const [fullname, setFullName] = useState(user.name);
  const [phone, setPhone] = useState(user.phone);
  const [address, setAddress] = useState(user.address);
  const [dob, setDob] = useState(user.dob);
  const [createdAt, setCreatedAt] = useState(user.createdAt);
  const [avatar, setAvatar] = useState(null);
  const [imagePath, setImagePath] = useState(user.avatar);
  const [show, setShow] = useState(false);

  const hanlderEditProfile = async () => {
    try {
      const result = await setPersonInformation(name, address, phone, imagePath, dob, createdAt);
      console.log(result);
      // Alert.alert('Success', 'Update success');
      ToastAndroid.show('cập nhập thành công', ToastAndroid.SHORT)
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  /// xử lý hình ảnh
  const takePhoto = useCallback(async response => {
    if (response.didCancel) return;
    if (response.errorCode) return;
    if (response.errorMessage) return;
    if (response.assets && response.assets.length > 0) {
      const asset = response.assets[0];
      setAvatar(asset.uri);
      setShow(false);
      // upload image
      const formData = new FormData();
      formData.append('image', {
        uri: asset.uri,
        type: asset.type,
        name: asset.fileName,
      });
      const result = await getUpdateImage(formData);
      console.log('>>>>>upload image: ', result.data.path);
      setImagePath(result.data.path);
      setAvatar(result.data.path);
      // console.log('>>>>>upload image: ', avatar);
    }
  }, []);

  /// camera chụp ảnh
  const openCamera = useCallback(async () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
      saveToPhotos: true,
    };
    await launchCamera(options, takePhoto);
  }, []);
/// thư viện image
  const openLibrary= useCallback(async () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
      saveToPhotos: true,
    };
    await launchImageLibrary(options, takePhoto);
  }, []);

  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <View style={styles.backgroudContainer}>
          <View style={styles.container}>
            <View style={styles.herderContainer}>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}>
                <Image source={require('../../../assets/IconCancel.png')} />
              </TouchableOpacity>
              <Text style={styles.textEditProfile}>Edit Profile</Text>
              <TouchableOpacity onPress={hanlderEditProfile}>
                <Image source={require('../../../assets/IconComplete.png')} />
              </TouchableOpacity>
            </View>
            <View style={styles.viewContainerAvatar}>
              <View style={styles.viewAvatar}>
                <View
                  style={{
                    width: 140,
                    height: 140,
                    backgroundColor: '#EEF1F4',
                    borderRadius: 70,
                  }}>
                    {imagePath && (<Image
                    style={{
                      height: 140,
                      width: 140,
                      objectFit: 'cover',
                      borderRadius: 70,
                    }}
                    source={{uri: imagePath}}
                  />)}
                  
                </View>
                <View style={styles.viewImageCamera}>
                  <TouchableOpacity
                    onPress={() => {
                      setShow(true);
                    }}>
                    <Image
                      style={{tintColor: 'white'}}
                      source={require('../../../assets/Camera.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.viewUsername}>
              <Text style={styles.textUsername}>Username</Text>
              <TextInput
                onChangeText={text => setName(text)}
                value={name}
                style={styles.textInputUserName}
              />
            </View>
            <View style={styles.viewUsername}>
              <Text style={styles.textUsername}>Full Name</Text>
              <TextInput value={fullname} onChangeText={text => setFullName(text)} style={styles.textInputUserName} />
            </View>
            <View style={styles.viewUsername}>
              <Text style={styles.textUsername}>Email Address</Text>
              <TextInput
                onChangeText={text => setAddress(text)}
                value={address}
                style={styles.textInputUserName}
              />
            </View>
            <View style={styles.viewUsername}>
              <Text style={styles.textUsername}>Phone Number</Text>
              <TextInput
                onChangeText={text => setPhone(text)}
                value={phone}
                style={styles.textInputUserName}
              />
            </View>
            <View style={styles.viewUsername}>
              <Text style={styles.textUsername}>Bio</Text>
              <TextInput onChangeText={text => setDob(text)} value={dob} style={styles.textInputUserName} />
            </View>
            <View style={styles.viewUsername}>
              <Text style={styles.textUsername}>Website</Text>
              <TextInput onChangeText={text => setCreatedAt(text)} value={createdAt} style={styles.textInputUserName} />
            </View>
          </View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={show}
            onRequestClose={() => {
              setShow(false);
            }}>
              
            <View style={styles.containerMODAL}>
            <TouchableOpacity onPress={() => {
                setShow(false);
              }}>
              <View style={{height:100, backgroundColor: 'white', borderTopEndRadius:20, borderTopStartRadius:20}}>
              {/* <TouchableOpacity
              onPress={() => {
                setModelVisible(false);
              }}>
                <Image style={{marginTop:10, marginStart:10}} source={require('../../../assets/IconCancel.png')}/>
                </TouchableOpacity> */}
              <View style={{flexDirection:'row',justifyContent: 'center',alignItems: 'center', marginTop:35}}>
                <View style={{flexDirection:'row', alignItems: 'center',}}>
                  <TouchableOpacity onPress={openCamera}>
                    <Image style={{tintColor:'black', width:30, height:30,}} source={require('../../../assets/Camera.png')} />
                  </TouchableOpacity>
                  <Text style={{marginStart:10, fontSize:20, color:'#000'}}>Chụp Hình</Text>
                </View>
                <View style={{flexDirection:'row', marginStart:40, alignItems: 'center',}}>
                  <TouchableOpacity onPress={openLibrary}>
                  <Image style={{tintColor:'black', width:30, height:30,}} source={require('../../../assets/ImageLibrary.png')} />
                  </TouchableOpacity>
                  <Text style={{marginStart:10, fontSize:20, color:'#000'}}>Thư viện</Text>
                </View>
              </View>
              </View>
            </TouchableOpacity>
            </View>
          </Modal>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  containerMODAL: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    justifyContent: 'flex-end',
    // alignItems: 'center',
    // flexDirection: 'row',
  },
  textInputUserName: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#4E4B66',
    marginTop: 4,
    padding: 10,
  },
  textUsername: {
    fontSize: 14,
    fontStyle: 'normal',
    color: '#4E4B66',
    fontWeight: '400',
    lineHeight: 21,
    letterSpacing: 0.12,
  },
  viewUsername: {
    marginTop: 16,
  },
  viewImageCamera: {
    height: 30,
    width: 30,
    backgroundColor: '#1877F2',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 17,
    bottom: 0,
  },
  viewContainerAvatar: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  viewAvatar: {
    height: 140,
  },
  textEditProfile: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.12,
    color: '#000',
  },
  herderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    marginHorizontal: 24,
    marginTop: 24,
    marginBottom: 8,
  },
  backgroudContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});
