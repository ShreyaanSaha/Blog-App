import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Want to know more about me ?
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout my personal portfolio website
            </p>
            <Button gradientDuoTone='greenToBlue' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://www.100jsprojects.com" target='_blank' rel='noopener noreferrer'>
                    Shreyaanz Portfolio
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://res.cloudinary.com/deqvxfp7f/image/upload/v1708630498/Screenshot_2024-02-23_005110_aalfyy.png" />
        </div>
    </div>
  )
}