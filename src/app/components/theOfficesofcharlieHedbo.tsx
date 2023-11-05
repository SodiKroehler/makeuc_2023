"use client"

import React, {useEffect, useState} from 'react'

const GetUserDetails = () => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const callAPI = async () => {
            const query = await fetch('api/user?userID=clokp4tzg0004soz46ntd21uy')
            const repo = await query.json();
            console.log(repo);
            setUserData(repo.user.name)
        }
        callAPI();
    }, []);



        return (
            <div> 
                 <h3> 
                     {userData}
                 </h3>
            </div>
        );
}

export default GetUserDetails