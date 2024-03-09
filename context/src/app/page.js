'use client'

import Image from "next/image";
import styles from "./page.module.css";
import Parent from "./parent";
import {useContext, MyContext} from './context';
import { useEffect, useState } from "react";


export default function Home() {
  const [theme, setTheme] = useState('light');
  const [lang, setLang] = useState('en');
  
  const data = {
    lang,
    setLang,
    theme,
    setTheme,
  }

  useEffect(() => {
    console.log(data);
    document.body.className = theme;
  }, [data]);

  return (
    <main className={styles.main}>
      <MyContext.Provider value={data}>
        <Parent/>
        app theme = {theme}
        app lang = {lang}
      </MyContext.Provider>
    </main>
  );
}
