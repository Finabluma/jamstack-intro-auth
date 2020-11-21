import React from 'react';
import {Link} from 'gatsby';
import {useIdentityContext} from 'react-netlify-identity';

const Profile = () => {
  const identity = useIdentityContext();

  // console.log(identity)

  return (
    <div className = 'dashboard-header'>
      <nav>
        <Link to='/dashboard/secret' activeClassName='active'>
          Secret Stuff
        </Link>
        <Link to='/dashboard/base' activeClassName='active'>
          See your base
        </Link>
      </nav>
      <span>TODO: show login Status</span>
    </div>
  )
}

export default Profile;