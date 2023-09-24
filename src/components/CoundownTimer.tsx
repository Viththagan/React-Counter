import { useState, useEffect } from "react";
import { BsFillPlayFill, BsPauseFill, BsStopFill } from "react-icons/bs"
import { Timer } from "./Timer";

export const CountdownTimer = () => {
    const [hours, setHours] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);
    const [milliseconds, setMilliseconds] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [endMessage, setEndMessage] = useState<{ show: boolean, message: string }>({ show: false, message: "Happpy coding in 2023" });

    const startTimer = () => {
        if (hours != 0 || minutes != 0 || seconds != 0 || milliseconds != 0) {
            setIsRunning(true);
        }
    }

    const stopTimer = () => {
        setIsRunning(false);
    }

    const resetTimer = () => {
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        setMilliseconds(0);
        setIsRunning(false);
        setEndMessage({ ...endMessage, show: false });
    }

    useEffect(() => {
        let interval: number;
        if (isRunning) {
            interval = setInterval(() => {
                if (milliseconds > 0) {
                    setMilliseconds(milliseconds => milliseconds - 1);
                } else if (seconds > 0) {
                    setSeconds(seconds => seconds - 1);
                    setMilliseconds(99);
                } else if (minutes > 0) {
                    setMinutes(minutes => minutes - 1);
                    setSeconds(59);
                    setMilliseconds(99);
                } else if (hours > 0) {
                    setHours(hours => hours - 1);
                    setMinutes(59);
                    setSeconds(59);
                    setMilliseconds(99);
                } else {
                    setIsRunning(false);
                    setEndMessage({ ...endMessage, show: true });
                }
            }, 10);
        }
        return () => clearInterval(interval);
    },
        [hours, minutes, seconds, milliseconds, isRunning]);


    const changeHours = (e: React.ChangeEvent<HTMLInputElement>) => {
        const hours = Number(e.target.value) < 24 ? Number(e.target.value) : 0;
        setHours(hours);
    }

    const changeMinutes = (e: React.ChangeEvent<HTMLInputElement>) => {
        const minutes = Number(e.target.value) < 60 ? Number(e.target.value) : 0;
        setMinutes(minutes);
    }

    const changeSeconds = (e: React.ChangeEvent<HTMLInputElement>) => {
        const seconds = Number(e.target.value) < 60 ? Number(e.target.value) : 0;
        setSeconds(seconds);
    }

    const changeMilliseconds = (e: React.ChangeEvent<HTMLInputElement>) => {
        const milliseconds = Number(e.target.value) < 100 ? Number(e.target.value) : 0;
        setMilliseconds(milliseconds);
    }

    return <div>
        {endMessage.show && <h2 className="title">{endMessage.message}</h2>}
        <Timer
            hours={hours}
            minutes={minutes}
            seconds={seconds}
            milliseconds={milliseconds}
            changeHours={changeHours}
            changeMinutes={changeMinutes}
            changeSeconds={changeSeconds}
            changeMilliseconds={changeMilliseconds}
        />
        <br />
        {!isRunning && <button className="btn btn-accept btn-lg" onClick={startTimer}><BsFillPlayFill /></button>}
        {isRunning && <button className="btn btn-warning btn-lg" onClick={stopTimer}><BsPauseFill /></button>}
        <button className="btn btn-danger btn-lg" onClick={resetTimer}><BsStopFill /></button>
    </div>

}