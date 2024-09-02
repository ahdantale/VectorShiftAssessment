// toolbar.js
import { DraggableNode } from './draggableNode';
import { SubmitButton } from './submit';

import InputIcon from '@mui/icons-material/Input';
import SmartButtonIcon from '@mui/icons-material/SmartButton';
import OutputIcon from '@mui/icons-material/Output';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import GMobiledataIcon from '@mui/icons-material/GMobiledata';
import FilterIcon from '@mui/icons-material/Filter';
import CodeIcon from '@mui/icons-material/Code';
import PsychologyIcon from '@mui/icons-material/Psychology';
import LinkIcon from '@mui/icons-material/Link';



export const PipelineToolbar = () => {

    return (
        <div className='px-[16px] py-[18px] w-full h-full bg-white border-r-[1px] border-r-[solid] border-r-[#EFEFF0] flex flex-col items-center justify-between' >
            <div className='flex flex-col items-center justify-start gap-[12px] w-full' >
				<img src="/cm_logo.png" alt="codemapper logo" className="max-w-[190px] rounded-[12px]"/>
                <DraggableNode type='customInput' label='Input' Icon={InputIcon} />
                <DraggableNode type='llm' label='LLM' Icon={SmartButtonIcon}/>
                <DraggableNode type='customOutput' label='Output' Icon={OutputIcon} />
                <DraggableNode type='text' label='Text' Icon={TextFieldsIcon}/>

				<DraggableNode type='general' label='General' Icon={GMobiledataIcon} />
				<DraggableNode type='imageOP' label='Image Output' Icon={FilterIcon}/>
				<DraggableNode type='codeOP' label='Code Output' Icon={CodeIcon}/>
				<DraggableNode type='urlIP' label='URL Input' Icon={LinkIcon}/>
				<DraggableNode type='multiIPLLM' label='Multi I/P LLM' Icon={PsychologyIcon} />
            </div>
			<SubmitButton />
        </div>
    );
};
