import React from 'react';
import NavBar from '../NavBar';
import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';
import './India.css'

const Ukrain = () => {
  const token = Cookies.get('jwt_token')
  if (token === undefined){
    return <Navigate to='/'/>
  }

  return (
    <div>
      <NavBar/>
      <div className='app-container1'>
        <h1 className='head1'>Welcome to the ukrain</h1>
        <p className='para1'>Ukraine marks 30 years of independence this week with much to celebrate and plenty to regret. Three decades after the Soviet collapse, today’s Ukraine remains among Europe’s poorest and most corrupt countries, but it has succeeded in consolidating the transition to democracy and cultivated a strong sense of national identity that has helped Ukrainians to reclaim their past and choose their own future.

              Nobody would deny that the past 30 years of modern Ukrainian history have been extremely eventful. <br/> Notable landmarks include two separate revolutions and an ongoing undeclared war with Russia. As Ukrainians celebrate this year’s big independence anniversary, the Atlantic Council invited a range of experts to share their thoughts on Ukraine’s greatest achievements during the past three decades of statehood.

              Miriam Kosmehl, Senior Expert Eastern Europe, Bertelsmann Stiftung, Germany: Ukraine never gave up on the pursuit of freedom. As a result, Ukrainians are now living the old idea of Ukraine as a member of the European community of nations, while at the same time facing the challenge of reforming their country’s political, legal, and economic systems and defending its sovereignty and territorial integrity. In many cases, Ukrainian society has taken on tasks that the Ukrainian state was not yet able to perform.

              An open society has emerged in independent Ukraine. <br/> This process of finding common ground and opposing irresponsible state authorities began with the public response to the Chornobyl disaster in 1986 and continued with the first Maidan protest movement in 1990. <br/> Civic engagement has remained a prominent feature of Ukrainian society ever since.

              While the pace of progress in reforms leaves much to be desired, grassroots political mobilization against injustice must be reckoned with in today’s Ukraine. <br/> There is still no equality of opportunity to translate activism into political influence, but there is freedom of speech and freedom of assembly. <br />The Ukrainian people have defied a number of attempts to turn back towards a more authoritarian system of government, first during the Kuchma era and then under Yanukovych.

              Despite Russian intervention in 2014, Ukraine has remained united and diverse, and has rejected efforts to divide the country along linguistic, historic, religious, or ethnic lines. Instead, most Ukrainians have embraced the idea of a multilingual and multicultural political nation. <br />In that sense, Kremlin aggression has helped to consolidate Ukraine’s national idea.
          </p>
      </div>
    </div>
  );
}

export default Ukrain;
