import React from 'react';
import Facts from './Facts';
import Button from './Button';
import VideoPreview from './VideoPreview';
import DisplayCard from './DisplayCard';
import Data from '../../data/displayCard'
import data from '../../data/displayCard';

const Agency = () => {
  return (
  
      <div className='flex justify-center h-auto w-auto'>
      <div className='flex flex-col items-center'>
      <section className='introduction-consultation columns-1'>
        <h1 className='text-8xl text-center px-16 mt-14'>Hi, I am Ali!</h1>
        <h2 className='text-6xl text-center px-16 mt-5 animate-none'>
          Upgrade your content with custom animation. Motion graphics coiuld be the difference between you reaching and not
          reaching your sales goals.
        </h2>

      <Button></Button>

      </section>
      

        {/* Div card containing all the facts etc */}
      <div class="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
    <div class="p-6">
        <section className="flex flex-row items-center justify-around gap-x-8">
            <h1 class="text-xl font-bold text-gray-800">10K+ Students Helped</h1>
            <h1 class="text-xl font-bold text-gray-800">3 Entry Points</h1>
            <h1 class="text-xl font-bold text-gray-800">Guaranteed Results</h1>
        </section>
    </div>
</div>


    {/* Now creating a flex div with two-columns */}

  <section className="flex flex-col md:flex-row">
  <div className="flex-1 mx-20 my-32">
    <h1 className='text-3xl font-bold text-gray-950 mt-6'> Anyone can do simple video edits, but only some understand the power of motion graphics.</h1>
    <h2 className='text-xl font-bold mt-5'>Will you be left behind?</h2>
    <p>Your content deserves millions of views, where people can't get enough of it. Viral videos that take over the internet. 
      This could be you - do you understand?
    </p>
    <div className='flex justify-items-end'>


    <Button></Button>
    </div>


    {/* Content for all the videos */}

  </div>
  <div className="flex-1 mx-20 my-32">
    {/* Content for the second column */}
    <h2 className='text-3xl font-bold text-gray-950 mt-6'>Can your video editor do this?</h2>

    
      <div class="grid grid-cols-2 gap-2 border-2">
          <VideoPreview></VideoPreview>
          <VideoPreview></VideoPreview>
          <VideoPreview></VideoPreview>
          <VideoPreview></VideoPreview>

      </div>
  </div>
</section>

{/* Section is dedicated to letting the users know more about why they need animation - leading them further down the sales funnel*/}

  <section className='services grid grid-flow-col overflow-x-auto border-black w-1/2 h-auto'>

      {data.map((el) => {
        return (
         <DisplayCard title={el.title} content={el.content}/>
        )
      })}
       
</section>


<article className='w-2/3 bg-blue-950 border-blue-300 my-10 rounded-lg bg-blend-normal'>
<section className='class="py-[87px] px-[91px] flex justify-center flex-row flex-wrap'>

        <div className='w-1/2'>
          <iframe src="" frameborder="0"></iframe>
        </div>


        <div className='w-1/2 mt-5 space-y-4'>
        
          <h1 className='text-4xl mb-3'>Leave your visitors and viewers surprised at how you came up with your videos.</h1>
          <p className='mb-2'>World class service that makes you go, "I have been needing this my entire life, yes please!!"</p>
        
        </div>





</section>

</article>

      </div>
      </div>
      
  );
};


export default Agency;