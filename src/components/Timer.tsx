import styled from "styled-components";

const TimeWrapper = styled.div`
    margin-top: 30vh;
    width: 600px;
    margin-left: auto;
    margin-right: auto;
    background-color: #222;
    color: #eee;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 5px 4px 6px rgba(0, 0, 0, 0.4);
    padding: 1rem 0;

    label {
        margin-bottom: 0.5rem;
    };
    
    input {
        width: 100px;
        margin-right: 1rem;
        color: #282c34;
        outline: none;
        border: none;
        font-size: 4.5rem;
        font-weight: 600;
        text-align: center;
        padding: 0rem 0.5rem;
        border-radius: 5px;
    };

    input:hover {
        background-color: #928f8f;
    };
`;

interface Props {
    hours: number;
    minutes: number;
    seconds: number;
    milliseconds: number;
    changeHours(e: React.ChangeEvent<HTMLInputElement>): void;
    changeMinutes(e: React.ChangeEvent<HTMLInputElement>): void;
    changeSeconds(e: React.ChangeEvent<HTMLInputElement>): void;
    changeMilliseconds(e: React.ChangeEvent<HTMLInputElement>): void;
}

export const Timer = ({ hours, minutes, seconds, milliseconds, changeHours, changeMinutes, changeSeconds, changeMilliseconds }: Props) => {

    return <div>
        <TimeWrapper>
            <div className="d-flex flex-column">
                <label>hh</label>
                <input type="text" value={hours} onChange={changeHours} />
            </div>
            <div className="d-flex flex-column">
                <label>mm</label>
                <input type="text" value={minutes} onChange={changeMinutes} />
            </div>
            <div className="d-flex flex-column">
                <label>ss</label>
                <input type="text" value={seconds} onChange={changeSeconds} />
            </div>
            <div className="d-flex flex-column">
                <label>ms</label>
                <input type="text" value={milliseconds} onChange={changeMilliseconds} />
            </div>
        </TimeWrapper>
    </div>

}