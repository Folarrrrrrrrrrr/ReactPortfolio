import React from "react"
import "../assets/style/styles.css";

const Botton =()=>{

    return(
        <div className="fixed bottom-5 right-4 text-white z-[999]
         cursor-pointer text-4xl bg-cyan-600 w-16 h-16 flex items-center
          justify-center rounded-full animate-bounce " > 
            {/* <ion-icon name="logo-whatsapp" ></ion-icon> */}
            <ion-icon name="chatbubble-ellipses"></ion-icon>
        </div>
    )
}
export default Botton 