import { SyntheticEvent, useState } from 'react';
import { Login } from '../components/form/login';
import { Step } from '../components/form/step';
import { Step1 } from '../components/form/step1';
import { Step2 } from '../components/form/step2';
import { Step3 } from '../components/form/step3';

export function FormPage() {
    const [step, setStep] = useState(0);
    const formSteps = [
        {
            title: 'Personal data',
            element: <Step1 />,
            previousButton: null,
            nextButton: 'Continuar',
        },
        {
            title: 'Access data',
            element: <Step2 />,
            previousButton: 'Volver',
            nextButton: 'Continuar',
        },
        {
            title: 'Confirmation',
            element: <Step3 />,
            previousButton: 'Volver',
            nextButton: 'Acceder',
        },
        {
            title: 'Login',
            element: <Login />,
            previousButton: null,
            nextButton: null,
        },
    ];
    function handleButton(ev: SyntheticEvent) {
        ev.preventDefault();
        let element = ev.target as HTMLElement;
        const nextStep = element.textContent === 'Volver' ? step - 1 : step + 1;
        console.log(nextStep);
        setStep(nextStep);
    }

    return (
        <>
            <h2>Formulario React & TypeScript</h2>
            <details>
                <summary>Crea con React un formulario de tres pasos</summary>
                <ul>
                    <li>
                        En cada paso habrá un grupo de campos, y sólo se debe
                        ver un paso a la vez.
                    </li>
                    <li>
                        Pon en cada paso un botón para navegar al siguiente y
                        otro para navegar al anterior (en el primer paso no debe
                        verse el botón de anterior).
                    </li>
                    <li>En el tercer paso debe haber un botón "Acceder".</li>
                    <li>
                        En cada paso, el botón para continuar al siguiente paso
                        debe estar deshabilitado hasta que se rellenen todos los
                        campos del paso.
                    </li>
                </ul>
            </details>
            <details>
                <summary>En un paso 4 el usuario podra hacer login</summary>
                <p>
                    Si los datos son incorrectos, se debe de mostrar un mensaje
                    de error.
                </p>
                <p>
                    Si son correctos, se le debe mostrar una pantalla con todos
                    los datos introducidos en el formulario (sería como un
                    cuarto paso)
                </p>
                <p>Contraer</p>
            </details>
            <form action="">
                <Step
                    key={formSteps[step].title}
                    title={formSteps[step].title}
                    previousButton={formSteps[step].previousButton}
                    nextButton={formSteps[step].nextButton}
                    handleButton={handleButton}
                >
                    {formSteps[step].element}
                </Step>
            </form>
        </>
    );
}

export default FormPage;
