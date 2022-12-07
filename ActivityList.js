import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const activityListItem = ({ item }) => (
<View style={styles.activity_list_item}>
<Image
    style={styles.user_profile_img}
    source={{uri: item.user_profile_img}}
    />
<Text style={styles.user_name}>{item.user_name}</Text>
<Text style={styles.when_updated}>{item.when_updated}</Text>
<Image
    style={styles.menu_icon}
    source={{uri: item.menu_icon}}
    />
<Text style={styles.about_song}>{item.about_song}</Text>
<Image
    style={styles.song_cover}
    source={{uri: item.song_cover}}
    />
<Text style={styles.song_name}>{item.song_name}</Text>
<Text style={styles.singer_name}>{item.singer_name}</Text>
<Text style={styles.song_views}>{item.song_views}</Text>
<Image
    style={styles.group_icon}
    source={{uri: item.group_icon}}
    />
</View>
  );

const ActivityList = ({ item }) => (
<FlatList
    style={styles.activity_list}
    data={item}
    renderItem={activityListItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
);

export default ActivityList;

const styles = StyleSheet.create({
    'user_profile_img': {
        'width': '16vw',
        'height': '16vw',
        'marginTop': 5,
        'borderRadius': 50,
        'margin': 6
    },
    'user_name': {
        'color': '#060505',
        'fontSize': 18,
        'fontWeight': '500',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'when_updated': {
        'color': '#969292',
        'fontSize': 14,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'menu_icon': {
        'width': '2vw',
        'height': '10vw',
        'marginTop': 10,
        'marginLeft': 10
    },
    'about_song': {
        'fontSize': 13,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'marginVertical': 5
    },
    'song_cover': {
        'width': '20vw',
        'height': '20vw',
        'borderRadius': 6,
        'margin': 6
    },
    'song_name': {
        'color': '#0b0a0a',
        'fontSize': 16,
        'fontWeight': '500',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'singer_name': {
        'color': '#0b0909',
        'fontSize': 16,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'song_views': {
        'color': '#797777',
        'fontSize': 16,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'group_icon': {
        'width': '100vw',
        'height': '100vwvw',
        'margin': 1
    }
});