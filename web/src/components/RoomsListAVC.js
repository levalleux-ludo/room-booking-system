import React from 'react'
import RoomRow from './RoomRow'
import { roomSorter } from '../helpers/sorter'
import moment from 'moment'

const RoomsListAVC = props => (
  <div className="header__page">
  <h2 className="header__heading header__heading--sub">{props.date === null ? new Date() : moment(props.date).format('MMMM Do YYYY')}</h2>

  <table className="table">
    <tr className="table__row table__row--header">
      <th scope="col" className="table__cell--header table__cell--align-left">
        Room
      </th>
      <th scope="col" className="table__cell--header">
        8am
      </th>
      <th scope="col" className="table__cell--header">
        9am
      </th>
      <th scope="col" className="table__cell--header">
        10am
      </th>
      <th scope="col" className="table__cell--header">
        11am
      </th>
      <th scope="col" className="table__cell--header">
        12pm
      </th>
      <th scope="col" className="table__cell--header">
        1pm
      </th>
      <th scope="col" className="table__cell--header">
        2pm
      </th>
      <th scope="col" className="table__cell--header">
        3pm
      </th>
      <th scope="col" className="table__cell--header">
        4pm
      </th>
      <th scope="col" className="table__cell--header">
        5pm
      </th>
      <th scope="col" className="table__cell--header">
        6pm
      </th>
      <th scope="col" className="table__cell--header">
        7pm
      </th>
      <th scope="col" className="table__cell--header">
        8pm
      </th>
    </tr>
    <tbody className="table__body">
      {props.rooms &&
        props.rooms.map(room => (
          <RoomRow
            key={room._id}
            room={room}
            bookings={room.bookings}
            date={props.date === null ? new Date() : props.date}
            onShowBooking={props.onShowBooking}
            onSetRoom={props.onSetRoom}
          />
        ))}
    </tbody>
  </table></div>

)

export default RoomsListAVC
