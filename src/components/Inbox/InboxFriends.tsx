import { Avatar, ListItem, Button } from '@rneui/themed';
import { TabActions, useNavigation } from '@react-navigation/native';

export default function InboxFriends() {


    const friends = [
        { name: 'Itero', lastMessage: 'Swip to Left', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScJXWdvwDZC0RF_VSzzP8aXSX9Sc_VPAtuew&usqp=CAU' },
        { name: 'Maria', lastMessage: 'Swip to Right', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuOWCBgwEuo_MxzJeQ3ScwMVRa3cqpkNfLvw&usqp=CAU' },
    ]

    const navigation = useNavigation();


    const jumpToChatRoom = () => {
        navigation.dispatch(TabActions.jumpTo('ChatRoom'))
    }


    return (
        <>

            {friends.map((room, idx) => {
                return (

                    <ListItem.Swipeable
                
                        onPressIn={jumpToChatRoom}
                        key={idx}
                        bottomDivider
                        onPress={() => { }}
                        onLongPress={(e) => e.preventDefault()}
                        leftContent={
                            <Button
                                title='Info'
                                onPress={() => { }}
                                icon={{ name: 'info', color: 'white' }}
                                buttonStyle={{ minHeight: '100%' }}
                            />
                        }
                        rightContent={(reset) => (
                            <Button
                                title='Delete'
                                onPress={() => reset()}
                                icon={{ name: 'delete', color: 'white' }}
                                buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
                            />
                        )}
                    >
                        <Avatar
                            size={40}
                            rounded
                            source={{ uri: room.imageUrl }}
                        />
                        <ListItem.Content>
                            <ListItem.Title>{room.name}</ListItem.Title>
                            <ListItem.Subtitle>{room.lastMessage}</ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem.Swipeable>
                )
            })}
        </>
    )
}