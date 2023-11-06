import { useSortable } from '@dnd-kit/sortable'
import React from 'react';
import { CSS } from '@dnd-kit/utilities'

function imageComponent({ image }) {
  // console.log(image)
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = useSortable({
    id: image.id
  })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  }

  const handleSelected = (item) => {
    console.log("handleSelected", item);
  }


  return (
    <div>
      <div
        style={style}
        {...attributes}
        {...listeners}
        ref={setNodeRef}
        className='p-4 rounded-xl shadow-md my-3 bg-base-100 hover:opacity-50'>
        <div onClick={() => handleSelected(image)}>
          <div className="form-control">
            <label className="label cursor-pointer">
              <input
                type="checkbox" unchecked="unchecked" className="checkbox checkbox-info" />
            </label>
          </div>
        </div>
        <img src={image.image} alt='image' />
      </div>
      {/* <div>
        <img src='' alt='image' />
      </div> */}
    </div>

  )
}
export default imageComponent