import React from 'react'
import { BiLeftArrow } from 'react-icons/bi'

const LatestNewsModal = ({setNewsDetailsDom, news}) => {

  return (
    <article className='w-full h-auto'>
        {/* <div className='bg-green-500 w-1100px h-500px' onClick={() => setNewsDetailsDom(false)}>asdasdasd</div> */}
        <div className='relative w-full h-400px'>
            <img src={require(`../../asset/News/${news.image}`)} alt="News" className='object-cover w-full h-full blur' />
            <div className='absolute flex justify-center w-full h-20 px-2 top-20 screen700px:top-0'>
                <div className='z-10 flex items-center h-full w-1000px'>
                    <p onClick={() => setNewsDetailsDom(false)} className='mt-2 text-xl text-white duration-500 cursor-pointer drop-shadow-0_7_3_rgaba_black_1 hover:-ml-2'><BiLeftArrow className='inline mr-2'/>Back</p>
                </div>
            </div>
            <div className='absolute top-0 flex justify-center w-full h-400px'>
                <div className='flex items-end h-full w-1000px jusfify-center'>
                    <div className='flex items-center w-full h-auto p-5'>
                        <div>
                            <p className='font-semibold text-white drop-shadow-0_7_3_rgaba_black_1'>Date Published</p>
                            <p className='mt-2 text-5xl font-bold text-white drop-shadow-0_7_3_rgaba_black_1 screen700px:text-3xl screen420px:text-2xl screen420px:break-all'>{news.title}</p>
                            <p className='mt-2 font-semibold text-white drop-shadow-0_7_3_rgaba_black_1'>Author</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='flex justify-center w-full h-auto'>
            <div className='h-auto py-5 w-1000px'>
                <p className='text-xl text-justify text-black'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque donec quis hac turpis. Tempor pulvinar est etiam habitant. Faucibus sed facilisis risus elit. Augue tristique scelerisque rhoncus, vitae commodo rutrum. Consequat, nec ornare duis mattis et etiam. Condimentum consequat elit habitant elementum ipsum ac. Gravida ut habitant lacinia eget porta quis laoreet. Ut ultricies nunc mattis dui lectus. Facilisis et in odio interdum aenean nisi montes, faucibus molestie.
                </p>

                <br/>

                <p className='text-xl text-justify text-black'>
                    Aenean aliquet ultrices at nulla urna, egestas. Id sed ultrices rhoncus, et. Fermentum purus eget fermentum et massa. Odio integer mollis scelerisque pharetra viverra scelerisque. Eu id nunc ornare id tortor. At non diam viverra pulvinar nibh eu. Egestas amet vel sed ut. Elementum aliquam justo, leo volutpat morbi mauris. Malesuada et imperdiet eget mauris aenean volutpat consequat. Commodo tincidunt amet montes, quam turpis nisi, ultricies praesent neque. Ut integer mi facilisis sed risus. Cras urna, massa viverra sed. At quis neque, sed mattis. Posuere a, aenean ornare mi, duis faucibus laoreet tellus molestie. Nibh consequat nibh orci mauris at facilisis in faucibus tincidunt.
                </p>

                <br/>

                <p className='text-xl text-justify text-black'>
                    Purus neque praesent sem sagittis, facilisi fames justo, vitae. Nisl, eget nulla cursus tincidunt ac felis, et imperdiet dolor. Ipsum in pellentesque malesuada nunc tristique non. Sagittis erat tellus fringilla euismod diam nam posuere a odio. Eget at enim maecenas aliquam iaculis. Rhoncus elit morbi mi amet, turpis. Fringilla posuere sagittis, velit sagittis. Non dolor volutpat ante sed.
                </p>
            </div>
        </div>
    </article>
  )
}

export default LatestNewsModal