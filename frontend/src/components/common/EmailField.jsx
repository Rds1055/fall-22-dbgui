export const EmailField = ({ label, value, setValue }) => {
    return (
        <>
            <label htmlFor = "value">{label}</label>
            <input type = "email"
                id = "value"
                name = "value"
                value = {value}
                onChange = {event => setValue(event.target.value)}
            />
        </>
    );
};