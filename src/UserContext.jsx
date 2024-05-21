import { useState } from "react"


const Admin =()=>{
    const [createUser, setCreateUser] = useState({
        username: "",
        email: "",
        imgUrl: ""
    })
    
    return(
    <>
        <form action="">
            <div className="input-one">
                <label htmlFor=""></label>
                <input type="text" value={} name="" />
            </div>

            <div className="input-one">
                <label htmlFor=""></label>
                <input type="text" value={} name="" />
            </div>
            <button> Login</button>
        </form>
    
    </>
    )
}

export default Admin