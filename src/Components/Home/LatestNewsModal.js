import React from 'react'
import { BiLeftArrow } from 'react-icons/bi'

const LatestNewsModal = ({setNewsDetailsDom, news}) => {

  return (
    <article className='w-full h-auto'>
        {/* <div className='w-1100px h-500px bg-green-500' onClick={() => setNewsDetailsDom(false)}>asdasdasd</div> */}
        <div className='relative w-full h-400px'>
            <img src={require(`../../asset/News/${news.image}`)} alt="News" className='w-full h-full object-cover blur' />
            <div className='absolute top-20 w-full h-20 flex justify-center px-2 screen700px:top-0'>
                <div className='w-1000px h-full flex items-center z-10'>
                    <p onClick={() => setNewsDetailsDom(false)} className='cursor-pointer text-white text-xl drop-shadow-0_7_3_rgaba_black_1 mt-2 hover:-ml-2 duration-500'><BiLeftArrow className='inline mr-2'/>Back</p>
                </div>
            </div>
            <div className='absolute top-0 w-full h-400px flex justify-center'>
                <div className='w-1000px h-full flex jusfify-center items-end'>
                    <div className='w-full h-auto flex items-center p-5'>
                        <div>
                            <p className='text-white font-semibold drop-shadow-0_7_3_rgaba_black_1'>Date Published</p>
                            <p className='text-white font-bold text-5xl drop-shadow-0_7_3_rgaba_black_1 mt-2 screen700px:text-3xl screen420px:text-2xl screen420px:break-all'>{news.title}</p>
                            <p className='text-white font-semibold drop-shadow-0_7_3_rgaba_black_1 mt-2'>Author</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='w-full h-auto flex justify-center'>
            <div className='w-1000px h-auto py-5'>
                <p className='text-justify text-black text-xl'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque donec quis hac turpis. Tempor pulvinar est etiam habitant. Faucibus sed facilisis risus elit. Augue tristique scelerisque rhoncus, vitae commodo rutrum. Consequat, nec ornare duis mattis et etiam. Condimentum consequat elit habitant elementum ipsum ac. Gravida ut habitant lacinia eget porta quis laoreet. Ut ultricies nunc mattis dui lectus. Facilisis et in odio interdum aenean nisi montes, faucibus molestie.
                </p>

                <br/>

                <p className='text-justify text-black text-xl'>
                    Aenean aliquet ultrices at nulla urna, egestas. Id sed ultrices rhoncus, et. Fermentum purus eget fermentum et massa. Odio integer mollis scelerisque pharetra viverra scelerisque. Eu id nunc ornare id tortor. At non diam viverra pulvinar nibh eu. Egestas amet vel sed ut. Elementum aliquam justo, leo volutpat morbi mauris. Malesuada et imperdiet eget mauris aenean volutpat consequat. Commodo tincidunt amet montes, quam turpis nisi, ultricies praesent neque. Ut integer mi facilisis sed risus. Cras urna, massa viverra sed. At quis neque, sed mattis. Posuere a, aenean ornare mi, duis faucibus laoreet tellus molestie. Nibh consequat nibh orci mauris at facilisis in faucibus tincidunt.
                </p>

                <br/>

                <p className='text-justify text-black text-xl'>
                    Purus neque praesent sem sagittis, facilisi fames justo, vitae. Nisl, eget nulla cursus tincidunt ac felis, et imperdiet dolor. Ipsum in pellentesque malesuada nunc tristique non. Sagittis erat tellus fringilla euismod diam nam posuere a odio. Eget at enim maecenas aliquam iaculis. Rhoncus elit morbi mi amet, turpis. Fringilla posuere sagittis, velit sagittis. Non dolor volutpat ante sed.
                </p>
            </div>
        </div>
    </article>
  )
}

export default LatestNewsModal