import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState, useContext, createContext } from 'react'

// tạo kho chứa data chung của app
const AppContext = createContext();
const AppContextProvider = (props) => {
    const { children } = props;
    const [count, setCount] = useState(0);

    return (
        <AppContext.Provider
            value={{ count, setCount }}>
            {children}
        </AppContext.Provider>
    )
}
const ManHinh8_1 = (props) => {
    const { count } = useContext(AppContext)
    return (
        <View>
            <Text style={{fontSize: 40}}>{count}</Text>
        </View>
    )
}
const ManHinh8_2 = (props) => {
    const { count, setCount } = useContext(AppContext)
    return (
        <View>
            <Button title='Change count'
                onPress={() => setCount(count+1)}
                style={{ fontSize: 30 }} />
        </View>
    )
}
const ManHinh8 = () => {
    return (
        <AppContextProvider>
            <ManHinh8_1 />
            <ManHinh8_2 />
        </AppContextProvider>
    )
}

export default ManHinh8

const styles = StyleSheet.create({})