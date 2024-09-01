// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div style={{ padding: '10px' }}>
            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />

				<DraggableNode type='general' label='General' />
				<DraggableNode type='imageOP' label='Image Output' />
				<DraggableNode type='codeOP' label='Code Output' />
				<DraggableNode type='urlIP' label='URL Input' />
				<DraggableNode type='multiIPLLM' label='Multi Input LLM' />
            </div>
        </div>
    );
};
