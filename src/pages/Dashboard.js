import React from 'react';
import { Info, User, Search, Navbar } from '../components'; // Repos,
import loadingImage from '../images/spin.gif';
import { GithubContext } from '../context/context';
const Dashboard = () => {
  const { isLoading } = React.useContext(GithubContext);
  if (isLoading) {
    return (
      <main>
        <Navbar />
        <Search />
        <img src={loadingImage} className='loading-img' alt='loding' />
      </main>
    );
  }
  return (
    <main>
      <Navbar></Navbar>
      <Search />
      <Info />
      <User />
      {/* <Repos /> */}
    </main>
  );
};

export default Dashboard;
