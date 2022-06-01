import { ReactElement, SyntheticEvent } from 'react';

export function Step({
    title,
    previousButton,
    nextButton,
    handleButton,
    children,
}: {
    title: string;
    previousButton: string | null;
    nextButton: string | null;
    handleButton: (ev: SyntheticEvent) => void;
    children: ReactElement;
}) {
    return (
        <fieldset>
            <legend>{title}</legend>
            {children}
            {previousButton !== null && (
                <button type="button" onClick={handleButton}>
                    {previousButton}
                </button>
            )}
            {nextButton !== null && (
                <button type="button" onClick={handleButton}>
                    {nextButton}
                </button>
            )}
        </fieldset>
    );
}
