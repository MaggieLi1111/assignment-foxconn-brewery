import React from "react";

export default function Breweries(props) {
    const { values, update, submit } = props;

    const onSubmit = event => {
        event.preventDefault();
        submit()
    }
    const onChange = (event) => {
        update(event.target.name, event.target.value);
    }

    return (
        <form className="form-container" onSubmit={onSubmit}>
            <div className="form-group inputs">
                <label>City
                    <select value={values.city} name="city" onChange={onChange}>
                        <option value="">--Select a city--</option>
                        <option value="Algoma">--</option>
                        <option value="Glendale">--</option>
                        <option value="Milwaukee">--</option>
                        <option value="New Richmond">--</option>   
                        <option value="Reedsburg">--</option>
                        <option value="Sheboygan">--</option>
                        <option value="Whitewater">--</option>
                    </select>
                </label>
                <label>Type
                    <select value={values.type} name="type" onChange={onChange}>
                        <option value=" ">--Select a type--</option>
                        <option value="micro">Micro</option>
                        <option value="nano">Nano</option>
                        <option value="regional">Regional</option>
                        <option value="brewpub">Brewpub</option>
                        <option value="large">Large</option>
                        <option value="planning">planning</option>
                        <option value="bar">Bar</option>
                        <option value="contract">Contract</option>
                        <option value="proprietor">Proprietor</option>
                        <option value="closed">Closed</option>
                    </select>
                </label>
                <div className="submit">
                    <button disabled={!values.city || !values.type}>Submit</button>
                </div>
            </div>
        </form>
    )
}