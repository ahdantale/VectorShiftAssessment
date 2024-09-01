import { Handle, Position } from "reactflow"
import styles from "./Node.module.css"

function Node ({style, className, handlesConfig,children}) {

	return(
		<div className={`${styles.container} ${className}`} style={style}>
			{
				handlesConfig?.target?.map((config,idx)=>(
					<Handle
						type="target"
						id={config.id}
						position={Position.Left}
						style={{top : `${(100 * (idx + 1))/(handlesConfig.target.length + 1)}%`}}
					/>
				))
			}
			{children}
			{
				handlesConfig?.source?.map((config,idx)=>(
					<Handle 
						type="source"
						position={Position.Right}
						id={config.id}
						style={{top : `${(100 * (idx + 1))/(handlesConfig.source.length + 1)}%`}}
					/>
				))
			}
		</div>
	)

}

export default Node
