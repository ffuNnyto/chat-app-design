import MobileContacts from '../../components/Contacts/MContacts';
import PendingContacts from '../../components/Contacts/PContacts';
import ContactsTopBar from '../../components/Contacts/TopBar';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

export default function Contacts() {
    return (
        <>
            <ContactsTopBar />
            <Tab.Navigator>
                <Tab.Screen name='PendingContacts' component={PendingContacts} />
                <Tab.Screen name='MobileContacts' component={MobileContacts} />
            </Tab.Navigator>
        </>
    )
}