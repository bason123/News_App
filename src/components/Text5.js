import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState, useCallback} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { getUpdateImage } from './news/NewsHTTP';

const ManHinh9 = props => {
  // ẩn hiện modal
  const [show, setShow] = useState(false);
  const [image, setImage] = useState(null);

  const [imagePath, setImagePath] = useState(null);
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);

  const onPress = () => {
    setShow(true); // hiện modal
  };

  const takePhoto = useCallback(async response => {
    if (response.didCancel) return;
    if (response.errorCode) return;
    if (response.errorMessage) return;
    if (response.assets && response.assets.length > 0) {
      const asset = response.assets[0];
      setImage(asset.uri);
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
    }
  }, []);

  // mở máy ảnh
  const openCamera = useCallback(async () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
      saveToPhotos: true,
    };
    await launchCamera(options, takePhoto);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30}}>Màn hình 9</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={{fontSize: 30, color: 'red'}}>Mở modal</Text>
      </TouchableOpacity>
      {image && (
        <Image source={{uri: image}} style={{width: 300, height: 300}} />
      )}

      <Modal
        animationType="slide"
        transparent={true}
        visible={show}
        onRequestClose={() => {
          setShow(false);
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              onPress={() => {
                setShow(false);
              }}>
              <Text>Đóng modal</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={openCamera}>
              <Text style={{fontSize: 30}}>Chụp ảnh</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setShow(false);
              }}>
              <Text style={{fontSize: 30}}>Chọn ảnh</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ManHinh9;

const styles = StyleSheet.create({
  modalContent: {
    width: '100%',
    height: '70%',
    backgroundColor: 'white',
    borderRadius: 20,
  },
  modalContainer: {
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
