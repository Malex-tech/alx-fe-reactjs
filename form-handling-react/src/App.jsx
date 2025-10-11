import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import RegistrationForm from "./components/RegistrationForm";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <RegistrationForm />
    </div>
  );
}

import FormikForm from "./components/formikForm";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <FormikForm />
    </div>
  );
}

export default App;
