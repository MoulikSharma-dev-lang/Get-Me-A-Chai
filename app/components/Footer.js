import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <footer className='text-center bg-blue-950 py-5'>
            <span className='font-bold text-xl'>Copyright &copy; GetMeAChai {currentYear} | All rights reserved!</span>
        </footer>
    )
}

export default Footer
