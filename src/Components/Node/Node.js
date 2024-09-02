import { Handle, Position } from "reactflow"


function HandlesConstructor({type, configs}){

	const handlePosition = type === "target" ? Position.Left : Position.Right

	return (
		<>
			{
				configs?.map((config,idx)=>(
					<Handle 
						type={type} 
						id={config.id}
						position={handlePosition}
						style={{top : `${(100 * (idx + 1))/(configs.length + 1)}%`,  height : "10px", width : "10px", backgroundColor : "#002D62" ,...config.style}}
						
					/>
				))
			}
		</>
	)


}

function Node ({style, className, handlesConfig,children}) {

	return(
		<div className={`w-fit h-fit px-[12px] py-[8px] rounded-[12px] bg-white shadow-[-4px_6px_29px_-13px_rgba(115,147,179,0.5)]  hover:shadow-[-4px_6px_54px_-1px_rgba(115,147,179,0.5)] border-[1px] border-[solid] border-[#0047AB] ${className}`} style={style}>
			<HandlesConstructor type="target" configs={handlesConfig?.target} />
			{children}
			<HandlesConstructor type="source" configs={handlesConfig?.source} />
		</div>
	)

}

export default Node
