import React from 'react';
import NavBar from '../NavBar';
import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';
import './India.css'

const Bangladesh = () => {
  const token = Cookies.get('jwt_token')
  if (token === undefined){
    return <Navigate to='/'/>
  }
  return (
    <div>
      <NavBar/>
      <div className='app-container1'>
        <h1 className='head1'>Welcome to the Bangladesh</h1>
        <p className='para1'>March is a month that carries special significance for Bangladesh. In March 1971, the country got involved in the Liberation War, which continued for nine long months. This war was the culmination of a prolonged movement for emancipation from economic, political and cultural suppression by the then West Pakistan. Thus, the Liberation War was influenced by the ethos to establish a country where the underlying philosophy of development policies were equity and justice. Independence was about achieving democratic rights, economic rights, social rights and cultural rights. The aspirations of the people of Bangladesh have been articulated eloquently in the constitution of the country.</p>
        <p className='para1'>However, Bangladesh's journey in the post-independence period has not been smooth. It has experienced turmoil in the form of assassinations, coups, counter-coups and military rule. These were coupled with corruption and bad governance. Within three years of Bangladesh's independence, the Father of the Nation, Bangabandhu Sheikh Mujibur Rahman was assassinated in August 1975, by a group of junior army officers, in an attempt to overthrow the incumbent government. Following this brutal killing, a sharp division in political ideology began to take root in the country. After a long period of instability and misrule, Bangladesh moved towards a democratic transition through parliamentary elections in 1991.</p>
        <p className='para1'>This transition, however, could not continue uninterrupted as politics could not take a developed and institutional shape and instead became highly confrontational. So, after a few elections, the democratic process faced another blow in the midst of bitter hostility among the dominant political parties in 2006, when transition of power through an election became uncertain. This resulted in the assumption of power by a military-backed non-partisan caretaker government, which took over in January 2007 with the promise to hold a free and fair election. An election was held in December 2008 and Bangladesh Awami League came into power, winning an overwhelming majority. However, the parliament became dysfunctional after the election and political opposition has become weaker over time. Hence, 50 years on, Bangladesh's political journey is still a "work in progress".</p>
        <p className='para1'>In terms of the economic situation, in 1971, Bangladesh inherited a poor and undiversified economy. It was predominantly an agricultural economy with low productivity. It had underdeveloped industrial and services sectors, a rapidly growing population and an overall poor infrastructure. Due to decades of British and Pakistani colonial exploitation, the economy was stuck in the vicious cycle of poverty. Low levels of income, savings and investment were resulting in a low growth. On top of this, the war had caused serious damage to the economy.</p>
      </div>
    </div>
  );
}

export default Bangladesh;
