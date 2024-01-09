import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faPython,
    faReact
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import './index.scss'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['S', 'o', 'b', 'r', 'e', ' ', 'm', 'í']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        ¡Hola! Soy un apasionado del software con una fuerte motivación por aprender y crecer en el campo de la informática. Mi enfoque en la resolución de problemas y mi capacidad para trabajar en equipos multidisciplinarios me han llevado a explorar diversas áreas de la ingeniería de software.
                    </p>
                    <p align="LEFT">
                        Con habilidades en HTML, CSS y JavaScript, junto con experiencia en Git y Python, estoy preparado para enfrentar desafíos en el desarrollo web. Mi compromiso con la responsabilidad se refleja en cada fase de mis proyectos. Desde la concepción hasta la entrega final, me esfuerzo por cumplir con plazos, superar expectativas y mantener la más alta calidad en cada detalle.
                    </p>
                    <p>
                        La transparencia y la comunicación efectiva son fundamentales en mi enfoque de trabajo. Siempre busco la claridad en la colaboración, manteniendo a todos los miembros del equipo informados. Estoy emocionado por contribuir a proyectos innovadores y seguir creciendo como profesional en el fascinante mundo del desarrollo web.
                    </p>
                </div>

                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faPython} color="#306998" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default About