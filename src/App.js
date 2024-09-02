import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';

function App() {


  return (
    <div className='grid grid-cols-[auto_1fr] items-start justify-start w-full h-full gap-[0px]'>
      <PipelineToolbar />
      <PipelineUI />
    </div>
  );
}

export default App;
