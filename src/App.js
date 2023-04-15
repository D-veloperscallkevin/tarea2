import './App.css';
import Navbar from './Navbar';
import Tarjeta from './Tarjeta';
import Product from './Product';
import Ads from './Ads';

import ad from './assets/ad.jpeg'
import ad2 from './assets/ad2.jpeg';
import ad3 from './assets/ad3.jpeg';
import producto from './assets/producto.jpeg'
import producto2 from './assets/producto2.jpeg'
import producto3 from './assets/producto3.jpeg'

import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='producto'>
      <Product
      imagen={producto}
      titulo={"Pizza Mecatelio"}
      descripcion={"La más picante y antigua del distrito, está en la fama."}/>
      
      <Product
      imagen={producto2}
      titulo={"Pizza Toledo Again"}
      descripcion={"Nueva colaboración con extra orégano y rodajas de peperoni."}/>

      <Product
      imagen={producto3}
      titulo={"Pizza De Boca en Boca"}
      descripcion={"Es la mas básica del restaurante, contiene pasas y piña bañadas."}/>
      </div>
      <div className='position'>
      <Tarjeta 
      titulo={"EVENTOS DEL FIN DE SEMANA"}
      descripcion={"Espacio infantil para fiesta de cumpleaños con la temática de La Pensión. Hora de comienzo: 8am"}/>

      <Tarjeta 
      titulo={"HORARIO DEL MES DE ABRIL"}
      descripcion={"De Lunes a Viernes tenemos abierto de 10am a 10pm. Los Sábados y Domingos abrimos de 9am a 11pm"}/>
      </div>

      <div className='anuncio'>
      <Ads image={ad}/>

      <Ads image={ad2}/>

      <Ads image={ad3}/>
      </div>

      <Footer/>
    </div>
  );
}

export default App;
