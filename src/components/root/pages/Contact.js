import React from "react";
class Contact extends React.Component
{
   
    render()
    {
    return (
      <><div className="container">

        <h1>Contact Page</h1>
        
          <div class="form-group">
            <label>Nombre y apellidos</label>
            <input type="text" class="form-control" name="firstName" placeholder="Nombre" />
            <input type="text" class="form-control" name="lastName1" placeholder="Primer apellido" />
            <input type="text" class="form-control" name="lastName2" placeholder="Segundo apellido" />
          </div>
          <div class="form-group">
            <label>Usuario </label>
            <input type="text" class="form-control" name="name" />
          </div>
          <div class="form-group">
            <label>Contraseña</label>
            <input class="form-control" name="password" type="password" />
          </div>
          <div class="form-group">
            <label>D.N.I.</label>
            <input class="form-control" name="dni" type="text" />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1" />
          </div>


          <div class="form-group">
            <label>Email</label>
            <input type="text" class="form-control" name="email"/>
            </div>
          <div class="form-group">
            <label>Teléfono</label>
            <input class="form-control" name="telephone" type="text"/>
            </div>
        </div><div class="modal-footer">
         <div>
          <a href="/"><button id="login_lost_btn" type="button" class="btn btn-link">Olvidé mi contraseña</button></a>
          <a href="/login"><button id="login_register_btn" type="button" class="btn btn-link">¿Ya tiene una cuenta?</button></a>
        </div>
      
        </div></>



)
}
}

export default Contact;