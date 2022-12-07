import React from 'react'
import {  ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import ActivityList from './ActivityList'

const Feed = () => (
<ScrollView style={styles.feed} showsVerticalScrollIndicator={false}>
<ActivityList item={item.activity_list}/>
</ScrollView>
)

export default Feed;

const styles = StyleSheet.create({
    
});