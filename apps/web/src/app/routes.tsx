import { createBrowserRouter } from 'react-router-dom';
import HomePage from '@/components/HomePage';
import PatchConstructor from '@/components/ConstructorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/constructor',
    element: <PatchConstructor />,
  },
]);

export default router;
