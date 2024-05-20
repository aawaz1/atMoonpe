import React, { useState } from 'react'
import CartMenu from './cartmenu.js'

const Container = ({ isOpen, handleIsOpen ,toggleButton ,setToggleButton }) => {
    
    return (
        <>
            {
                isOpen && (<div style={{ zIndex: 100, left: isOpen ? 0 : '144vw' }} className={`fixed top-0 overflow-y-scroll w-[17rem] h-[100vh] bg-white`}><CartMenu handleIsOpen={handleIsOpen} setToggleButton={setToggleButton} toggleButton={toggleButton} /></div>)
            }
            {
                isOpen && (<div onClick={handleIsOpen} style={{ zIndex: 99 }} className='fixed w-[100vw] h-[100vh] top-0 left-0 bg-gray-100  opacity-[0.5]'></div>)
            }
        </>

    )
}

export default Container