import React from 'react';
import emailjs from "emailjs-com"

export default function Contactenos(){
    function sendEmail(e){
        e.preventDefault()
 
        emailjs.sendForm('gmail', 'template_jniyxts', e.target, 'user_MDPEPMalb2l4bGVNTXFp6')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
        };
 

return(
    <div>
        <div id="contactenos" className="container" >
        <h2  className='fs-2 border border-5 border-light text-center container container-fluid'> <b>Contactenos</b></h2>
            <form onSubmit={sendEmail}>
                <div className="row pt-5 mx-auto">
                    <div className="col-8 form-group mx-auto">
                    <input type="text" className="form-control" placeholder="Nombre" name="name"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                    <input type="email" className="form-control" placeholder="Direccion de e-mail" name="email"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                    <input type="text" className="form-control" placeholder="Consulta" name="subject"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                    <textarea className="form-control" id="" cols="30" rows="8" placeholder="Escriba su mensaje aquí" name="message"></textarea>
                    </div>
                    <div className="col-8 pt-3 mx-auto">
                    <input type="submit" className="btn btn-info" value="Enviar"/>
                    </div>
                </div>
            </form>
        </div>
    </div>
)


}