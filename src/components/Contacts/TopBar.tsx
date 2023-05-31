import { Header as HeaderRNE, SearchBar, useTheme } from '@rneui/themed';

export default function ContactsTopBar() {

    const { theme } = useTheme()

    return (
        <>
            <HeaderRNE

                containerStyle={{ backgroundColor: 'black', borderBottomWidth: 0 }}
                barStyle={'light-content'}
                backgroundColor={'transparent'}

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
        </>
    )
}