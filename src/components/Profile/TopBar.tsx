import { Header as HeaderRNE, Text, Icon, useTheme, Avatar } from '@rneui/themed';

export default function TopBar() {




    const LeftComponent = () => {
        return <Icon name={'qrcode'} type='antdesign' color={'white'} />
    }

    const RightComponent = () => {
        return <></>
    }




    return (
        <HeaderRNE

            containerStyle={{ backgroundColor: 'black', borderBottomWidth: 0 }}
            barStyle={'light-content'}
            backgroundColor={'transparent'}
            leftComponent={<LeftComponent />}
            rightComponent={<RightComponent />}
            centerComponent={
                <>
                    <Avatar
                        size={100}
                        rounded={true}
                        source={{ uri: 'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png' }}
                        avatarStyle={{
                            borderRadius: 50,
                            resizeMode: 'cover'
                        }}

                    >
                        <Avatar.Accessory size={23} name='add' color='white' style={{ backgroundColor: 'cyan' }} />
                    </Avatar>
                    <Text h4>UserName </Text>
                </>

            }
        />
    )
}



