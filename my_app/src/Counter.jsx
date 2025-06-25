import { useState } from "react"

const Counter = ()=>{

    let [counter,setCounter] = useState(0)
    let incr=()=>setCounter(counter+1)
    let decr=()=>setCounter(counter-1)
    let reset=()=>setCounter(0)


    // let msg=()=>{
    //     alert("CLICKED THE BUTTON")
    // }
    const counterMain ={
        padding:'10px',
        margin:'20px 0',
        borderRadius:"4px",
        backgroundColor:'rgb(163, 161, 159)',
        boxShadow:'4px 4px 4px rgb(105, 100, 100)',
        color:'white',
        display:'flex',
        flexDirection:'column',
        textAlign:'center',
        gap:'10px',
        justifySelf:"center",
        width:'250px',
        height:'250px',
    }

    const btn = {
        padding:'6px',
        border:'none',
        borderRadius:'10px',
        boxShadow:'3px 3px 3px rgb(119, 117, 117)',
        cursor:'pointer',
    }
    const hov={
        backgroundColor:'red'
    }
    return(
        <div className="counter-main" style={counterMain}>
            <h4>Count: {counter}</h4>
            <button style={btn} onClick={incr} onMouseOver={this.style.backgroundColor={hov}}>Increment</button>
            <button style={btn} onClick={decr}>Decrement</button>
            <button style={btn} onClick={reset}>RESET</button>
        </div>
    )
}

export default Counter