import { useState } from "react"
import Node from "../Node/Node"

function UrlInputNode({id,data}){

	const [inputUrl, setInputUrl] = useState("")
	
	const handlesConfig = {
		source : [
			{id : `${id}-ip-url`}
		]
	}

	return (
		<Node handlesConfig={handlesConfig} className="!h-fit !w-fit">
			<div className="flex flex-col items-start justify-start min-w-[250px] gap-[8px]">
				<label htmlFor="ip-url" className="pb-[4px] font-[600] w-full border-b-[1px] border-b-[solid] border-b-[#0818A8]">URL : </label>
				<input className="w-full rounded-[6px]" type="text" placeholder="Enter the required source URL" value={inputUrl} onChange={(e)=>setInputUrl(e.target.value)}/>
			</div>				
		</Node>
	)

}


export default UrlInputNode
