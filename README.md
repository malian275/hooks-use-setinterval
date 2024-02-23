A reack hooks, Provide the function of setInterval

### Installation
```
npm i use-setinterval -S
```

### Usage
```
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import useInterval from 'use-setinterval'

function App() {
  const [count, setCount] = useState(0)
  const [startFunc, stopFunc] = useInterval(func, 1000)

  function func() {
    if (count < 3) {
      setCount(count + 1)
    } else {
      stopFunc()
    }
  }

  return (
    <div>
      <p>{count}</p>
      <p onClick={startFunc}>start</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
```
