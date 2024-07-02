import './App.css';
import { Link } from 'react-router-dom';
import CustomRoutes from './Routes/CustomRoutes';
function App()
{
  return (
    <div className='outer-pokedex'>
      <Link to='/'> <h1>Pokedex</h1></Link>
      <CustomRoutes></CustomRoutes>
    </div>
  );
}
export default App;
