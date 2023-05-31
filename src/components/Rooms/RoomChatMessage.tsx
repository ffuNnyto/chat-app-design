
import React from 'react';
import { View, TouchableWithoutFeedback, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';





export const RightTextMessage: React.FC<{ message: string }> = ({ message }) => {

    return (




        <View style={{ alignSelf: 'flex-end', minWidth: 200, padding: 15, borderRadius: 20, marginRight: 5, marginTop: 5 }}>
            <LinearGradient
                colors={['#411CD7', '#B713C8']}
                style={{ padding: 10, borderRadius: 10 }}>
                <Text style={{ maxWidth: 230, color: 'white' }}>
                    {message}
                </Text>
            </LinearGradient>
        </View>


    )

}
export const LeftTextMessage: React.FC<{ message: string }> = ({ message }) => {



    return (
        <TouchableWithoutFeedback onLongPress={(e) => {
            console.log(message)
        }}>
            <View style={{ alignSelf: 'flex-start', minWidth: 200, padding: 15, borderRadius: 20, marginLeft: 5, marginTop: 5 }}>
                <LinearGradient
                    colors={['#193CAB', '#50A87F']}
                    style={{ padding: 10, borderRadius: 10 }}>
                    <Text style={{ maxWidth: 230, color: 'white' }}>
                        {message}
                    </Text>
                </LinearGradient>
            </View>
        </TouchableWithoutFeedback>

    );
}