import { useState } from "react";

const ColorChanger=()=>{
    const colors= ['red','green','blue']

    const [index,setindex]= useState(0)

    const changeClr=()=>{
        setindex((index+1) % colors.length)
    }
    const colorMain = {
        padding:'40px',
        margin:'20px 0',
        borderRadius:'4px',
        display:'flex',
        flexDirection:'column',
        justifySelf:'center',
        gap:'10px',
        backgroundColor:'#454444',
        color:'white',
        boxShadow:'2px 4px 5px rgb(82, 80, 80)',
        textAlign:'center'
    }

    const preview = {
        height:'250px',
        width:'250px',
        backgroundColor:colors[index],

    }
    const btn={
        padding:'8px',
        border:'none',
        borderRadius:'4px',
        cursor:'pointer',
        backgroundColor:'rgb(126, 120, 120)',
        color:'white'
    }
    return(
        <div className="colorMain" style={colorMain}>
            <h1>Color Changer</h1>
            <div className="preview" style={preview}>
                <br />
            </div>

            <button onClick={changeClr} style={btn}>Change Color</button>
        </div>
    )
}
export default ColorChanger