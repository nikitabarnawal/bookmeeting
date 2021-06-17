import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { gql, useMutation } from '@apollo/client';

const ADD_MEETING = gql`
  mutation Meeting (
    $id:Int!
    $title:String!
    $startTime:String!
    $endTime:String!
    $date:String!
    $meetingRoomId:Int!
  )
  {
  Meeting(
    id:$id
    title:$title
    startTime:$startTime
    endTime:$endTime
    date:$date
    meetingRoomId:$meetingRoomId
  ) {
    id
    title
    startTime
    endTime
    date
  }
}
`;


const SavedRoom = () => {
  const location = useLocation();
  const [Meeting] = useMutation(ADD_MEETING);


  useEffect(() => {
    const randomId = Math.floor(Math.random() * 100);
    try {
      Meeting({
        variables: {
          id: randomId,
          title: location.state.data.title,
          startTime: location.state.data.startTime,
          endTime: location.state.data.endTime,
          date: location.state.data.date,
          meetingRoomId: location.state.data.meetingRoomId,

        }
      });
    }
    catch (error) {
      console.log("error returned", error);
      return error;
    }

  }, []);

  return (
    <div className="mainContainer">
      <div className="card">
        <div className="container">
          <h4><b>Saved Meeting Room details:</b></h4>
          <p>MeetingRoom:{location.state.data.meetingRoomName}</p>
          <p>Building:{location.state.data.building}</p>
          <p>Floor:{location.state.data.floor}</p>
        </div>
      </div>
    </div>

  )
}

export default SavedRoom;
