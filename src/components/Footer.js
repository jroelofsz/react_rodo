import React from 'react'

export default function Footer() {
    return (
        <footer className="text-center text-white bg-dark p-4">
            <p className="bold">
                &copy; {new Date().getFullYear()} Jacob Reolofsz - All Rights Reserved
            </p>
        </footer>
    )
}
