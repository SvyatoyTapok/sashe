import styles from './styles.module.css';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../Store/store';
import { closeModal } from '@/app/Store/modalSlice';
import Calendar from 'react-calendar';
import './Calendar.css';
import TimeItem from './TimeItem/TimeItem';

export default function Popup() {
    const dispatch = useDispatch();
    const isOpen = useSelector((state: RootState) => state.modal.isOpen);
    const [value, setValue] = useState(new Date());
    const [timeValue, setTimeValue] = useState('10:00');
    const [clicked, setIsClicked] = useState(false);
    const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => {
            setIsClicked(false);
        }, 100);
    };
    const nextMonth = new Date();
    nextMonth.setMonth(nextMonth.getMonth() + 2);
    if (nextMonth.getMonth() !== (new Date().getMonth() + 2) % 12) {
        nextMonth.setDate(0);
    }
    const dateTime = new Date(value);
    const [hours, minutes] = timeValue.split(':').map(Number);
    dateTime.setHours(hours, minutes, 0, 0);

    return isOpen ? (
        <div onClick={() => dispatch(closeModal())} className={styles.container}>
            <div onClick={(e) => e.stopPropagation()} className={styles.window}>
                <div className={styles.mainText}>Запись</div>
                <div className={styles.flexContainer}>
                    <div className={styles.calendarContainer}>
                        <Calendar
                            showNavigation={false}
                            minDate={new Date()}
                            maxDate={nextMonth}
                            onChange={(date) => { if (date instanceof Date) setValue(date); }}
                            value={value}
                        />
                    </div>
                    <div className={styles.rightColumn}>
                        <p>Дата:&nbsp;</p>
                        <div style={{ color: '#CBBFCC' }}>
                            {value.toLocaleDateString('ru-RU', { day: '2-digit', month: 'long', year: 'numeric' })}
                        </div>
                        {timeValue
                            ? <div>{'Время'}<div style={{ color: '#CBBFCC' }}>{timeValue}</div></div>
                            : <div>{'Время: не выбрано'}</div>
                        }
                        <div className={styles.timesContainer}>
                            <TimeItem
                                timeValue={timeValue}
                                value={"10:00"}
                                onClick={() => setTimeValue('10:00')}
                                setTimeValue={setTimeValue}
                            />
                            <TimeItem
                                timeValue={timeValue}
                                value="15:00"
                                onClick={() => setTimeValue('15:00')}
                                setTimeValue={setTimeValue}
                            />
                            <TimeItem
                                timeValue={timeValue}
                                value="20:00"
                                onClick={() => setTimeValue('20:00')}
                                setTimeValue={setTimeValue}
                            />
                        </div>
                        <div
                            style={clicked ? { transform: 'scale(0.95)' } : {}}
                            className={styles.acceptButton}
                            onClick={handleClick}
                        >{'Записаться'}</div>
                    </div>
                </div>
            </div>
        </div>
    ) : null;
}