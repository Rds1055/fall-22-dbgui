export const PasswordField = ({ label, value, setValue }) => <>
    <div className="form-group mb-3">
        <label htmlFor="value">{ label }</label>
        <input type="password"
            name="value"
            id="value"
            className="form-control"
            value={value}
            onChange={event => setValue(event.target.value)} />
    </div>
</>;