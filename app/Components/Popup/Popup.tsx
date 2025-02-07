import styles from './styles.module.css'
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../Store/store';
import { closeModal } from '@/app/Store/modalSlice'
import { useDispatch } from 'react-redux';
import { Calendar } from '../Calendar/Calendar';

export default function Popup() {
    const dispatch = useDispatch();
    const isOpen = useSelector((state: RootState) => state.modal.isOpen);
    const [selectedDate, setSelectedDay] = React.useState(new Date());
    console.log(selectedDate)
    return isOpen ? (
        <div onClick={() => dispatch(closeModal())} style={isOpen ? { opacity: 1, visibility: 'visible' } : { opacity: 0, visibility: 'hidden' }} className={styles.container}>
            <div onClick={(e) => e.stopPropagation()} className={styles.window}>
                <Calendar selectDate={(date) => setSelectedDay(date)} selectedDate={selectedDate} />
            </div>
        </div>
    ) : null
}