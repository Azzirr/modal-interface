import SearchDropdown from '../SearchDropdown/SearchDropdown';

export default function Modal(){
    return(
        <div className="modal">
            <div className="_content">
                <div className="_header">
                    <h2>Change phone number</h2>
                </div>
                <div className="_subheader">
                    <span>Provide new phone number</span>
                </div>
                <div className='_search-input'>
                    <SearchDropdown></SearchDropdown>
                </div>
                <div className="_inputs-box">
                    <input className="_number" type="number" placeholder="000-000-000"></input>
                </div>
                <div className="_buttons">
                        <button className="_cancel-button">Cancel</button>
                        <button className="_save-button">Save</button>
                </div>
            </div>
        </div>
    )
}