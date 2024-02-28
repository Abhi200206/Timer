import { useState } from "react";
export default function Time(props) {
    let sound=new Audio('./alarm.wav');
    if(props.bool && props.mins<1)
    {
        return (
            alert("only above 0 are allowed")
        )
    }
    let secs = props.mins * 60;
    let col = 100 / (secs-1);

    const [count, setCount] = useState({
        min: 0,
        sec: 0,
        wid: 100,
        csec: 0
    });

    return (
        <div className="flex justify-center">
            <div>
                <div
                    onClick={() => {
                        let interval = setInterval(() => {
                            setCount((c) => {
                            if (c.csec < secs) {
                                
                                    if (c.sec === 59) {
                                        return {
                                            ...c,
                                            sec: 0,
                                            min: c.min + 1,
                                            csec: c.csec + 1
                                        };
                                    } else {
                                        return {
                                            ...c,
                                            sec: c.sec + 1,
                                            wid: c.wid - col,
                                            csec: c.csec + 1
                                        };
                                    }
                               
                            } else {
                                sound.play();
                                clearInterval(interval);
                                    return {
                                        ...c,
                                        min: 0,
                                        sec: 0,
                                        wid: 100,
                                        csec: 0
                                    }
    
                            } });
                        }, 1000);
                    }}
                    className="my-2 rounded cursor-pointer bg-black text-white flex justify-center w-[200px]"
                >
                    Start
                </div>
                <div
                    className={`border rounded border-[1px] w-100 text-center`}
                    style={{
                        backgroundImage: `linear-gradient(to right, white ${count?.wid}%, #34d399 ${count?.wid}%)`
                    }}
                >
                    <p>Time   {count.min}:{count.sec}</p>
                </div>
            </div>
        </div>
    );
}
