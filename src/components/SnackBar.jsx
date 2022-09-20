import React ,{useState,forwardRef,useImperativeHandle} from "react";
import './Snackbar.css';

const SnackBar = forwardRef((props,ref) => {
    const [showSnackbar,setShowSnakbar] = useState(false);

    useImperativeHandle(ref, ()=>({
        show(){
            setShowSnakbar(true);
            setTimeout(()=> {
                setShowSnakbar(false);
            }, 3000);
        },
    }));

    return (
       
         <div className="snackbar"
         id={showSnackbar? "show" : "hide"}
        style={{
          backgroundColor:props.type==="sucess" ? "#00F593" : "#FF0033",
          color:props.type === "sucess" ? "black" :"white",
          }}
          >
        <div className="symbol">
            {props.type === "sucess" ? <h1>&#x2713;</h1> : <h1>&#x2613;</h1>}
            </div>
        <div className="message">{props.message}</div>

    </div>
    );

});
export default SnackBar;