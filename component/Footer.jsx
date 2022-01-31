import React from 'react';
import styles from "../styles/Footer.module.css"
import Image from 'next/image';

const Footer = () => {
    return (
    
    <div className={styles.container}>
        <div className={styles.item}>
            <Image src="/img/bg.png" layout="fill" alt=""/>
        </div>
        <div className={styles.item}>
            <div className={styles.card}>
                 <h2 className={styles.motto}>
                   FRESH AND DELICIOUS DOUBLE CHEESE BURGER.
                </h2>
        </div>
        <div className={styles.card}>
            <h1 className={styles.title}> FIND OUR RESTAURANTS.</h1>
            <p className={styles.text}>
                5th khoroo chingeltei #304;
                <br/> Ulaanbaatar
                <br/> 99887766
            </p>
            <p className={styles.text}>
                5th khoroo chingeltei #304;
                <br/> Ulaanbaatar
                <br/> 99887766
            </p>
            <p className={styles.text}>
                5th khoroo chingeltei #304;
                <br/> Ulaanbaatar
                <br/> 99887766
            </p>
            <p className={styles.text}>
                5th khoroo chingeltei #304;
                <br/> Ulaanbaatar
                <br/> 99887766
            </p>
        </div>
        <div className={styles.card}>
            <h1 className={styles.title}>WORKING HOURS</h1>
            <p className={styles.text}>
                MONDAY UNTIL FRIDAY
                <br/> 9:00 - 21:00
            </p>
        </div>
        </div>
    </div>

    );
    };

export default Footer;
