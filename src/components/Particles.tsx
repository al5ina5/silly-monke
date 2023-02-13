import Particles from 'react-tsparticles'

export default function CandyParticles() {
    return (
        <>
            <Particles
                className="w-full h-full z-20 fixed pointer-events-none"
                options={{
                    particles: {
                        number: {
                            value: 10
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
                            images: new Array(62).fill(62).map((num, index) => {
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
        </>
    )
}
