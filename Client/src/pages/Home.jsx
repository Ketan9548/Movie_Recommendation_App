import React from 'react'
import { useContext } from 'react'
import { ApplicationApi } from '../context/ApplicationAPI';

const Home = () => {
  const { usertoken } = useContext(ApplicationApi);
  return (
    <div>
      {usertoken ? (
        <p>Welcome to the Movie Recommendation App!</p>
      ) : (
        <p>Please log in to access the app.</p>
      )}
    </div>
  )
}

export default Home
