import { useState } from 'react'

function App() {

  const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
    "Get a promotion 🏆",
    "Have a great day 🌞",
  ];

  const [step, setStep] = useState(1);

  const handlePrev = () => {
    step > 1 && setStep(step - 1)
  };

  const handleNext = () => {
    step < messages.length && setStep(step + 1)
  };

  return (
    <div className="steps">

      <div className="flex justify-between">
        {
          messages.map((message, index) => {
            return (
              <div
                key={index}
                className={`p-4 rounded-md ${step >= index + 1 ? "bg-sky-900 text-zinc-100" : "bg-slate-200"}`}
              >
                {index + 1}
              </div>
            )
          })
        }
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
