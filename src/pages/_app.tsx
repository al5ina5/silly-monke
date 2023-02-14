import Head from 'next/head'
import { SWRConfig } from 'swr'
import '../global.css'
import axios from 'axios'
import useSound from 'use-sound';
import { useContext, createContext } from 'react';
import Meta from '../components/Meta';


export const AppContext = createContext({})
export const useAppContext = () => useContext(AppContext as any)

export default function MyApp({ Component, pageProps }) {
    const [play] = useSound("/audio/monke-song.mp3");

    return <>
        <Meta />
        <AppContext.Provider value={{ play }}>
            <SWRConfig value={{ fetcher: url => axios.get(url).then(res => res.data) }}>
                <Component {...pageProps} />
            </SWRConfig>
        </AppContext.Provider>
    </>
}