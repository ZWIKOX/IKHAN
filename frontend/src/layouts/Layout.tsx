import Sidebar from '@/components/Sidebar.tsx'
import Navbar from '../components/Navbar.tsx'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <>
      <header className="bg-gray-800 text-white pb-3" >
        <Navbar username={''} avatarUrl={null} />
      </header>
      <div className="flex">
        <aside className="w-64 bg-gray-700 text-white min-h-screen">
          <Sidebar />
        </aside>
        <main className="flex-1 p-4">
          <Outlet />
        </main>
      </div>
    </>
  )
}
