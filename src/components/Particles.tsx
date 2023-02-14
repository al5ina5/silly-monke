import Particles from 'react-tsparticles'
import { motion } from 'framer-motion'

export default function CandyParticles() {
    return (
        <>
            <motion.div animate={{ translateX: ['100%', '0%'] }} transition={{ duration: 4 }} className="w-full h-full z-20 fixed pointer-events-none">
                <Particles
                    className="w-full h-full"
                    options={{
                        particles: {
                            number: {
                                value: 100
                            },
                            move: {
                                enable: true,
                                random: false,
                                speed: 1,
                                straight: false,
                                direction: 'left',
                                outMode: 'out'
                            },
                            color: {
                                value: ['#6AE2DC', '#FFB8D2', '#F4DC62', '#FFC78B', '#CDC5FF', '#4D4D4D']
                            },
                            opacity: {
                                value: 1,
                                anim: {
                                    enable: true,
                                    speed: 0.2
                                }
                            },
                            shape: {
                                type: 'images',
                                images: new Array(61).fill(61).map((num, index) => {
                                    return {
                                        height: 32,
                                        width: 32,
                                        src: `/img/assets/monke-asset-${index}.png`
                                    }
                                })
                            },
                            line_linked: {
                                enable: false
                            },
                            size: {
                                value: 28,
                                random: false,
                                anim: {
                                    enable: false,
                                    speed: 12.181158184520175,
                                    size_min: 0.1,
                                    sync: true
                                }
                            }
                        }
                    }}
                />
            </motion.div>
        </>
    )
}
