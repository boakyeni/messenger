import React, {useRef, useEffect} from 'react'
/*
npm i moment react-moment
allows for better texttimestamps
*/
import Moment from 'react-moment'
const Message = ({msg, user1}) => {
    //smoths scrolling to the bottom when a new message is sent
    const scrollRef = useRef();
    useEffect(() => {
        scrollRef.current?.scrollIntoView({behavior: 'smooth'});
    }, [msg])
    return (
        <div className={`message_wrapper ${msg.from === user1 ? "own": ''}`} ref={scrollRef}>
            <p className={msg.from === user1 ? 'me': 'friend'}>
                {msg.media ? <img src={msg.media} alt={msg.text}/>:null}
                {msg.text}
                <br/>
                <small>
                    <Moment fromNow>{msg.createdAt.toDate()}</Moment>
                </small>
            </p>
        </div>
    )
}

export default Message;