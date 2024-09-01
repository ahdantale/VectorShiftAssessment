// inputNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import Node from '../Components/Node/Node';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

	const handlesConfig = {
		source : [
			{id:`${id}-value`}
		]
	}

  return (
		<Node handlesConfig={handlesConfig} className="!h-fit !w-fit">
			<div className='flex flex-col gap-[6px]'>
				<span>Input</span>
				<div className='flex flex-row items-center justify-start gap-[6px]'>
					<label htmlFor='text-ip'>
						Name:
					</label>
					<input 
						type="text" 
						value={currName} 
						onChange={handleNameChange} 
						id="text-ip"
					/>
				</div>
				<div className='flex flex-row items-center justify-start gap-[6px]'>
					<label htmlFor='ip-dropdown'>
						Type:
					</label>
					<select value={inputType} onChange={handleTypeChange} id="ip-dropdown">
						<option value="Text">Text</option>
						<option value="File">File</option>
					</select>
				</div>
			</div>
		</Node>
  );
}
