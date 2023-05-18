import Head from 'next/head';

import type { NextPage } from 'next'

import { Weather } from '../components/Weather';
import { SavedGeolocations } from '../components/SavedGeolocations';

const IndexPage: NextPage = () => {
  return (
    <div className='container'>
      <Head>
        <title>Weather widget</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='weather-container'>
        <SavedGeolocations />
        <Weather />
      </div>
    </div>
  )
}

export default IndexPage
