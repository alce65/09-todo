import { render, screen } from '@testing-library/react';
import { useContext } from 'react';
import { GotContext } from './got-context';
import { GotContextProvider } from './got-provider';

test('renders personajes from context', async () => {
    const TestComponent = function () {
        const { personajes } = useContext(GotContext);
        return (
            <>
                <p>Probando contexto</p>
                <ul>
                    {personajes.map((item) => (
                        <li key={item.nombre}>{item.nombre}</li>
                    ))}
                </ul>
            </>
        );
    };
    render(
        <GotContextProvider>
            <TestComponent></TestComponent>
        </GotContextProvider>
    );

    // act(() => {
    //     /* fire events that update state */

    // });

    const element = screen.getByText(/Probando contexto/i);
    expect(element).toBeInTheDocument();
    const element2 = await screen.findByText(/Joffrey/i);
    expect(element2).toBeInTheDocument();
});
