
export function Timer({start,stop,pause}){

    return(
        <>
        <button onClick={start}>start</button>
        <button onClick={stop}>stop</button>
        <button onClick={pause}>pause</button>
        </>
    )
}