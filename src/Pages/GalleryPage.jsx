import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { containerVariants } from '../Variants';
import { images } from '../imageObject';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import Item from '../Component/Item';

const GalleryPage = () => {
  const [input, setInput] = useState('');

  const [imageBox, updateImageBox] = useState(images);
  const filteredImages = imageBox.filter((image) => image.name.toLowerCase().includes(input.toLowerCase()));

  const handleDrag = (e) => {
    const { active, over } = e;
    if (active.id !== over.id) {
      updateImageBox((images) => {
        const activeIndex = images.indexOf(active.id);
        const overIndex = images.indexOf(over.id);

        return arrayMove(images, activeIndex, overIndex);
      });
    }
  };

  return (
    <motion.div variants={containerVariants} initial={containerVariants.initial} animate={containerVariants.animate} exit={containerVariants.exit} className='flex flex-col items-center justify-center px-5 md:px-10 mt-5 md:mt-10 w-full'>
      <div className='flex flex-col items-center justify-center w-full gap-4 md:gap-8'>
        <input type='text' value={input} onChange={(e) => setInput(e.target.value)} placeholder='search for images here' className='p-2 w-full max-w-lg rounded-xl border-[1px] border-black outline-none focus:drop-shadow-[0_0_2px_black] transition-all duration-200' />

        <DndContext collisionDetection={closestCenter} onDragEnd={handleDrag}>
          <div
            className='grid grid-cols-1 sm:grid-cols-2
            md:grid-cols-3 lg:grid-cols-4 gap-4'
          >
            <SortableContext items={filteredImages} strategy={verticalListSortingStrategy}>
              {filteredImages.map((image, index) => (
                <Item key={index} id={image} image={image.link} name={image.name} />
              ))}
            </SortableContext>
          </div>
        </DndContext>
      </div>
    </motion.div>
  );
};

export default GalleryPage;
