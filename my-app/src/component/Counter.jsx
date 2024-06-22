
export function Counter({inc,dec}){
    
    return(
        <>
        <button style={{backgroundColor:"orange"}} onClick={inc}>inc</button>
        <button style={{backgroundColor:"orange",marginLeft:"5px"}} onClick={dec}>dec</button>
        </>
    )
}