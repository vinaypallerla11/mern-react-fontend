import React from 'react';
import NavBar from '../NavBar';
import Cookies from 'js-cookie'
import { Navigate } from 'react-router-dom';
import './India.css'

const India = () => {
  const token = Cookies.get('jwt_token')
  if(token === undefined) {
    return <Navigate to='/' />
  }
  
  return (
    <div className='app-container1'>
      <NavBar/>
      <h1 className='head1'>Welcome to the india</h1>
      <h1 className='head1'>India made history with 2023's low-budget Chandrayaan-3 moon landing</h1>
        <div className='para1'>  
          <p>The successful soft-landing of Indian Space Research Organisation's (ISRO) Chandrayaan-3 mission made India the first country to land near the south pole on the Moon. This Chandrayaan-3 mission comprises of the Vikram lander and Pragyan rover, both of which conducted in-situ experiments on the Moon's surface.</p>
          <p>Chandrayaan-3's successful soft-landing on the Moon to propel India into an elite group of nations was lauded by leading foreign media outlets as a marvellous achievement and a massive moment for the country's space exploration that has raised its profile as a spacefaring nation.
              From The New York Times to BBC and The Guardian to The Washington Post, the historic event in India's space programme on Wednesday made headlines across the globe.
          </p>
          <p>Chandrayaan-3's Pragyan rover found the presence of Sulphur on the lunar surface in the south pole region. In addition, the rover's instruments also detected various elements on the Moon's surface - aluminum, silicon, calcium, and iron. The discovery of these elements will help scientists develop a better understanding of lunar geochemistry.</p>
          <p>The successful soft-landing of Indian Space Research Organisation's (ISRO) Chandrayaan-3 mission made India the first country to land near the south pole on the Moon. This Chandrayaan-3 mission comprises of the Vikram lander and Pragyan rover, both of which conducted in-situ experiments on the Moon's surface.</p>
          <p>India’s first solar observatory mission, Aditya-L1, successfully launched from Sriharikota Space Centre</p>
          <p>India’s journey towards the sun began today as the maiden flight mission took off precisely at 11. 50 am at the Sathish Dhawan Space Centre Sriharikota. It took almost one hour and three minutes for Aditya L1 to begin its 125 days journey to the sun.</p>
          <p>On the sunny afternoon, the PSLV C57 rocket carrying Aditya L1 soared into the clear skies with a reverberating sound and with the crowds at ISRO expressing their happiness with whistles and claps. Scientists at the Control Centre shared smiles with each other as the rocket went up to the skies. India’s ambitious mission to the sun comes close after the achievement of Chandrayaan - 3. PSLV C 57 carrying Aditya L1 is the XL variant with longer strap on motors carrying higher fuel quantity . All the flight parameters were absolutely normal. 51minutes after the launch the first signal was received from the ship borne terminal for tracking the second part of the fourth stage. In a period of four months, Aditya L1 will reach the Lagrange 1 point. where the gravitational forces of a two body system like the Sun and the Earth produce enhanced regions of attraction and repulsion.  Aditya'sL1 mission is to study the solar winds and the Sun' s atmosphere. It carries seven payloads to observe the photosphere, chromosphere and the outermost layers of the Sun, the Corona. </p>
          <p>This will help understand the problems of coronal heating. Coronal mass ejection, pre-flare and flare activities, dynamics of weather  and the study of the propagation of particles and fields in the interplanetary medium. Soon after India’s successful mission to the moon on the 23rd of August, Indian Space Industry witnessed another journey to the Sun which has been undertaken by four other space Centres in the World. ISRO's service includes not only orbiting  India’s own satellites but also hundreds of foreign satellites and in the process earn foreign exchange for the country.India has till date launched 431 foreign satellites belonging to 36 countries since 1999 with its rockets and bulk of the numbers were by the PSLV rocket.The rocket has also been used to put into orbit 104 satellites in a single flight.</p>
        </div>
      </div>
    
  );
}

export default India;
