import React, { useEffect, useRef, useState } from 'react'

export const Countdown = () => {
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('April 1, 2024 00:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                //Stop timer
                clearInterval(interval.current);
            } else {
                //Update timer
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        }, 1000);
    };

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        }
    })
    return (
        <div className='landing-page'>
            <div className='letter'>
                Slap Schedule
            </div>
            <section >
                <div className='timer-header'>
                    <span ></span>
                    <h2>Countdown Timer</h2>

                </div>
                <div className='clock'>
                    <section>
                        <p>{timerDays}</p>
                        <p>Days</p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{timerHours}</p>
                        <p>Hours</p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{timerMinutes}</p>
                        <p>Minutes</p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{timerSeconds}</p>
                        <p>Seconds</p>
                    </section>


                </div>
            </section>
            <div className='bro-code'>
            </div> &nbsp;
            <div className='bro-text'>
                article 151: A gentlemen's agreement never shall be broken,
                Unless your brother decides to set you free in the gentlemen's agreement.
            </div>
        </div>
    )
}
