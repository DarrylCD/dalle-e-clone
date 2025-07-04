import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { preview } from '../assets';
import { getRandomPrompt } from '../utils';
import { FormField, Loader } from '../components';


const CreatePost = () => {

  const navigate = useNavigate(); // used to navigate back to home page after post creation
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '',
  });
  const [generatingImg, setGeneratingImg] = useState(false); // used to show loader while generating image
  // This state is used to show the loader while the image is being generated
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent the default reload form submission behavior
    if (form.prompt && form.photo) {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:8080/api/v1/post', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form), // send the form data to the server
        });
        if (response.ok) {  // check if the response is ok
          alert('Post created successfully!');
        }
        await response.json(); // wait for the response to be resolved
        navigate('/'); // after submission, navigate back to home page
      } catch (error) {
        alert('Failed to create post. Please try again.');
        console.error('Error:', error);
      } finally {
        setLoading(false); // reset loading state
      }

    } else {
      alert('Please enter a prompt and generate an image before submitting.');
    }
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  }

  const generateImage = async () => {
    if (form.prompt) {
      try {
        setGeneratingImg(true);
        const response = await fetch('http://localhost:8080/api/v1/dalle', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ prompt: form.prompt }),
        });

        const data = await response.json();
        setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` }); // set the generated image in the form state
      } catch (error) {
        alert(error);
      } finally {
        setGeneratingImg(false);
      }
    } else {
      alert('Please enter a prompt before generating an image.');
    }
  }

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[38px] dark:text-white">
          Create
        </h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[765px] dark:text-gray-400">
          Create imaginative and visually stunning images using DALL-E AI and share them with the community.
        </p>
      </div>
      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField /* Name input field */
            labelName="Your Name"
            type="text"
            name="name"
            placeholder="John Doe"
            value={form.name}
            handleChange={handleChange}
          />
          <FormField /* Prompt input field */
            labelName="Prompt"
            type="text"
            name="prompt"
            placeholder="A plush toy robot with a friendly smile"
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />

          <div className='relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center'>
            {form.photo ? (
              <img /* Preview image */
                src={form.photo}
                alt={form.prompt}
                className="w-full h-full object-contain" />
            ) : (
              <img /* Placeholder image */
                src={preview}
                alt="Preview"
                className="w-9/12 h-9/12 object-contain opacity-40" />
            )}
            {generatingImg && (
              <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg"> {/*for the opacity*/}
                <Loader />
              </div>
            )}
          </div>
        </div>
        <div className="mt-5 flex gap-5">
          <button
            type="button"
            onClick={generateImage}
            className="text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center cursor-pointer hover:bg-[#6469ff]/90 transition-all ease-in-out duration-150"
          >
            {generatingImg ? 'Generating...' : 'Generate'}
          </button>
        </div>
        <div className="mt-10">
          <p className="mt-2 text-[#666e75] text-[14px] dark:text-grey-300">
            Once you have created the image, you can share it with the community.
          </p>
          <button
            type="submit"
            className="mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center cursor-pointer hover:bg-[#6469ff]/90 transition-all ease-in-out duration-150"
          >
            {loading ? 'Sharing...' : 'Share with the community'}
          </button>
        </div>
      </form>

    </section>
  );
};

export default CreatePost;