import React, { useState, useEffect, useRef } from 'react'

function useInterval(fun, time) {
  const savedCallbackRef = useRef()
  const timerIdRef = useRef()
  const isStartingRef = useRef(false)

  function timeOut() {
    fun()
    timerIdRef.current = setTimeout(() => {
      if (isStartingRef.current) {
        savedCallbackRef.current()
      }
    }, time)
  }

  function startFunc() {
    clearTimeout(timerIdRef.current)
    isStartingRef.current = true
    timeOut()
  }

  function stopFun() {
    isStartingRef.current = false
  }

  useEffect(() => {
    savedCallbackRef.current = timeOut
  })

  useEffect(() => clearTimeout(timerIdRef.current), [])

  return [ startFunc, stopFunc ]
}

export default useInterval
