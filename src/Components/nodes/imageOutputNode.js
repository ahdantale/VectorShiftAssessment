import Node from "../Node/Node"

function ImageOutputNode ({id}) {
	
	const handlesConfig = {
		target : [
			{id : `${id}-img-op`}
		]
	}

	return (
		<Node handlesConfig={handlesConfig} className="!h-fit !w-fit">
			<div className="flex flex-col items-start justify-start gap-[6px]">
				<span className="pb-[4px] font-[600] w-full border-b-[1px] border-b-[solid] border-b-[#0818A8]">Output Image</span>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
					<path d="M372.2 52c0 20.9-12.4 39-30.2 47.2L448 192l104.4-20.9c-5.3-7.7-8.4-17.1-8.4-27.1c0-26.5 21.5-48 48-48s48 21.5 48 48c0 26-20.6 47.1-46.4 48L481 442.3c-10.3 23-33.2 37.7-58.4 37.7l-205.2 0c-25.2 0-48-14.8-58.4-37.7L46.4 192C20.6 191.1 0 170 0 144c0-26.5 21.5-48 48-48s48 21.5 48 48c0 10.1-3.1 19.4-8.4 27.1L192 192 298.1 99.1c-17.7-8.3-30-26.3-30-47.1c0-28.7 23.3-52 52-52s52 23.3 52 52z"/></svg>			
</div>
		</Node>
	)

}

export default ImageOutputNode