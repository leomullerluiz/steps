import { useState } from 'react'

function App() {

  const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
  ];

  const [step, setStep] = useState(1);
  const [maxStep,] = useState(messages.length);

  const handlePrev = () => {
    step > 1 && setStep(step - 1)
  };

  const handleNext = () => {
    step < maxStep && setStep(step + 1)
  };

  return (
    <div className="steps">
      <div className="flex justify-between">
        <div className={`p-4 rounded-md ${step >= 1 ? "bg-sky-900 text-zinc-100" : "bg-slate-200"}`}>
          1
        </div>
        <div className={`p-4 rounded-md ${step >= 2 ? "bg-sky-900 text-zinc-100" : "bg-slate-200"}`}>
          2
        </div>
        <div className={`p-4 rounded-md ${step >= 3 ? "bg-sky-900 text-zinc-100" : "bg-slate-200"}`}>
          3
        </div>
      </div>
      <p className="message">
        Step: {step}: {messages[step - 1]}
      </p>
      <div className="buttons">
        <button
          className="bg-sky-900 text-zinc-100"
          onClick={handlePrev}
        >
          Previous
        </button>
        <button
          className="bg-sky-900 text-zinc-100"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default App
