import { useState } from 'react';
import './App.css';


function App() {
  const [count, setCount] = useState(0);

  return (<div className="App">
    <section className="featured-destaque">
    <h2>Coleções em destaque</h2>
    <div className="collections">
    </div></section>
    
    <section className="featured-collections">

    <div className="collection">
    <div className="discount-tag">30% OFF</div>
    <img src="https://github.com/RyannBizerra/projeto-geracaotech/blob/b030b13b50231aa7de5bef7d8a8b32199994312f/collection-1.png" alt="Supreme" />
    <button>Comprar</button>
    </div>
    
    <div className="collection">
    <div className="discount-tag">30% OFF</div>
    <ul><img src="file:///C:/Users/lucas/OneDrive/%C3%81rea%20de%20Trabalho/Gera%C3%A7%C3%A3o%20Tech/PROJETO%20DE%20FRONT%20END/projeto_front_end/collection-2.png" alt="Adidas" /></ul>
    
    <button>Comprar</button>
    </div>

    
    <div className="collection">
    <div className="discount-tag">30% OFF</div>
    <img src="file:///C:/Users/lucas/OneDrive/%C3%81rea%20de%20Trabalho/Gera%C3%A7%C3%A3o%20Tech/PROJETO%20DE%20FRONT%20END/projeto_front_end/collection-3.png" alt="Beats Bass" />
    <button>Comprar</button>
    </div>
    </section>

    <section className='categories-destaque'>
    <p>Coleções em destaque</p>
    </section>

    <section className="categories">

    <section className='categories-circulos'>
    <div className='circulos'></div>
    <div className='circulos'></div>
    <div className='circulos'></div>
    <div className='circulos'></div>
    <div className='circulos'></div>

    </section>
    


    <div className="category-icons">
     <div className="category">Camisetas</div>
     <div className="category">Calças</div>
     <div className="category">Bonés</div>
     <div className="category">Headphones</div>
     <div className="category">Tênis</div>
    </div>
    </section>


    </div>

    


   
  );
}

export default App;
