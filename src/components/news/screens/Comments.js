import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const Comments = () => {
  return (
    <View style={styles.backgroud}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity>
            <Image source={require('../../../assets/IconBackLeft.png')} />
          </TouchableOpacity>
          <Text style={styles.Comments}>Comments</Text>
        </View>
        <View style={styles.viewContentContainer}>
          <View>
            <Image
              style={{width: 40, height: 40}}
              source={require('../../../assets/PersonImage.png')}
            />
          </View>
          <View style={styles.commentsContainer}>
            <Text style={styles.nameComments}>Wilson Franci</Text>
            <Text numberOfLines={2} style={styles.contentComments}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
            <View style={styles.interactComments}>
              <Text style={styles.interactLetter}>4w</Text>
              <View style={styles.viewHeart}>
                <Image
                  style={{marginEnd: 5}}
                  source={require('../../../assets/IconHeart1.png')}
                />
                <Text style={styles.interactLetter}>125 likes</Text>
              </View>
              <View style={styles.viewReply}>
                <Image
                  style={{marginEnd: 5}}
                  source={require('../../../assets/IconReply.png')}
                />
                <Text style={styles.interactLetter}>Reply</Text>
              </View>
            </View>
            <View style={styles.viewSeeMore}>
              <Text style={styles.textSeeMore}>See more (1)</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.viewTextInputComment}>
          <TextInput
            style={styles.textInputComment}
            placeholder="Type your comment"
          />
        </View>
        <TouchableOpacity>
          <View style={styles.viewImagecomment}>
            <Image source={require('../../../assets/Frame.png')} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Comments;

const styles = StyleSheet.create({
    textSeeMore:{
        color:'#4E4B66',
        fontSize:16,
        fontStyle:'normal',
        fontWeight:'400',
        lineHeight:24,
        letterSpacing:0.12
    },
    viewSeeMore:{
        marginTop:8,
    },
  viewImagecomment: {
    backgroundColor: '#1877F2',
    marginEnd: 24,
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputComment: {
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    borderColor: '#4E4B66',
  },
  viewTextInputComment: {
    marginStart: 24,
    marginEnd: 10,
    flex: 1,
  },
  footer: {
    height: 78,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 1,
  },
  interactLetter: {
    color: '#4E4B66',
    fontSize: 13,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 19.5,
    letterSpacing: 0.12,
  },
  contentComments: {
    color: '#000',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.12,
  },
  nameComments: {
    color: '#000',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: 0.12,
  },
  viewReply: {
    flexDirection: 'row',
    alignItems: 'center',
    marginStart: 12,
  },
  viewHeart: {
    flexDirection: 'row',
    alignItems: 'center',
    marginStart: 12,
  },
  interactComments: {
    flexDirection: 'row',
    marginTop: 4,
  },
  commentsContainer: {
    width: '86%',
    marginStart: 8,
    justifyContent: 'space-between',
  },
  viewContentContainer: {
    marginTop: 17,
    flexDirection: 'row',
    padding: 8,
  },
  Comments: {
    color: '#000',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.12,
  },
  headerContainer: {
    width: '61%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    marginHorizontal: 24,
    marginTop: 24,
    flex: 1,
  },
  backgroud: {
    flex: 1,
    backgroundColor: 'white',
  },
});
