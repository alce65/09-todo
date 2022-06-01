export function Input({
    name,
    label,
    value,
    handleChange,
}: {
    name: string;
    label: string;
    value: string | undefined;
    handleChange: () => void;
}) {
    const template = (
        <>
            <label htmlFor={name}>{label}</label>
            <input
                type="text"
                name={name}
                id={name}
                value={value}
                onChange={handleChange}
            />
        </>
    );

    return template;
}
