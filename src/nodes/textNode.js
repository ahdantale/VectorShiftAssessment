// textNode.js

import { useEffect, useMemo, useRef, useState } from 'react';
import { Handle, Position } from 'reactflow';
import Node from '../Components/Node/Node';

export const TextNode = ({ id, data }) => {

	const textAreaRef = useRef()
	const [currText, setCurrText] = useState(data?.text || '{{input}}');
  
	const targetHandleConfig = useMemo(()=>{
		const braceMatchRegex = /({{[a-zA-Z_$][0-9a-zA-Z_$]*}})/g
		const braceGroups = currText.match(braceMatchRegex)
		const textMatchRegex = /([a-zA-Z_$][0-9a-zA-Z_$]*)/g
		
		const targetHandleConfig = []
		
		braceGroups?.map(val=>val.match(textMatchRegex)[0]).forEach((val,idx) => {
			targetHandleConfig.push({
				id : `${id}-text-input-${idx}`
			})	
		});
		return targetHandleConfig
	},[currText])

  const handleTextChange = (e) => {
	e.stopPropagation()
    setCurrText(e.target.value);
  };


  const handlesConfig = {
		target : targetHandleConfig,
		source : [
			{id:`${id}-output`} 
		]
  }


  useEffect(()=>{
	if(textAreaRef.current) {
		textAreaRef.current.style.height = "fit-content"
		textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`
	}
  },[currText])

  return (
    <Node handlesConfig={handlesConfig} className="!h-fit !w-fit">
			<div className='flex flex-col gap-[6px]'>
				<span>Text</span>
				<div className='flex flex-row items-start justify-start gap-[6px]'>
					<label htmlFor='text-ip-1'>
						Text:
					</label>
					<textarea
						id="text-ip-1"
						value={currText}
						onChange={handleTextChange}
						ref={textAreaRef}
						className="max-w-[250px] w-[250px]"
					/>
				</div>
			</div>
    </Node>
  );
}
