import React from 'react'

const Guidelines = ({setStep}) => {
  return (
    <div>
        <div class="mb-4">
            <h1 class="display-3 mb-3" style = {{maxWidth: '800px'}}>
                Create <span class="text-primary text-highlight-warning">stunning and beatiful</span> avatars based on your images
            </h1>
            <p class="lead">What we also need is that you can help us with images of few your teammates with the below instructions </p>
            
            <p>Select 20-30 photos of yourself (or you and your partner as a 👩‍❤️‍👨 couple, or your 🐶 dog or 🐱 cat). We'll train the AI to generate AI-generated avatars that look just like you in any style you want.</p>

            <h3 class='mt-5'>The better you follow these guidelines, the better your avatars:</h3>
            <div className='row'>
                <div class='col'>
                    <ul className='mt-4 lead list-unstyled list-py-1'>
                        <li>✅ No other people in your photos</li>
                        <li>✅ Photos with different expression</li>
                        <li>✅ Photos in different locations, backgrounds and angles</li>
                        <li>✅ Photos at different times of day</li>
                        <li>✅ Look into the camera and also away ( different Angles of your face are useful)</li>
                        <li>✅ Ideal Break down ( 10 images above shoulder, 10 images above torse, 5 images full body)</li>
                        <li>✅ Only images - 512x512px ( we can do this for you if you want)</li>
                    </ul>
                </div>
                <div class='col'>
                    <ul className='mt-4 lead list-unstyled list-py-1'>
                        <li>❌ No duplicate photos</li>
                        <li>❌ No black and white photos</li>
                        <li>❌ No photo shoots</li>
                        <li>❌ Not only selfies</li>
                        <li>❌ With minimal or no makeup and without sunglasses</li>
                        <li>❌ No children</li>
                        <li>❌ No nudes</li>
                    </ul>

                </div>
            </div>
            <div className='text-end mt-5'>
                <div class='btn w-25 btn-lg btn-primary' onClick={() => setStep('images')}>
                    Upload Images
                    <i class='bi-arrow-right ms-2'></i>
                </div>
            </div>

          </div>
    </div>
  )
}

export default Guidelines