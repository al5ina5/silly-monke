import { AnimatePresence, motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
const CandyParticles = dynamic(() => import('../components/Particles'), { ssr: false })
import { useAppContext } from './_app'

export default function Index() {
    const { play } = useAppContext()
    const router = useRouter()


    const [clicked, setClicked] = useState(false)

    return <>
        {/* preload image */}
        <img src="/img/crezno-presents.png" alt="" className='hidden' />

        {clicked && <CandyParticles />}

        <motion.div className="fixed z-10 h-full w-full flex flex-col items-center justify-center p-6 bg-cover bg-center pixelated" style={{ backgroundImage: 'url("/img/swirl.gif")' }}>

            <AnimatePresence>
                {!clicked && <>
                    <motion.div
                        exit={{ opacity: 0 }}
                        transition={{ duration: 2 }}
                        className="flex flex-col items-center justify-center" >
                        <motion.img animate={{ rotate: ['3deg', '-3deg', '3deg'] }} transition={{ duration: 4, repeat: Infinity }} className="max-w-3xl w-full" src="/img/silly-monke-logo.png" alt="" />
                        <button onClick={() => {
                            setClicked(true)
                            play()
                            setTimeout(() => {
                                router.push('/home')
                            }, 10500)
                        }}>
                            <motion.img animate={{ rotate: ['-3deg', '3deg', '-3deg'] }} transition={{ duration: 4, repeat: Infinity }} className='w-64' src="/img/mint-flashy.png" alt="" />
                        </button>
                    </motion.div >
                </>}
            </AnimatePresence>

            <AnimatePresence>
                {clicked && <>
                    <motion.div
                        initial={{ opacity: 0, display: 'none' }}
                        animate={{ opacity: [0, 1], display: 'block' }}
                        transition={{ duration: 4, delay: 3 }}
                        className="flex flex-col items-center justify-center">
                        <motion.img animate={{ rotate: ['3deg', '-3deg', '3deg'] }} transition={{ duration: 4, repeat: Infinity }} className="max-w-3xl w-full" src="/img/crezno-presents.png" alt="" />

                    </motion.div >
                </>}
            </AnimatePresence>

        </motion.div>
    </>
}