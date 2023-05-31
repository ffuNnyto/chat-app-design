import { Colors, Icon, Input, Theme } from '@rneui/themed';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, View, TouchableWithoutFeedback, StyleSheet } from 'react-native';

export default function ChatRoomFooter() {


    const [value, setValue] = useState('')

    const sendMessage = () => {

        setValue('')

    }


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={0}
            style={{ width: '100%', backgroundColor: 'transparent' }}
        >

            <View style={styles.messaginginputContainer}>
                <Input

                    inputContainerStyle={{ borderBottomWidth: 0 }}
                    inputStyle={styles.messaginginput}
                    placeholder='...'
                    returnKeyType='send'
                    leftIcon={{ type: 'feather', name: 'image', color: 'purple' }}
                    rightIcon={
                        value.length === 0 ?
                            { type: 'font-awesome', name: 'microphone', color: 'purple' }
                            :
                            { type: 'feather', name: 'send', color: 'purple', onPress: sendMessage }
                    }
                    onChangeText={setValue}
                    value={value}
                    onSubmitEditing={sendMessage}


                />
            </View>



        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    bottom: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0
    },
    messaginginputContainer: {
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: Platform.OS === 'ios' ? 15 : 0
    },
    messaginginput: {
        flex: 1,
        justifyContent: 'center',
        minHeight: 30,
        borderRadius: 10,
        color: 'white',
        margin: 5,
        padding: 5,
        backgroundColor: 'rgba(0,0,0,0.1)'
    },
});