function App() {

  const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
  ];

  const step = 1;

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
        <button className="bg-sky-900 text-zinc-100">Previous</button>
        <button className="bg-sky-900 text-zinc-100">Next</button>
      </div>
    </div>
  )
}

export default App
