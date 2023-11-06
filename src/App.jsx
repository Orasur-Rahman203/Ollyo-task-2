import { useState } from 'react'
import './App.css'
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove, verticalListSortingStrategy } from '@dnd-kit/sortable'
import Image from './imageComponent';

const data = [
  {
    "id": 1,
    "name": "1",
    'image': './assets/image-1.webp'
  },
  {
    "id": 2,
    "name": "2",
    'image': './assets/image-2.webp'
  },
  {
    "id": 3,
    "name": "3",
    'image': './assets/image-3.webp'
  },
  {
    "id": 4,
    "name": "4",
    'image': './assets/image-4.webp'
  },
  {
    "id": 5,
    "name": "5",
    'image': './assets/image-5.webp'
  },
  {
    "id": 6,
    "name": "6",
    'image': './assets/image-6.webp'
  },
  {
    "id": 7,
    "name": "7",
    'image': './assets/image-7.webp'
  },
  {
    "id": 8,
    "name": "8",
    'image': './assets/image-8.webp'
  },
  {
    "id": 9,
    "name": "9",
    'image': './assets/image-9.webp'
  },
  {
    "id": 10,
    "name": "10",
    'image': './assets/image-10.jpeg'
  },
  {
    "id": 11,
    "name": "11",
    'image': './assets/image-11.jpeg'
  },
];


function App() {
  const [people, setPeople] = useState(data)
  let selectItemArray = [];
  const handleDragEnd = (event) => {

    const { active, over } = event;
    // console.log(active)
    selectItemArray.push(active)

    setPeople(() => {
      const oldIndex = people.findIndex((person) => person.id === active.id)
      const newIndex = people.findIndex((person) => person.id === over.id)
      return arrayMove(people, oldIndex, newIndex);
    })
  }
  // console.log(selectItemArray);
  return (
    <div className='m-8'>
      <div className='flex justify-between items-center pt-2'>
        <div><h1>2 Files Selected</h1></div>
        <div className='btn btn-outline btn-error'>
          <button>Delete files</button>
        </div>
      </div>
      <div className='flex justify-center items-center '>
        <div className='grid sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-2'>
          <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={people}
              strategy={verticalListSortingStrategy}
            >
              {
                people.map((image) => (
                  <Image image={image} key={image.id} />
                ))
              }
            </SortableContext>
          </DndContext>
          <div className='flex justify-center items-center'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl py-24">
              <figure><img width={20} src="./assets/imageIcon.png" alt="Shoes" /></figure>
              <div className="card-body">
                <p className="card-title text-center">Add images</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default App
