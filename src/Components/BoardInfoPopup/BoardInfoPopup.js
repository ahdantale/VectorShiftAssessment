import Popup from "../Popup/Popup";
import CloseIcon from '@mui/icons-material/Close';

function BoardInfoPopUp({numNodes, numEdges, isDAG, trigger, setTrigger}) {

	function handleCloseClick(e) {
		setTrigger(false)
	}
	
	return (
		<Popup {...{trigger, setTrigger}}>
			<div className="flex flex-col bg-white px-[12px] py-[6px] rounded-[6px]">
				<div className="w-full flex items-center justify-end">
					<button onClick={handleCloseClick}><CloseIcon /></button>
				</div>
				<div className="w-full flex flex-col items-start justify-start gap-[8px]">
					<h3>There are <strong>{numNodes}</strong> nodes on the board.</h3>
					<h3>There are <strong>{numEdges}</strong> edges connecting the nodes.</h3>
					<h3>The generated board is {!isDAG  ? <span className="text-red-500 font-[600]">not</span> : ""} a Directed Acylic Graph.</h3>
				</div>
			</div>
		</Popup>
	)
}

export default BoardInfoPopUp
