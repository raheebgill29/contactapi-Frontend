import React from "react";

const Header = ({toogleMoodle,nbofContacts}) =>{

    return (
        <header className='header'>
            <div className='container'>
                <h3>Contact List ({nbofContacts})</h3>
                <button onClick={()=>toogleMoodle(true)} className='btn'>
                    <i className='bi bi-plus-square'>Add new contact</i>
                </button>
            </div>
        </header>
    )
}
export default Header;