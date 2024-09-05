'use client'

import React from "react"
import useToggle from "@/hook/useToggle"
import styles from '@/app/toggle/toggle.module.css'

const toggleText = () => {
   const [isVisible, toggleVisibility] = useToggle(false)
   
   return (
    <div className={styles.container}>
      <button className={styles.button}  onClick = {toggleVisibility}>
        {isVisible ? 'Esconder' : 'Mostrar'} Texto
      </button>
      {isVisible && <p className={styles.p}>Se leu ja sabe né ehehhehe</p>}
    </div>
   )
}

export default toggleText;