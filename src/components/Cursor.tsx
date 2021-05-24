import React, {useRef, useEffect} from 'react'

function Cursor() {

    const cursorRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        document.addEventListener('mousemove', (e) => {
            const {clientX, clientY} = e
            let cursorX,cursorY
            null !== cursorRef.current ? cursorX = clientX - cursorRef.current.clientWidth / 2 : <></>
            null !== cursorRef.current ? cursorY = clientY - cursorRef.current.clientHeight / 2 : <></>
            cursorRef.current!.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`
        })
    })

    return (
        <div className = 'app-cursor' ref = {cursorRef}>
            
        </div>
    )
}

export default Cursor
