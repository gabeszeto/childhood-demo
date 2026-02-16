import { Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import SignIn from './pages/SignIn'
import CreateAccount from './pages/CreateAccount'

import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import User from "./pages/User";
import Finder from "./pages/Finder";

import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "var(--kohl)",
            color: "var(--chalk)",
            borderRadius: "12px",
          },
        }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/create" element={<CreateAccount />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/user" element={<User />} />
        <Route path="/finder" element={<Finder />} />

      </Routes>
    </>
  )
}

export default App
