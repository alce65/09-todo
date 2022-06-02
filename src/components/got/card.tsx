import { emoji } from '../../data/emojis';
import { Personaje } from '../../models/personaje';
import { Asesor } from '../../models/asesor';
import { Escudero } from '../../models/escudero';
import { Luchador } from '../../models/luchador';
import { Rey } from '../../models/rey';
import { SyntheticEvent } from 'react';

export function Card({ personaje }: { personaje: Personaje }) {
    function handleClick(ev: SyntheticEvent) {
        let element = ev.target as Element;
        if (element.textContent === 'habla') {
            console.log(personaje.comunicar());
            const selector = '.comunications';
            // const element = <Element>document.querySelector(selector);
            // element.classList.toggle('on');
            // new Comunications(personaje, selector);
            // setTimeout(() => {
            //     element.classList.toggle('on');
            //     element.innerHTML = '';
            // }, 2000);
        } else {
            console.log('Muerooo', personaje.nombre);
            personaje.morir();
            // </Element>this.template = this.createTemplate();
            // </Element>this.outRender(`.{personaje.nombre}`);
        }
    }

    let templateOptional: JSX.Element = <></>;

    if (personaje instanceof Rey) {
        templateOptional = <li>Años de reinado: {personaje.añosReinado}</li>;
    } else if (personaje instanceof Luchador) {
        templateOptional = (
            <>
                <li>Arma: {personaje.arma}</li>
                <li>Destreza: {personaje.destreza}</li>
            </>
        );
    } else if (personaje instanceof Asesor) {
        templateOptional = <li>Asesora a: {personaje.jefe.nombre}</li>;
    } else if (personaje instanceof Escudero) {
        templateOptional = (
            <>
                <li>Peloteo: {personaje.sumision}</li>
                <li>Sirve a: ${personaje.amo.nombre}</li>
            </>
        );
    }

    let template = (
        <li className={`character col ${personaje.nombre}`}>
            <div className="card character__card">
                <img
                    src={`img/${personaje.nombre.toLowerCase()}.jpg`}
                    alt={personaje.nombre + ' y ' + personaje.familia}
                    className={`character__picture card-img-top 
                        ${personaje.estadoVivo ? '' : 'reves'}`}
                />
                <div className="card-body">
                    <h2 className="character__name card-title h4">
                        {personaje.nombre} y {personaje.familia}
                    </h2>
                    <div className="character__info">
                        <ul className="list-unstyled">
                            <li>Edad: {personaje.edad} años</li>
                            <li>
                                Estado:
                                {personaje.estadoVivo ? (
                                    <i className="fas fa-thumbs-up"></i>
                                ) : (
                                    <i className="fas fa-thumbs-down"></i>
                                )}
                            </li>
                            `;
                        </ul>
                    </div>
                    <div className="character__overlay">
                        <ul className="list-unstyled">{templateOptional}</ul>
                        <div className="character__actions">
                            <button
                                className="character__action btn"
                                onClick={handleClick}
                            >
                                habla
                            </button>
                            <button
                                className="character__action btn"
                                onClick={handleClick}
                            >
                                muere
                            </button>
                        </div>
                    </div>
                </div>
                <i className="emoji">{emoji[personaje.categoria]}</i>
            </div>
        </li>
    );

    return template;
}
