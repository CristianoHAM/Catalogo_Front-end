
import './App.css'
import { Card } from './components/card/card';
import { useMotorcycleData } from './hooks/useMotorcycleData';

function App() {
  const { data, isError, status } = useMotorcycleData();


  return (
    <div className='container'>
      <h1>Catalogo de motos</h1>
      <div className='card-grid'>
        {!isError && <>
        {data?.map( motorcycleData =>
          <Card
          title={motorcycleData.title}
          model={motorcycleData.model}
          brand={motorcycleData.brand}
          year={motorcycleData.year}
          img={motorcycleData.img}
          />
          )}
          </>
        }
        {isError && <h1>erro{status}</h1>}

      </div>
    </div>
  )
}

export default App
