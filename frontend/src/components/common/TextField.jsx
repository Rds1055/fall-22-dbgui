export const TextField = ({ label, value, setValue, id, type }) => {
    return (
        <>
            <label htmlFor = {id}>{label}</label>
            <input type = {type}
                id = {id}
                name = {id}
                value = {value}
                onChange = {event => setValue(event.target.value)}
            />
        </>
    );
};