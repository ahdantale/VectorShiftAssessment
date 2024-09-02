import Node from "../Node/Node"

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
				<span className="pb-[4px] font-[600] w-full border-b-[1px] border-b-[solid] border-b-[#0818A8]">General Node</span>
				<span>This is a general node.</span>
			</div>
		</Node>
	)
}

export default GeneralNode
