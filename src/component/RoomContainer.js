import React from 'react';
import { RoomConsumer } from '../context';
import RoomFilter from './RoomFilter';
import Loading from './loading'
import RoomList from './RoomList';

export default function RoomContainer() {
    return (
        <RoomConsumer>
            {value=>{
                const {loading,sortedRooms,rooms}=value;
                if(loading){
                    return <Loading/>
                }
                return( 
                <>
                
                <RoomFilter rooms={rooms}/>
                <RoomList rooms={sortedRooms}/>
                </>
                );
            }}
        </RoomConsumer>
       
    )
}
