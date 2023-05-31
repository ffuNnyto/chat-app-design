import { SpeedDial } from '@rneui/themed';
import { useState } from 'react';

export default function InboxDial() {

    const [open, setOpen] = useState(false);

    const handleSpeeDial = () => setOpen(!open)

    return (
        <SpeedDial
            overlayColor='transparent'
            isOpen={open}
            icon={{ name: 'edit', color: '#fff' }}
            openIcon={{ name: 'close', color: '#fff' }}
            onOpen={handleSpeeDial}
            onClose={handleSpeeDial}
        >
            <SpeedDial.Action
                icon={{ name: 'add', color: '#fff' }}
                title='Group'
                onPress={() => console.log('Add Something')}
            />
            <SpeedDial.Action
                icon={{ name: 'qrcode-scan', type: 'material-community', color: '#fff' }}
                title='QR'
                onPress={() => console.log('Delete Something')}
            />
        </SpeedDial>
    )
}