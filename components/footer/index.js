import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'
function Footer() {
    return (
        <footer className={styles.footer}>
            Made with ❤️ by&nbsp;
            <Link href="https://github.com/EdebaliErman" target="_blank">
                Edebali Erman
            </Link>
        </footer>
    )
}

export default Footer
