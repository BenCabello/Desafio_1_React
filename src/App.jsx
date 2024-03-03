import React from 'react';
import Header from './components/Header';
import MyCard from './components/MyCard';
import Footer from './components/Footer';


const App = () => {
  return (
<>
  <div>
    <Header title="Adopta un perrito"/>
      <div className='container'>
        <div className='row'>
          <div className='col d-flex justify-content-center'>
            <MyCard
              image="https://images.pexels.com/photos/1346086/pexels-photo-1346086.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              name="Roberto"
              description="«Fuera de un perro, un libro es el mejor amigo del hombre. Dentro de un perro es demasiado oscuro para leerlo». – Groucho Marx"
              text="Adoptar"
              colour="primary"          
              />
            </div>
            <div className='col d-flex justify-content-center'>
              <MyCard
              image="https://media.istockphoto.com/id/1317414098/es/foto/feliz-perro-americano-staffordshire-sonriendo-aislado-sobre-fondo-azul.jpg?s=2048x2048&w=is&k=20&c=wph1m7Vic8UY6FxKQ1LP9KfE72nQQahNhmYBKL0SOeU="
              name="Carlos"
              description="«Perro es Dios escrito al revés en inglés». – Duane Chapman"
              text="Adoptar"
              colour="primary"          
            />
            </div>
            <div className='col d-flex justify-content-center'>
            <MyCard
            image="https://media.istockphoto.com/id/1306543850/es/foto/gato-tabby-y-perro-collie-frontera.jpg?s=2048x2048&w=is&k=20&c=-x1PuJKXvSfoieZdp-H4fZQSJ_Yf9sUK_T3A1o3FfnI="
            name="Messi"
            description="«Los perros tienen un entusiasmo ilimitado, pero no tienen sentido de la vergüenza. Debería tener un perro como entrenador de vida». – Moby"
            text="Adoptar"
            colour="primary"          
            />
            </div>
            </div>
          <div className='row'>
        <div className='col d-flex justify-content-center'>
          <MyCard
          image="https://media.istockphoto.com/id/1283181807/es/foto/la-mano-del-hombre-est%C3%A1-acariciando-a-un-perro.jpg?s=2048x2048&w=is&k=20&c=nCn3Dd-ad2G9fDYv5UXAqC4YfxHoiOkhRy7Upip_aMU="
          name="Jorge"
          description="«Si no tienes un perro, al menos uno, no necesariamente hay nada malo en ti, pero puede haber algo malo en tu vida.» – Roger A. Caras"
          text="Adoptar"
          colour="primary"          
          />
        </div>
        <div className='col d-flex justify-content-center'>
          <MyCard
          image="https://media.istockphoto.com/id/1366605148/es/foto/cachorro-perro-border-collie-sosteniendo-estetoscopio-en-boca-aislado-sobre-fondo-amarillo.jpg?s=2048x2048&w=is&k=20&c=ijHM1piKPK4cc8NJgtk1kSz5gfSHclBvUltC7DnzeRQ="
          name="Juan"
          description="«He visto una mirada en los ojos de los perros, una mirada que se desvanece rápidamente de asombroso desprecio, y estoy convencido de que básicamente los perros piensan que los humanos están locos». – John Steinbeck"
          text="Adoptar"
          colour="primary"          
          />
        </div>
        <div className='col d-flex justify-content-center'>
          <MyCard
          image="https://media.istockphoto.com/id/1405962520/es/foto/lindo-perro-west-highland-white-terrier-despu%C3%A9s-del-ba%C3%B1o-perro-envuelto-en-toalla-concepto-de.jpg?s=2048x2048&w=is&k=20&c=tG8MLbQyBgc28glj2zyX6c6gP7KJDMYfNmIevtuui60="
          name="Agustin"
          description="«Cualquiera que no sepa a qué sabe el jabón nunca ha lavado a un perro». – Franklin P. Jones"
          text="Adoptar"
          colour="primary"          
          />
        </div>
        </div>
        </div>
        </div>
        
  <div>
  <Footer
    content = "Adopta un perrito. Derechos reservados 2024®"
  />
  </div>
  </>
  );
};

export default App;
