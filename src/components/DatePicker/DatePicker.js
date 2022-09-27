import Calendar from 'react-calendar'

import 'react-calendar/dist/Calendar.css';
import './DatePicker.css'

export default function DatePicker(props) {
    const {pick} = props

    return (
        <div className='datePicker'>
            <Calendar className='calendar' onChange={pick} minDate={new Date()}/>
        </div>
    )
}
