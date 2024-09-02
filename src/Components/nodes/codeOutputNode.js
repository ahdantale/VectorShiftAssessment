import { useState } from "react"
import Node from "../Node/Node"

const testCodeCLang = `
	#include<stdio.h>

	int main() {
		printf("Hello world");
		return(0);
	}
`

function CodeOutputNode({id, data=null}) {


	const handlesConfig = {
		target : [
			{id : `${id}-code`}
		]
	}
	
	return (
		<Node handlesConfig={handlesConfig} className="!h-fit !w-fit">
			<div className="flex flex-col items-start justify-start gap-[6px]">
				<span className="pb-[4px] font-[600] w-full border-b-[1px] border-b-[solid] border-b-[#0818A8]">Code Output</span>
				<pre>
					<code>
						{testCodeCLang}
					</code>
				</pre>
			</div>
		</Node>
	)

}


export default CodeOutputNode
