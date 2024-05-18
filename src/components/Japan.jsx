import React from 'react';
import NavBar from '../NavBar';
import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';
import './India.css'

const Japan = () => {
  const token = Cookies.get('jwt_token')
  if (token === undefined){
    return <Navigate to='/'/>
  }

  return (
    <div>
      <NavBar/>
        <div className='app-container1'>
          <h1 className='head1'>Welcome to the japan</h1>
          <div className='para1'>
              <p>The maximum operating speed is 320 km/h (200 mph) (on a 387.5 km (241 mi) section of the Tōhoku Shinkansen). Test runs have reached 443 km/h (275 mph) for conventional rail in 1996, and up to a world record 603 km/h (375 mph) for SCMaglev trains in April 2015.</p>
              <p>Over the years, the Tokaido Shinkansen, Japan’s bullet train, became internationally famous for its impeccable safety record, with zero fatalities in over 50 years of operation, as well as its punctuality and low pollution levels.

                Unsurprisingly, Japan has tried to capitalise on the strengths of Shinkansen technology. In 2013, the government vowed to triple its infrastructure exports, such as bullet trains and nuclear plants, to 30tn yen ($262bn), and the bullet train technology was put at the core of the country’s economic growth strategy.</p>
              <p>One prominent obstacle is the so-called ’Galapagos Syndrome’: the Shinkansen can only be sold and implemented in bulk, as an entire system, complete with the railways, trains and software needed to run them. This makes it a highly expensive package, and it chokes export opportunities, particularly to developing Asian countries.

                  At the same time, China has emerged as a fierce competitor in the high-speed rail market. In September 2016, it announced it was designing the next-generation trains capable of reaching 500km/h, which can adjust to fit different track gauges around the world.</p>
              <p>As mainland publication South China Morning Post noted, “The country is using high-speed rail as the next spearhead to gain a technological edge over the United States, Japan and Europe.”

                  So far, Japan has had moderate success in exporting the Shinkansen abroad, mainly to richer or more stable economies such as the US, while a number of projects currently in the pipeline are more or less frozen by critical lack of funding.</p>
          </div>
        </div>
    </div>
  );
}

export default Japan;
