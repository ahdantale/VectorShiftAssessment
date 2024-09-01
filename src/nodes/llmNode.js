// llmNode.js

import { Handle, Position } from 'reactflow';
import Node from '../Components/Node/Node';

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
	<Node 
		handlesConfig={handlesConfig}
		>
	  <div>
		<span>LLM</span>
	  </div>
	  <div>
		<span>This is a LLM.</span>
	  </div>
	</Node>
  );
}
