<img align="left" src="https://github.com/Jotarf/PruebasVue/blob/main/src/infraestructura/assets/hexawork%20logo.png?s=85" width="85px;" alt=""></img>  
# Hexawork - Empleadores  
## Contenido  
[Introducción](#introduccion)  
[Dependencias Necesarias](#dependencias)  
[Building](#build)  
[Run](#runing)  
[Testing](#testing)    
[Deployment](#deployment)  
[Referencias](#referencias)   
[Desarrolladores](#desarrolladores)
<a name="introduccion"></a>
## Introducción
Aplicación web desarrollada utilizando <a href="https://vuejs.org/">Vue</a> y <a href="https://www.typescriptlang.org/">Typescript</a> como parte del sistema "Hexawork" para la entrega del proyecto de la asignatura "Desarrollo de Software" siguiendo una arquitectura hexagonal y orientados por el "Domain-Driven-Design".
<a name="dependencias"></a>
## Dependencias Necesarias
 - <a href="https://www.npmjs.com/">npm</a> >= 6.14.6
 - <a href="https://nodejs.org/es/">node</a> >= 14.15.3
 - <b>NOTA: Es necesario tener instalado el navegador "Google Chrome" para los "tests" de aceptación</b>
<a name="build"></a>
## Building
 1. Clonar el repositorio.
 
    > git clone https://github.com/Raccoon-Devs/HexaWork-FrontEnd-Vue.git
 2. Acceder a la carpeta "HewaWork-FrontEnd-Vue"
  
    > cd HexaWork-FrontEnd-Vue
 4. Instalar las dependencias del proyecto en la carpeta donde se clonó el repositorio previamente.
 
    > npm install 
<a name="runing"></a>
## Run
 1. Ejecutar el proyecto en "localhost":
 
    > npm run serve  
    
    Este comando ejecutará el proyecto localmente en el puerto 8087.  
<a name="testing"></a>
## Testing
- Para ejecutar los "tests" unitarios es necesario ejecutar el siguiente comando:

  > npm run test:unit

- Para ejecutar los "tests" de integración es necesario ejecutar el siguiente comando:

  > npm run test:int
- Para ejecutar los "tests" de aceptación es necesario ejecutar los siguientes comandos:
  
  > npm run serve  
  
  > npm run test:aceptacion

<a name="deployment"></a> 
## Deployment
El proyecto se encuentra desplegado en Heroku y se puede acceder mediante el siguiente link:
 > https://hexawork-frontend-vue.herokuapp.com
<a name="referencias"></a>  
## Referencias  
 - Videos:  
   - <a href="https://www.youtube.com/watch?v=NpjecaAgcVQ&ab_channel=AutentiaAutentia">Arquitectura de la (Vue)na - César Alberca</a>
   - <a href="https://www.youtube.com/watch?v=dH5aSQLXtKg&ab_channel=CodelyTV-Redescubrelaprogramaci%C3%B3n">Aprende DDD en 20 minutos</a>
   - <a href="https://www.youtube.com/watch?v=6Ufg6pPNVTs&ab_channel=reallyMello"> How to write NightwatchJS tests using the page object model tutorial introduction</a>
   - <a href="https://www.youtube.com/watch?v=AC4cZZS9A0g&ab_channel=ActionQA">Writing a Simple Test using Nightwatch</a>
 - Libros:
   - Clean Architecture: A Craftsman's Guide to Software Structure and Design (Robert C. Martin Series).
   - Patterns, Principles, and Practices of Domain-Driven Design (Scott Millett).  
 - Blogs:  
   - <a href="https://blog.octo.com/en/hexagonal-architecture-three-principles-and-an-implementation-example/">Hexagonal Architecture: three principles and an implementation example</a>.
   - <a href="http://xurxodev.com/como-crear-value-object-en-typescript/">Como crear un Value Object en Typescript</a>
   - <a href="https://khalilstemmler.com/articles/typescript-value-object/">Value Objects - DDD w/ TypeScript</a>
   - <a href="https://khalilstemmler.com/articles/typescript-domain-driven-design/entities/">Understanding Domain Entities [with Examples] - DDD w/ TypeScript</a>
   - <a href="https://www.freecodecamp.org/news/implementing-a-hexagonal-architecture/">Implementing a Hexagonal Architecture</a> 
   - <a href="https://www.lambdatest.com/blog/nightwatch-js-tutorial-selenium-webdriver/">Running Your First Test With NightWatchJS</a>
 - Documentación adicional:
   - Documentación de <a href="https://jestjs.io/docs/getting-started">Jest</a> utilizada para las pruebas unitarias y de integración.
   - Documentación de <a href="https://nightwatchjs.org/">NightWatch</a>  utilizada para las pruebas de aceptación.
<a name="desarolladores"></a>
## Desarrolladores  
<table>
    <tr>
    <td align="center"><img src="https://github.com/Jotarf.png?s=100" width="100px;" alt=""/><br /><sub><b><a href="https://github.com/Jotarf">José Ramírez (Jotarf)</a></b></sub><br /></td>
    <td align="center"><img src="https://github.com/davidjzacarias.png?s=100" width="100px;" alt=""/><br /><sub><b><a href="https://github.com/davidjzacarias">David Zacarías (davidjzacarias)</b></a></sub><br /></td>
    <td align="center"><img src="https://github.com/sofiarm21.png?s=100" width="100px;" alt=""/><br /><sub><b><a href="https://github.com/sofiarm21">Sofía Rodríguez (sofiarm21)</b></a></sub><br /></td>
  </tr>
</table>  
