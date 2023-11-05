"use client"

import React, {useEffect, useState} from 'react'

const GetUserDetails = () => {
    const [userData, setUserData] = useState([]);
    const [mytrigger, setTrigger] = useState(false);

    useEffect(() => {
        const callAPI = async () => {
            const query = await fetch('api/school?userID=clokp4tzg0004soz46ntd21uy')
            const repo = await query.json();
            console.log(repo);
            setUserData(repo.user.name)
        }
        callAPI();
    }, [trigger]);

    <button onClick= (() => setTrigger(!mytrigger))>

        return (
            <div> 
                 <h3> 
                     {userData}
                 </h3>
            </div>
        );
}

export default GetUserDetails