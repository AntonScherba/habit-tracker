import { RouterProvider } from 'react-router-dom';
import { router } from './AppRouter';
import { AuthProvider } from './contexts/Auth';

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
