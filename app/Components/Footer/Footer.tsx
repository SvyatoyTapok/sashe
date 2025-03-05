'use client'
import styles from './styles.module.css';
import React from 'react';
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

export default function Footer() {

    return (
        <div className={styles.container}>
            <div className={styles.addressContainer}>
                <p className={styles.mainText}>Адрес: Сазанова 6</p>
                <YMaps>
                    <Map
                        defaultState={{
                            center: [56.238637, 43.835181],
                            zoom: 13,
                        }}
                        width="100%"
                        height="350px"
                    >
                        <Placemark geometry={[56.238637, 43.835181]} />
                    </Map>
                </YMaps>
                <p className={styles.mainText}>Время работы:</p>
                <p className={styles.secondText}>Ежедневно с 10:00-22:00 по предварительной записи</p>
            </div>
            <div className={styles.phoneContainer}>
                <p className={styles.mainText}>Телефон и e-mail:</p>
                <a href={'tel:+7 (904) 926 60-51'} className={styles.secondText}>+7 (904) 926 60-51</a>
                <a href={'mailto:osssmanova@mail.ru'} className={styles.secondText}>osssmanova@mail.ru</a>
            </div>
        </div>
    );
}