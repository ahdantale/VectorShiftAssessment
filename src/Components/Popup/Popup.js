import { useEffect, useRef } from "react"
import styles from "./Popup.module.css"

function Popup({trigger, setTrigger, children, outerContainerClassName}) {

	const innerContainerRef = useRef(null)
	
	function closePopup (event, ref, setTrigger) {
		if(ref.current && !ref.current.contains(event.target)){
			setTrigger(false)
		}
	}
	
	useEffect(()=>{
		window.addEventListener("mousedown",(e)=>{closePopup(e,innerContainerRef,setTrigger)})	
		return () => {
			window.removeEventListener("mousedown",(e)=>{closePopup(e,innerContainerRef,setTrigger)})	
		}	
	},[])
	
	if(trigger) {
		return (
			<div  className={`${styles.outerContainer} ${outerContainerClassName}`}>
				<div ref={innerContainerRef}>
					{children}	
				</div>
			</div>
		)
	}

}

export default Popup

