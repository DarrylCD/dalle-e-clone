import React from 'react'
import { download } from '../assets' // import the download icon
import { downloadImage } from '../utils' // import the downloadImage function


// hovering over the Card component will show the prompt, user name of the post, and the image
const Card = ({_id, name, prompt, photo}) => {
  return (
    <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
      <img
        className="w-full h-auto object-cover rounded-xl"
        src={photo}
        alt={prompt}
      />
      <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md">
        <p className="text-white text-sm overflow-y-auto prompt">{prompt}</p>
        <p className="mt-2 text-white text-sm font-semibold">{name}</p>
        <button
          type="button"
          onClick={() => downloadImage(_id, photo)}
          className="bg-transparent border-none outline-none hover:opacity-75 transition-opacity duration-200 hover:bg-[#6469ff] rounded-full w-10 h-10 flex justify-center items-center cursor-pointer absolute bottom-4 right-4"
          title="Download image"
        >
          <img src={download} alt="download" className="w-6 h-6 object-contain invert" />
        </button>
      </div>
    </div>
  )
}

export default Card