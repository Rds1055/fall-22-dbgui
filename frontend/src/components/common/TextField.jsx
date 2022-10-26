export const TextField = ({ label, value, setValue }) => {
    return (
        <>
            <label htmlFor = "value">{label}</label>
            <input type = "text"
                id = "value"
                name = "value"
                value = {value}
                onChange = {event => setValue(event.target.value)}
            />
        </>
    );
};