import React, { useState, useEffect } from 'react';
import MkdSDK from '../utils/MkdSDK';


const Leaderboard = () => {

    const [videos, setVideos] = useState({});
    let sdk = new MkdSDK();
    useEffect(() => {
        let headers = sdk.getHeader();
        fetch('https://reacttask.mkdlabs.com/v1/api/rest/video/PAGINATE', {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                ...headers
            },
            "body": JSON.stringify({
                "payload": {},
                "page": 1,
                "limit": 10
            })
        })
            .then(videoResult => {
                console.log(videoResult);
            })

    }, []);
    return (
        <div className='w-3/4  mt-16'>
            <div className='w-full flex justify-between items-center'>
                <h1 className='text-gray-300 text-4xl font-thin ' >Today's leaderboard</h1>
                <div className='w-6/12 py-3 bg-gray-900 text-gray-400 text-lg 
                flex justify-evenly items-center border rounded-2xl border-transparent'>
                    <h3>30 May 2022</h3>
                    <button
                        className='px-3 py-0.5 bg-lime-400 text-gray-600 font-extralight 
                    border-transparent border rounded-lg' >SUBMISSIONS OPEN</button>
                    <h3>11:34</h3>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Leaderboard;


export function formatDate(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear() + " " + strTime;
}
