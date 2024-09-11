import Spline from '@splinetool/react-spline';

export default function ParticlesBackground() {
  return (
    <div className=''>
      <Spline
       scene="https://prod.spline.design/NtJtcEwOz8UevbkL/scene.splinecode" 
       className='absolute top-0 left-0 right-0 '
       />

       <div className='h-[20%] bg-gradient-to-b from-transparent to-black absolute bottom-0 left-0 right-0'>

       </div>
    </div>
  );
}
