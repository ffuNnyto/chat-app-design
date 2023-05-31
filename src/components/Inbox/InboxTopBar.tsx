
import { Header as HeaderRNE, useTheme, Colors, SearchBar } from '@rneui/themed';

export default function InboxTopBar() {

    const { theme } = useTheme()

    return (
        <HeaderRNE

            containerStyle={{ borderBottomWidth: 0, backgroundColor: 'black' }}
            barStyle={theme.mode === 'dark' ? 'light-content' : 'dark-content'}


            leftComponent={{
                icon: 'menu',
                color: theme.colors.primary,
                style: { marginTop: 10 }
            }}
            rightComponent={
                <></>
            }
            centerComponent={
                <SearchBar
                    inputContainerStyle={{
                        height: 15,
                        backgroundColor: theme.mode === 'dark' ? 'rgba(0,0,0,0.1)' : '#121212',
                        borderRadius: 15
                    }}
                    containerStyle={{
                        width: '100%',
                        backgroundColor: 'transparent',
                        borderTopWidth: 0,
                        borderBottomWidth: 0
                    }}
                    placeholder='Search...'
                    value={''}
                    onChangeText={() => { }}

                />
            }
        />
    )
}