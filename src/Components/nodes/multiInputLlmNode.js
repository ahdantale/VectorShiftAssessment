import { useMemo, useState } from "react"
import Node from "../Node/Node"



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
			<span className="pb-[4px] font-[600] w-full border-b-[1px] border-b-[solid] border-b-[#0818A8]">Multi Input LLM</span>
			<div className="flex flex-row items-start justify-start gap-[6px]">
				<label>No of inputs</label>
				<input type={"Number"} value={noOfInputs} onChange={(e)=>setNoOfInputs(parseInt(e.target.value))}/>
			</div>
		</Node>
	)

}


export default MultiInputLlmNode
