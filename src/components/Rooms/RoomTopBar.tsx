import { TabActions, useNavigation } from '@react-navigation/native';
import { Colors, Theme, Header as HeaderRNE, Text, Icon, Avatar } from '@rneui/themed';
import { FC } from 'react';
import { View } from 'react-native';


export default function ChatRoomTopBar() {


    const { dispatch } = useNavigation();

    const goBack = () => {
        dispatch(TabActions.jumpTo('Inbox'))
    }


    return (

        <HeaderRNE


            barStyle={'dark-content'}
            backgroundColor='black'
            leftComponent={
                <View style={{ flexDirection: 'row' }}>
                    <Icon color='white' name='arrow-left' type='feather' onPress={goBack} />
                    <Avatar source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuOWCBgwEuo_MxzJeQ3ScwMVRa3cqpkNfLvw&usqp=CAU' }} containerStyle={{ marginLeft: 10 }} rounded avatarStyle={{}} />
                </View>
            }
            rightComponent={{
                icon: 'dots-three-vertical',
                type: 'entypo',
                color: 'white'
            }}
            centerComponent={
                <Text style={{ fontSize: 18, marginTop: 5, color: 'purple' }}>ChatRoom Username</Text>
            }
        />

    );
}