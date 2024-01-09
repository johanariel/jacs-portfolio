import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-j-v2.png'
import Logo from './Logo'
import Loader from 'react-loaders'
import './index.scss'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['o', 'h', 'a', 'n']
    const jobArray = ['I', 'n', 'g', 'e', 'n', 'i', 'e', 'r', 'o', ' ', 'e', 'n', ' ', 'S', 'o', 'f', 't', 'w', 'a', 'r', 'e']

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={letterClass}>o</span>
                        <span className={letterClass}>l</span>
                        <span className={`${letterClass} _12`}>a,</span>
                        <br />
                        <span className={`${letterClass} _13`}>S</span>
                        <span className={`${letterClass} _14`}>o</span>
                        <span className={`${letterClass} _15`}>y</span>
                        <img src={LogoTitle} alt="developer" />
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={nameArray}
                            idx={15}
                        />
                        <br />
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={jobArray}
                            idx={15}
                        />
                    </h1>

                    <h2>HTML / CSS / JavaScript / Git / Python</h2>
                    <Link to="/contact" className='flat-button'>CONTACTO</Link>
                </div>
                <Logo />
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Home