import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const Item = ({ image }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: image.key });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <div>
        <img src={image.link} alt={image.link} loading='lazy' className='w-full h-[10rem]' />
        <div className='px-3 py-2 xl'>{image.name}</div>
      </div>
    </div>
  );
};

export default Item;
