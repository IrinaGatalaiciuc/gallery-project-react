import React, { useEffect, useState, useContext } from 'react'
import axios from "axios"
import Teamplayedimage from '../teamplayed/Teamplayedimg.js'
import "../styles/Gallery.css"
import Buttons from '../buttons/Buttons.js'
import { BtnContext } from '../context/Context.js'

function Gallery() {

    const { theme, setTheme } = useContext(BtnContext)
    const url = `https://api.pexels.com/v1/search?query=${theme}`

    const [pic, setPic] = useState([])

    function search(event) {
        const inputvalue = event.target.value
        const resultvalue = (inputvalue) ? inputvalue : "mixed"
        setTheme(resultvalue)
    }


    useEffect(() => {
        axios.get(url, {
            headers: {
                Authorization: "SIuG8E0urFvKmRwtIkBQ3FXNY98aY94VqxzeFMo07aBqnln0NNIELMgA"
            }
        })
            .then((res) => setPic(res.data.photos))

    }, [url])

    const pics = pic.map((p, i) => {
        return <Teamplayedimage key={p.id} image={p.src.portrait} description={p.alt} />
    })

    return (
        <div className="gallery">
            <div className="btn-section">
                <input className="input-search" type="text" onChange={search} ></input>
                <Buttons />
            </div>
            <div className="gallery-section">
                {pics}
            </div>
        </div>
    )
}

export default Gallery