// outputNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import Node from '../Node/Node';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

	const handlesConfig = {
		target : [
			{id:`${id}-value`}	
		]
	}

  return (
		<Node className="!h-fit !w-fit" handlesConfig={handlesConfig}>
			<div className='flex flex-col gap-[6px]'>
				<span className="pb-[4px] font-[600] w-full border-b-[1px] border-b-[solid] border-b-[#0818A8]">Output</span>
				<div className='flex flex-row items-center justify-start gap-[6px]'>
					<label htmlFor='text-op'>
						Name:
					</label>
					<input 
						id="text-op"
						type="text" 
						value={currName} 
						onChange={handleNameChange} 
					/>
				</div>
				<div className='flex flex-row items-center justify-start gap-[6px]'>
					<label htmlFor='op-dropdown'>
						Type:
					</label>
					<select value={outputType} onChange={handleTypeChange} id="op-dropdown">
						<option value="Text">Text</option>
						<option value="File">Image</option>
					</select>
				</div>

			</div>
		</Node>
  );
}
