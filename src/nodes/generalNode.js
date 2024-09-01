import Node from "../Components/Node/Node"

function GeneralNode({id, data}) {
	
	const handlesConfig = {
		target : [
			{ id : `${id}-general`},
			{ id : `${id}-general-2`}
		],
		source : [
			{ id : `${id}-general-response`}
		]
	}
	
	return (
		<Node  handlesConfig={handlesConfig}>
			<div className="w-full h-full flex flex-col items-start justify-start gap-[6px]">
				<span>General Node</span>
				<span>This is a general node.</span>
			</div>
		</Node>
	)
}

export default GeneralNode
