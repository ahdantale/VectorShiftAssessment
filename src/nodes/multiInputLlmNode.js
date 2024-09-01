import { useMemo, useState } from "react"
import Node from "../Components/Node/Node"



function MultiInputLlmNode({id, data}){

	const [noOfInputs, setNoOfInputs] = useState(2)
	
	const targetConfig = useMemo(()=>{
		const tempTargetConfig = []
		for(let idx=0;idx<noOfInputs;idx++){
			tempTargetConfig.push({
				id : `${id}-multiLLMIP-${idx}`
			})
		}
		return tempTargetConfig
	},[noOfInputs])

	const handlesConfig = {
		target : targetConfig,
		source : [
			{id : `${id}-multiLLMOP`}
		]
	}

	return (
		<Node handlesConfig={handlesConfig} className="!h-fit !w-fit flex flex-col items-start justify-start gap-[8px]">
			<h4>Multi Input LLM</h4>
			<div className="flex flex-row items-start justify-start gap-[6px]">
				<label>No of inputs</label>
				<input type={"Number"} value={noOfInputs} onChange={(e)=>setNoOfInputs(parseInt(e.target.value))}/>
			</div>
		</Node>
	)

}


export default MultiInputLlmNode
