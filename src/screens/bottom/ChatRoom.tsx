import ChatRoomContent from '../../components/Rooms/RoomContent';
import ChatRoomFooter from '../../components/Rooms/RoomFooter';
import ChatRoomTopBar from '../../components/Rooms/RoomTopBar';

export default function ChatRoom() {
    return (
        <>
            <ChatRoomTopBar />
            <ChatRoomContent />
            <ChatRoomFooter />
        </>
    )
}