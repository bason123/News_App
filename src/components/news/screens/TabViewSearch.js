import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState, useContext, useEffect } from 'react';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import News_tabview from './News_tabview';
import Topics_tabview from './Topics_tabview';
import Author_tabview from './Author_tabview';
import { useNavigation } from '@react-navigation/native';

const TabViewSearch = ( props ) => {
    const navigation = useNavigation();
    const news = props.news
    const text = props.text
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'News', title: 'News' },
        { key: 'Topics', title: 'Topics' },
        { key: 'Author', title: 'Author' },
    ]);
    const renderScene = SceneMap({
        News:()=> <News_tabview news={news} text={text}/>,
        Topics: Topics_tabview,
        Author: Author_tabview
    });

    const renderTabBar = props => (
        <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: '#1877F2' }}
            style={{ backgroundColor: 'red', width: '100%', height: 0 }}
            pressColor='pink'
            renderLabel={({ route, focused }) => (
                <Text style={{ color: '#4E4B66', fontSize: 16, fontWeight: '400', lineHeight: 22 }}>
                    {route.title}
                </Text>
            )}
        />
    );
    return (
        <View style={styles.container}>
            <View style={styles.tabBar_fake}>
                <TouchableOpacity
                    onPress={() => {
                        setIndex(0)
                    }}
                >
                    <Text style={[(index == 0) ? styles.tabLabel_focus : styles.tabLabel_, { fontSize: 16, fontWeight: '400', lineHeight: 22 }]}>News</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        setIndex(1)
                    }}
                >
                    <Text style={[(index == 1) ? styles.tabLabel_focus : styles.tabLabel_, { fontSize: 16, fontWeight: '400', lineHeight: 22 }]}>Topics</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        setIndex(2)
                    }}
                >
                    <Text style={[(index == 2) ? styles.tabLabel_focus : styles.tabLabel_, { fontSize: 16, fontWeight: '400', lineHeight: 22 }]}>Author</Text>
                </TouchableOpacity>
            </View>
            <TabView
                navigationState={{ index, routes }}
                renderTabBar={renderTabBar}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: '100%', height: '100%' }}
            />

        </View>
    )
}

export default TabViewSearch
const styles = StyleSheet.create({
    tabLabel_: {
        borderWidth: 0,
        color: "#4E4B66",
    },
    tabLabel_focus: {
        borderBottomColor: '#1877F2',
        borderBottomWidth: 4,
        color: 'black'
    },
    tabBar_fake: {
        flexDirection: 'row',
        width: 178,
        justifyContent: 'space-between',
        alignSelf: 'center'
    },
    container : {
        flex : 1
    }
})