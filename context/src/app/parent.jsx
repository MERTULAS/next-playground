import React from 'react'
import Child from './child'
import { useContext, MyContext } from './context'

const parent = () => {
    const data = useContext(MyContext);

  return (
    <>
        <div>parent</div>
        {data.theme}
        <button onClick={() => data.setTheme(theme => theme === 'light' ? 'dark' : 'light')} >Change Theme</button>
        <button onClick={() => data.setLang(theme => theme === 'en' ? 'tr' : 'en')} >Change Lang</button>
        <Child/>
    </>
  )
}

export default parent