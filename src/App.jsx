import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonalInfo from './components/PersonalInfo'
import Acadamic from './components/Acadamic'
import CareerrGoals from './components/CareerGoals'
import { motion } from "framer-motion";

function App() {
  const [step, setStep] = useState(1);
  const totalSteps = 3;
  const stepLabels = ["Personal Info", "Academic", "Career Goals"];
  const [direction, setDirection] = useState(0);

  return (
    <div  className="flex bg-[url('https://educloud.app/lms/src/attendance/hero2.webp')]  bg-no-repeat bg-cover bg-center ">
    
      <div className='flex flex-col h-screen justify-center w-full '>
        <div className='flex justify-center items-center '>
          <div className="w-1/4 mx-auto mb-8 mt-8 ">
            <div className="flex justify-between mb-2 bg-am">
              {stepLabels.map((label, idx) => (
                <div
                  key={idx}
                  className={`text-xs font-semibold ${step === idx + 1 ? "text-blue-600" : "text-gray-600"}`}
                >
                  {label}
                </div>
              ))}
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${(step / totalSteps) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
        <div className='w-full justify-center flex'>
          <motion.div
          initial={{opacity:0,scale:0.50}}
          animate={{opacity:1,scale:1}}
          transition={{
            type:"spring",
            stiffness:100,
            damping:20,
            duration:1
          }} 
          className='w-full '>
            {step === 1 && <PersonalInfo  direction={direction} onNext={() => { setDirection(1); setStep(step + 1); }} />}
            {step === 2 && <Acadamic direction={direction} onPrev={() => { setDirection(-1); setStep(step - 1); }} onNext={() => { setDirection(1); setStep(step + 1); }} />}
            {step === 3 && <CareerrGoals direction={direction} onPrev={() => { setDirection(-1); setStep(step - 1); }} />}
          </motion.div>
        </div>
      </div>
      
        
      
    </div>
  )
}

export default App
