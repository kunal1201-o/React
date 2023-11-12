import { useState, useCallback, useEffect, useRef } from 'react'



function App() {
  const [lengths, setLength] = useState(8);
  const [addnumber, setAddNumber] = useState(false);
  const [addChar, setAddChar] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null)

  //use callback
  const passwordGenerator = useCallback(
    () => {

      let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      let pass = ""
      if (addnumber) string += "0123456789"
      if (addChar) string += "@#$%^&*{}"

      for (let i = 1; i <= lengths; i++) {
        let char = Math.floor(Math.random() * string.length + 1)
        pass += string.charAt(char)

      }
      setPassword(pass);


    },
    [lengths, addnumber, addChar, setPassword],
  )

  const copytoClipBoard = useCallback(() => {
    passwordRef.current?.select() //it will show selected portion and ? it check value is present or not.
    passwordRef.current?.setSelectionRange(0, 100)  // set range which get select when click on copy button
    window.navigator.clipboard.writeText(password)// this is use to copy text to clipboard
  }, [password])

  //use Effect
  useEffect(() => {
    passwordGenerator()
  }, [addChar, addnumber, lengths, passwordGenerator]) //if any of the dependencies changes then this function will run


  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'><input type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passwordRef}
        />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copytoClipBoard}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={8} max={100}
              value={lengths} className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }} />
            <label >length:{lengths}</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={addnumber}
              id='numberInput'
              onChange={() => { setAddNumber((prev) => !prev) }}
            />
            <label >Add Number</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={addChar}
              id='charInput'
              onChange={() => { setAddChar((prev) => !prev) }}
            />
            <label >Add Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
