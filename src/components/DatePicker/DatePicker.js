import Calendar from 'react-calendar'
import './DatePicker.css'
import 'react-calendar/dist/Calendar.css';

export default function DatePicker(props) {
    const {pick} = props

    return (
        <div>
            <Calendar onChange={pick}/>
        </div>
    )
}
