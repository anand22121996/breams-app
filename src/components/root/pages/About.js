import React from "react"
import library from  '../layout/assets/librar.jpg';
class About extends React.Component{
    render()
    {
        return(
            
           <div className="container">
      <div className="py-4">
        <h1>About Page</h1>
        <div class="row">
  <div class="col-lg-12">
    <img src={library} alt="logo"/>
    
    <p class="text-justify">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
      Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N.
      del T. persona que se dedica a la imprenta) desconocido
      usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo
      sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando
      esencialmente igual al
      original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de
      Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual
      incluye versiones de
      Lorem Ipsum.</p>
    <p class="text-justify">Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el
      contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una
      distribución más o menos normal de las letras, al contrario
      de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que
      se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por
      defecto, y al hacer
      una búsqueda de "Lorem Ipsum" va a dar por resultado muchos sitios web que usan este texto si se encuentran en
      estado de desarrollo. Muchas versiones han evolucionado.</p>
    <p class="text-justify">Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto
      aleatorio. Tiene sus raices en una pieza cl´sica de la literatura del Latin, que data del año 45 antes de
      Cristo, haciendo que este adquiera mas de 2000
      años de antiguedad. Richard McClintock, un profesor de Latin de la Universidad de Hampden-Sydney en Virginia,
      encontró una de las palabras más oscuras de la lengua del latín, "consecteur", en un pasaje de Lorem Ipsum, y
      al seguir leyendo
      distintos textos del latín, descubrió la fuente indudable. Lorem Ipsum viene de las secciones 1.10.32 y
      1.10.33 de "de Finnibus Bonorum et Malorum" (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45
      antes de Cristo. Este
      libro es un tratado de teoría de éticas, muy popular durante el Renacimiento. La primera linea del Lorem
      Ipsum, "Lorem ipsum dolor sit amet..", viene de una linea en la sección 1.10.32</p>
    <p class="text-justify">Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió
      alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un
      poco creíbles. Si vas a utilizar un pasaje
      de Lorem Ipsum, necesitás estar seguro de que no hay nada avergonzante escondido en el medio del texto. Todos
      los generadores de Lorem Ipsum que se encuentran en Internet tienden a repetir trozos predefinidos cuando sea
      necesario, haciendo
      a este el único generador verdadero (válido) en la Internet. Usa un diccionario de mas de 200 palabras
      provenientes del latín, combinadas con estructuras muy útiles de sentencias, para generar texto de Lorem Ipsum
      que parezca razonable.
      Este Lorem Ipsum generado siempre estará libre de repeticiones, humor agregado o palabras no características
      del lenguaje, etc.</p>
  </div>
</div>
        <p className="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque rerum hic ab veniam reiciendis cum repudiandae, voluptate explicabo nesciunt nam accusantium? Soluta cupiditate, accusamus commodi praesentium laborum dolorum libero maiores!</p>
      </div>
    </div>
                    


 )
    
}
}
export default About;