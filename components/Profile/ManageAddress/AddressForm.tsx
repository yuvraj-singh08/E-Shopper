import React from "react";

interface closeAddAddressForm {
    closeAddAddressForm: () => void
}

export default function AddressForm({ closeAddAddressForm }: closeAddAddressForm) {
    return (
        <>
            <form className="addAddressForm">
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        < input className="form-control" type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">10-digit mobile number</label>
                        < input className="form-control" type="tel" id="phone" name="phone" pattern="[0-9]{10}" required />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="pincode">Pincode</label>
                        < input className="form-control" type="text" id="pincode" name="pincode" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="locality">Locality</label>
                        < input className="form-control" type="text" id="locality" name="locality" required />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address (Area and Street)</label>
                    <textarea className="form-control" id="address" name="address" rows={4} required></textarea>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="city">City/District/Town</label>
                        < input className="form-control" type="text" id="city" name="city" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State</label>
                        <select id="state" name="state" required className="form-control">
                            <option value="" selected disabled>--Select State--</option>
                        </select>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="landmark">Landmark (Optional)</label>
                        < input className="form-control" type="text" id="landmark" name="landmark" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="alt-phone">Alternate Phone (Optional)</label>
                        < input className="form-control" type="tel" id="alt-phone" name="alt-phone" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="address-type">Address Type</label><br />
                        <label>< input type="radio" name="address-type" value="home" required /> Home</label>
                        <label>< input type="radio" name="address-type" value="work" required /> Work</label>
                    </div>
                </div>
                <div className="form-buttons">
                    <button type="submit" className="btn btn-primary">SAVE</button>
                    <button type="button" className="btn" onClick={closeAddAddressForm} >CANCEL</button>
                </div>
            </form>

        </>
    )
}