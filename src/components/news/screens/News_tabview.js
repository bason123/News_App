import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useState, useContext, useEffect } from 'react';
import { FONTFAMILY, FONTWEIGHT, FONTSTYLE } from '../../../constants/theme';
import { getNews } from '../NewsHTTP';
import { useNavigation } from '@react-navigation/native';


const News_tabview = ( props ) => {
    const news = props.news
    const text = props.text
    const news_show = news
    for(let i = 0 ; i < news.length; i++){
        // if(news[i].title.search(text)>=0){
            console.log(news[i].title.match(text))
        // }
    }
    const [data_news, setNews] = useState([])
    const navigation = useNavigation();
    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await getNews();
                setNews(response.data)
            } catch (error) {
                console.log(error);
                throw error;
            }
        }
        fetchData();
    }, [])
    const renderDataItem_tabNews = val => {
        const {
            _id,
            image,
            content,
            title
        } = val.item;
        return (
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('DetailScreen', {id: _id});
                }}>
                <View style={styles.viewItemBody}>
                    <Image
                        style={{
                            width: 96,
                            height: 96,
                            borderRadius: 6,
                            backgroundColor: 'red',
                        }}
                        source={{ uri: image }}
                    />
                    <View
                        style={{
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            marginStart: 4,
                        }}>
                        <Text numberOfLines={1} style={[styles.title, styles.textEurope]}>{title}</Text>
                        <Text numberOfLines={2} style={[styles.title, styles.textRussian]}>
                            {content}
                        </Text>
                        <View style={styles.viewContainerLogoBBC}>
                            <View style={styles.viewBBC}>
                                <Image
                                    style={{ width: 20, height: 20 }}
                                    source={require('../../../assets/LogoBBC.png')}
                                />
                                <Text style={[styles.title, styles.textBBC]}>BBC News</Text>
                            </View>
                            <View style={styles.viewTime}>
                                <Image
                                    style={{ width: 14, height: 14 }}
                                    source={require('../../../assets/Iconclock.png')}
                                />
                                <Text style={[styles.title, styles.textTime]}>4h ago</Text>
                            </View>
                            <View style={styles.viewIcon3dots}>
                                <Image
                                    style={{ width: 14, height: 14 }}
                                    source={require('../../../assets/Icon3dots.png')}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
    return (
        <View>
            <FlatList
                data={news}
                renderItem={renderDataItem_tabNews}
                key={item => item._id}
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                scrollEnabled={true}
            />
        </View>
    )
}

export default News_tabview

const styles = StyleSheet.create({
    viewItemBody: {
        flexDirection: 'row',
        width: '80%',
        padding: 8,
        marginTop: 16
      },
      title: {
        fontStyle: FONTSTYLE.normal,
        letterSpacing: 0.12,
      },
      textRussian: {
        fontSize: 16,
        fontWeight: FONTWEIGHT.four_hundred,
        lineHeight: 24,
        color: '#000',
      },
      textEurope: {
        fontSize: 13,
        fontWeight: FONTWEIGHT.four_hundred,
        lineHeight: 19.5,
        color: '#4E4B66',
      },
      viewContainerLogoBBC: {
        flexDirection: 'row',
        marginTop: 4,
      },
      viewBBC: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      textBBC: {
        marginStart: 4,
        fontWeight: FONTWEIGHT.six_hundred,
        fontSize: 13,
        lineHeight: 19.5,
        color: '#4E4B66',
      },
      viewTime: {
        flexDirection: 'row',
        alignItems: 'center',
        marginStart: 12,
      },
      textTime: {
        fontSize: 13,
        fontWeight: FONTWEIGHT.four_hundred,
        lineHeight: 19.5,
        color: '#4E4B66',
        marginStart: 4,
      },
      viewIcon3dots: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
      },
      container : {
        flex : 1,
        backgroundColor : 'white'
      }
})