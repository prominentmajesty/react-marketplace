import React, {useEffect, useState} from 'react';
import {getAuth, onAuthStateChanged, useRef} from 'firebase/auth';


function useAuthStatus() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [checkingStatus, setChakingStatus] = useState(true);

    const ismounted = useRef(true);

    useEffect(() => {
       if(ismounted){
            const auth = getAuth();
            onAuthStateChanged(auth, (user) => {
                if(user){
                    setLoggedIn(true);
                }
                setChakingStatus(false);
            });
       }

       return () => {
        ismounted.current = false;
       }

    }, [ismounted]);

  return (
    {loggedIn, checkingStatus}
  )
}

export default useAuthStatus