import React, { useEffect, useState } from 'react'
import { Spinner } from "native-base";
import { View } from 'react-native';
import Loged from "../Loged";
import Login from "../Login";
export default function Account() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    setUser(false);
  }, [])
  if(user === null){
    return(
        <Spinner mt="50px"
        />
    )
  }
  if(user === true){
    return(
      <Loged />
    );
  }else{
    return(
      <Login />
    );
  }
}

