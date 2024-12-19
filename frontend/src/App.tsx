import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'

const Dashboard = lazy(() => import("./pages/Dashboard"));

export default function App() {
  return (
    <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route
        path="dashboard/*"
        element={
          <Suspense fallback={<>loading...</>}>
            <Dashboard />
          </Suspense>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes>
  )
}
