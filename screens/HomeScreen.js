import { Alert, Image, ScrollView, StyleSheet, View } from 'react-native';
import { Button, Card, TextInput, Appbar, Avatar, Text, IconButton, Snackbar } from 'react-native-paper';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import lankaNIC from 'lanka-nic';
import lankaNICNew from 'lanka-nic-2019';
import defaultImg from '../assets/srilanka.jpg';

function HomeScreen() {
    const DEFAULT_IMAGE = Image.resolveAssetSource(defaultImg).uri

    const LeftContentDOB = () => (
        <Avatar.Icon
            color='white'
            icon="calendar-today"
            style={{ backgroundColor: 'green' }}
            size={45} />);

    const LeftContentGender = () => (
        <Avatar.Icon
            color='white'
            icon="gender-male-female-variant"
            style={{ backgroundColor: 'green' }}
            size={45} />);

    const LeftContentNewNic = () => (
        <Avatar.Icon
            color='white'
            icon="file-hidden"
            style={{ backgroundColor: 'green' }}
            size={45} />);

    const [nicNumber, setnicNumber] = React.useState('');
    const [visible, setVisible] = React.useState(false);
    const [newNICNumber, setnewNICNumber] = React.useState('');
    const [nicInfo, setnicInfo] = React.useState({ dateOfBirth: '', gender: '' });

    onRegisterBtnPress = () => {
        let isValid = lankaNICNew.validateNic(nicNumber);
        setnewNICNumber(lankaNICNew.swapNic(nicNumber))
        if (isValid == true) {
            setnicInfo(lankaNIC.getInfoFromNIC(nicNumber));
        }
        else {
            setVisible(!visible);
        }
    };

    const onclearPressed = () => {
        setnicNumber('');
        setnicInfo({ dateOfBirth: '', gender: '' });
        setnewNICNumber('');
    }

    const onDismissSnackBar = () => setVisible(false);

    return (
        <ScrollView>
            <View style={styles.container}>
                {/* <Icon name="youtube" size={30} color="#900" /> */}
                <Card>
                    <Card.Content style={styles.cardTytle}>
                        <Text variant="titleLarge">Sri Lanka NIC Info</Text>
                        <Text variant="bodyMedium">You can get general detals of a person using NIC</Text>
                    </Card.Content>
                    {/* <Card.Cover source={{ uri: 'https://picsum.photos/721' }} /> */}
                    <Card.Cover source={{ uri: DEFAULT_IMAGE }} />
                    <Card.Actions>
                        <Button>Cancel</Button>
                        <Button>Ok</Button>
                    </Card.Actions>
                </Card>

                <TextInput style={styles.txtNIC}
                    mode="flat"
                    label="Enter NIC Number"
                    value={nicNumber}
                    onChangeText={text => setnicNumber(text)}
                    right={<TextInput.Icon icon="account" />}
                />

                <Button
                    style={styles.getInfoBtn}
                    icon="account-arrow-right"
                    mode="contained"
                    onPress={onRegisterBtnPress}>
                    Get NIC Info
                </Button>
                <Button
                    style={styles.clearBtn}
                    icon="format-clear"
                    mode="contained-tonal"
                    onPress={onclearPressed}>
                    Clear
                </Button>

                <Card style={styles.smallCard}>
                    <Card.Title title="Your Gender" subtitle={nicInfo.gender.toUpperCase()} left={LeftContentGender} />
                    {/* <Card.Content style={styles.cardTytle}>
                        <Text variant="titleMedium">Your Gender : {nicInfo.gender.toUpperCase()}</Text>
                    </Card.Content> */}
                </Card>

                <Card style={styles.smallCard}>
                    <Card.Title title="Your Birthday" subtitle={nicInfo.dateOfBirth.toString()} left={LeftContentDOB} />
                    {/* <Card.Content style={styles.cardTytle}>
                        <Text variant="titleMedium">Your Birthday : {nicInfo.dateOfBirth.toString()}</Text>
                    </Card.Content> */}
                </Card>

                <Card style={styles.smallCard}>
                    <Card.Title title="Your NEW NIC Number" subtitle={newNICNumber.toString()} left={LeftContentNewNic} />
                    {/* <Card.Content style={styles.cardTytle}>
                        <Text variant="titleMedium">Your Birthday : {nicInfo.dateOfBirth.toString()}</Text>
                    </Card.Content> */}
                </Card>

                <View style={styles.snakBarContainer}>
                    <Snackbar
                        visible={visible}
                        onDismiss={onDismissSnackBar}
                        action={{
                            label: 'Ok',
                            onPress: onclearPressed
                        }}>
                        Invalid NIC Number. Try again !
                    </Snackbar>
                </View>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: '5%',
    },
    cardTytle: {
        marginBottom: '2%'
    },
    subtitle: {
        color: '#787575',
        fontSize: 15,
        marginBottom: '5%',
        fontWeight: 'bold',
    },
    txtNIC: {
        marginTop: '3%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginBottom: '3%'
    },
    getInfoBtn: {
        justifyContent: 'center',
        marginLeft: '10%',
        marginRight: '10%',
        marginBottom: '1%',
        marginTop: '2%',
        justifyContent: 'center'
    },
    clearBtn: {
        justifyContent: 'center',
        marginLeft: '10%',
        marginRight: '10%',
        marginBottom: '1%',
        marginTop: '2%',
        justifyContent: 'center'
    },
    smallCard: {
        margin: '1%',
        borderRadius: 10
    },
    snakBarContainer: {
        flex: 1,
        justifyContent: 'space-between',
    }
});

export default HomeScreen;
