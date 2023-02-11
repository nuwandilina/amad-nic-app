import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Card, TextInput, Appbar, Avatar, Text } from 'react-native-paper';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function AppTitleBar() {
    return (
        <Appbar.Header style={styles.appBar}>
            <Appbar.Content color='white' title="NIC App"/>
            <Appbar.Action color='white' icon="magnify"  />
            <Appbar.Action color='white' icon="dots-vertical"  />
        </Appbar.Header>
    )
}

const styles = StyleSheet.create({
    appBar: {
        backgroundColor: '#603680',
    }
});

export default AppTitleBar;