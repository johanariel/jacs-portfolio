import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => clearTimeout(timeoutId);
    }, []);

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm('default_service', 'template_g8q2fyj', form.current, 'PDm6TtZ7Y_TEtD36Q')
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
            )
    }

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'á', 'c', 't', 'a', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>          
                        Estoy entusiasmado por explorar nuevas oportunidades y actualmente estoy en búsqueda de un puesto en una empresa con un departamento de informática. Si tienes alguna otra solicitud o pregunta, no dudes en contactarme mediante el formulario proporcionado. ¡Espero con interés conectar contigo!
                    </p>
                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input placeholder="Nombre" type="text" name="name" required />
                                </li>
                                <li className="half">
                                    <input
                                        placeholder="Correo"
                                        type="email"
                                        name="email"
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        placeholder="Asunto"
                                        type="text"
                                        name="subject"
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Mensaje"
                                        name="message"
                                        required
                                    ></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="ENVIAR" />
                                </li>
                            </ul>
                        </form>
                    </div>

                </div>
            </div>

            <div className="info-map">
                Johan Changoluisa,
                <br />
                Ecuador,
                <br />
                Ambato, <br />
                Izamba <br />
                {/* <br /> */}
                <span>ariel.changoluisa@gmail.com</span>
            </div>

            <div className="map-wrap">
                <MapContainer center={[-1.2314276, -78.6027312]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[-1.2272203, -78.5946944]}>
                        <Popup>Johan lives here</Popup>
                    </Marker>
                </MapContainer>
            </div>

            <Loader type="pacman" />
        </>
    )
}

export default Contact