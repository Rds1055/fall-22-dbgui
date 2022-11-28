export const SearchField = ({ label, value, setValue, placeholder }) => <>
    <div className="form-group mb-3">
        <label htmlFor="value">{ label }</label>
        <input type="search"
            name="value"
            id="value"
            className="form-control mr-sm-2"
            placeholder={placeholder}
            aria-label="Search"
            value={value}
            onChange={event => setValue(event.target.value)} />
    </div>
</>;