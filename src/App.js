import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Testimony from './components/Testimony';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Esto es lo que dicen nuestros alumnos sobre FreeCodeCamp:</h1>
        <Testimony 
          name='Shawn wang'
          country='Singapur'
          img='shawn'
          cargo='Ingerio de software'
          empresa='Amazon'
          Testimony='Siempre he tenido problemas para aprender Javascript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedo. Estudiar, Javascript, asi como estructura de datos, algoritmos en freeCodeCamp me dio las 
          habilidades y la confianza necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Sportify.  ' 
        />
        <Testimony 
          name='Ema Bosnian'
          acountry='Suecia'
          img='emma'
          cargo='Ingeria de software'
          empresa='spotify'
          Testimony='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida. ' 
        />
        <Testimony 
          name='Sarah Chima'
          acountry='Nigeria'
          img='sarah'
          cargo='Ingeniera de Software'
          empresa='ChatDesk'
          Testimony='freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble.' 
        />

      </div>
    </div>
  );
  }

export default App;
