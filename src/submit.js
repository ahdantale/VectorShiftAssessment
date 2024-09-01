// submit.js
import { useStore } from "./store";
import {pick, omit} from "lodash"
import { apiURL } from "./apiURL";
import { useState } from "react";
import BoardInfoPopUp from "./Components/BoardInfoPopup/BoardInfoPopup";

export const SubmitButton = () => {

	const {nodes, edges} = useStore()
	const [boardInfoProps, setBoardInfoProps] = useState({
		trigger : false,
		numEdges : 0,
		numNodes : 0,
		isDAG : false
	})

	function setBoardInforPopupTrigger(newValue) {
		setBoardInfoProps(prev=>({...prev, trigger : newValue}))
	}

	async function handleSubmitClick (e) {
		const nodesToSend = JSON.stringify(nodes.map(node=> pick(node, ["id"])))
		const edgesToSend = JSON.stringify(edges.map(edge=> pick(edge, ["id","source","target"])))
		
		const parsenEndpointURL = new URL(`${apiURL}/pipelines/parse/${nodesToSend}/${edgesToSend}`)
	
		try {
			const res = await fetch(parsenEndpointURL)
			const infoJSON = await res.json()
			setBoardInfoProps((prev) => ({
				trigger : true,
				numNodes : infoJSON.num_nodes,
				numEdges : infoJSON.num_edges,
				isDAG : infoJSON.is_dag,
			}))

		}catch(err){
			console.error(err)
		}

	}

    return (
		<>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <button type="submit" onClick={handleSubmitClick}>Submit</button>
        </div>
		<BoardInfoPopUp 
				trigger={boardInfoProps.trigger} 
				setTrigger={setBoardInforPopupTrigger}
				numNodes={boardInfoProps.numNodes}
				numEdges={boardInfoProps.numEdges}
				isDAG={boardInfoProps.isDAG}
		/>
		</>
    );
}
