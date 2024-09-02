// draggableNode.js

export const DraggableNode = ({ type, label, Icon }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };
  
    return (
      <div
        className={`${type} text-[14px] bg-[#6789BA] !text-white rounded-[6px] font-[700] px-[8px] py-[6px] cursor-grab  flex items-center justify-start gap-[8px] self-stretch hover:bg-[#7CB9E8]`}
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={(event) => (event.target.style.cursor = 'grab')}
        draggable
      >
		  <Icon />
          <span >{label}</span>
      </div>
    );
  };
  
