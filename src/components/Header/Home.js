import React from 'react'
import Logo from "../../asset/logoJardin.png"
import Foto from "../../asset/foto2.jpg"

import "./home.css"
export default function Home() {
    return (
       <>
       <section className="container-fluid home">
<img src={Logo} alt="logo" className="logoHome2 img-fluid"></img>
           <div>

<div className="divHome ">
<img src={Logo} alt="logo" className="logoHome img-fluid"></img>
</div>
<img src={Foto} alt="fondo" className="fotoHome img-fluid"></img>
</div>
       </section>
       </>
    )
}
