import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useState, useContext, useEffect } from 'react';
import { FONTFAMILY, FONTWEIGHT, FONTSTYLE } from '../../../constants/theme';
import TabViewSearch from './TabViewSearch';
import { useNavigation } from '@react-navigation/native';



const Search = ({ route, props }) => {
    const { textSearch, news } = route.params;
    const [text, settextSearch] = useState(textSearch)
    const navigation = useNavigation();
    const pass = {
        news: news,
        text: text
    }
    return (
        <View style={styles.container}>
            <View style={styles.viewContainerSearch}>
                <Image source={require('../../../assets/search.png')} />
                <TextInput
                    style={[styles.title, styles.textInputSearch]}
                    placeholder="Search"
                    value={text}
                    onChangeText={text => settextSearch(text)}
                    autoFocus={true}
                />
                {
                    text.trim().length > 0 ?
                        <TouchableOpacity
                            onPress={() => { settextSearch("") }}
                        ><Image source={require('../../../assets/exit.png')} /></TouchableOpacity>
                        : null
                }

            </View>

            <TabViewSearch news={news} text={text}></TabViewSearch>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({

    textInputSearch: {
        fontSize: 14,
        fontWeight: FONTWEIGHT.four_hundred,
        lineHeight: 21,
        color: 'black',
        height: 21,
        flex: 1,
        paddingTop: -10,
        paddingBottom: -10
    },
    viewContainerSearch: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 6,
        borderColor: "#4E4B66",
        height: 48,
        padding: 10,
        width: '100%',
        marginBottom: 16
    },
    container: {
        flex: 1,
        paddingTop: 24,
        paddingHorizontal: 24,
        backgroundColor: 'white'
    }
})