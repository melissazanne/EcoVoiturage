import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ListItem, SearchBar, Avatar } from "react-native-elements";
import MoreFunction from '../data/MoreFunction';
const More = ({ navigation }) => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>

                <FlatList
                    data={MoreFunction}
                    keyExtractor={(item) => item.key}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => { }}>
                                <ListItem bottomDivider>
                                    <Avatar source={{uri:item.moreImage}} rounded style={styles.avatar} />
                                    <ListItem.Content>
                                        <ListItem.Title  style={styles.Morename}>{item.name}</ListItem.Title>        
                                    </ListItem.Content>
                                    <ListItem.Chevron />
                                </ListItem>
                            </TouchableOpacity>
                        )
                    }}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

export default More


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 200
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
        marginRight: 16
    },
    Morename:{
        color:'#3f51b5',
    }
})