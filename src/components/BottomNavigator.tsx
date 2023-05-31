import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Contacts from '../screens/bottom/Contacts';
import { Icon } from '@rneui/themed';
import Inbox from '../screens/bottom/Inbox';
import Profile from '../screens/bottom/Profile';
import ChatRoom from '../screens/bottom/ChatRoom';

const Tab = createBottomTabNavigator();


export default function BottomNavigator() {
    return (

        <Tab.Navigator sceneContainerStyle={{ backgroundColor: '#121212' }}>
            <Tab.Screen

                name='Contacts'
                component={Contacts}
                options={{
                    tabBarStyle: { backgroundColor: 'black' },
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({ size }) => <Icon
                        name='contacts'
                        type='antdesign'
                        size={size}
                    />
                }}
            />

            <Tab.Screen
                name='Inbox'
                component={Inbox}
                options={{
                    tabBarStyle: { backgroundColor: 'black' },
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({ size }) => <Icon
                        name='md-chatbubbles-outline'
                        type='ionicon'
                        size={size}
                    />
                }}
            />

            <Tab.Screen
                name='Profile'
                component={Profile}
                options={{
                    tabBarStyle: { backgroundColor: 'black' },
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({ size }) => <Icon
                        name='person-circle-outline'
                        type='ionicon'
                        size={size}
                    />
                }}
            />


            <Tab.Screen
                name='ChatRoom'
                component={ChatRoom}
                options={{
                    tabBarItemStyle: { display: 'none' },
                    headerShown: false,
                    tabBarStyle: { display: 'none' },
                    tabBarShowLabel: false,
                }}
            />


        </Tab.Navigator>

    )
}