import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const Item = (props) => {
  const { attributes, listeners, setNodeRef, setActivatorNodeRef, transform, transition } = useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <div className='hover:scale-105 rounded-3xl overflow-clip bg-white drop-shadow-xl'>
        <img src={props.image} alt={props.image} loading='lazy' className='w-full h-[10rem]' />
        <div className='px-3 py-2 xl'>{props.name}</div>
      </div>
    </div>
  );
};

export default Item;
