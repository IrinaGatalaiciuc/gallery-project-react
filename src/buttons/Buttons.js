import React, { useContext } from 'react'
import { BtnContext } from '../context/Context'
import "../styles/Buttons.css"

function Buttons() {

  const { setTheme } = useContext(BtnContext)

  return (
    <div className="btn-part">
      <button className="btn" onClick={() => setTheme('mixed')}>Mixed</button>
      <button className="btn" onClick={() => setTheme('ocean')}>Ocean</button>
      <button className="btn" onClick={() => setTheme("road")}>Road</button>
      <button className="btn" onClick={() => setTheme('creative')}>Creative</button>
    </div>
  )
}

export default Buttons