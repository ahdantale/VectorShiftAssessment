// llmNode.js

import { Handle, Position } from 'reactflow';
import Node from '../Node/Node';

export const LLMNode = ({ id, data }) => {

	const handlesConfig = {
		target : [
			{id:`${id}-system`}, 
			{id:`${id}-prompt`}, 
		],
		source : [
			{id:`${id}-response`}, 
		]
	}


  return (
	<Node handlesConfig={handlesConfig}>
	  <div className='w-full flex flex-col items-start justify-start gap-[8px]'>
		<span className="pb-[4px] font-[600] w-full border-b-[1px] border-b-[solid] border-b-[#0818A8]">LLM</span>
		<span>This is a LLM.</span>
	  </div>
	</Node>
  );
}
