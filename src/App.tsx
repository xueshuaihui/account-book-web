import './App.css';
import { RouterProvider } from 'react-router-dom'
import router from './router';

const App = () => {
  return (
    <div className="content">
     <RouterProvider router={router} />
    </div>
  );
};

export default App;
