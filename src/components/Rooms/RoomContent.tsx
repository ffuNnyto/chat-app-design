import { useRef } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { LeftTextMessage, RightTextMessage } from './RoomChatMessage';

export default function ChatRoomContent() {


    let scrollView: any = useRef();


    const onContentSizeChange = () => { //Automatic scroll to end when chat apears
        //if (scrollView)
           // scrollView.current.scrollToEnd();
    }

    return (
        <View style={styles.messagingscreen}>
            <View

                style={[styles.backgroundImage, { backgroundColor: 'black' }]}
            >

                <View style={[styles.messagingscreen, { paddingVertical: 1, paddingHorizontal: 1 }]}>
                    <ScrollView
                        style={{ maxHeight: '90%' }}
                        ref={scrollView}
                        onContentSizeChange={onContentSizeChange}>


                        <RightTextMessage message='Right Short Message' />
                        <LeftTextMessage message='Left Short Message' />

                        <RightTextMessage message="qwertyuiopasdfghjklñzxcvbnmQWERTYUIOPASDFGHJKLÑZXCVBNM1234567890" />
                        <LeftTextMessage message="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />



                    </ScrollView>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    messagingscreen: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
    }
});