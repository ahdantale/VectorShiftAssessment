import { useState } from "react"
import Node from "../Components/Node/Node"

function UrlInputNode({id,data}){

	const [inputUrl, setInputUrl] = useState("")
	
	const handlesConfig = {
		source : [
			{id : `${id}-ip-url`}
		]
	}

	return (
		<Node handlesConfig={handlesConfig} className="!h-fit !w-fit">
			<div className="flex flex-col items-start justify-start">
				<label htmlFor="ip-url">URL : </label>
				<input type="text" placeholder="Enter the required source data URL" value={inputUrl} onChange={(e)=>setInputUrl(e.target.value)}/>
			</div>				
		</Node>
	)

}


export default UrlInputNode
