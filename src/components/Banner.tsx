const bgVideo = '/mylivewallpapers-com-Hollow-Technique-Satoru-Gojo-4K.mp4';

const Banner = () => {
    return (
        <section className='h-screen w-full flex justify-center    relative'>
            <video autoPlay muted loop className='fixed top-0 bg-top  h-screen w-full overflow-x-hidden md:h-screen left-0 md:w-full object-cover' >
                <source src={bgVideo} type="video/mp4" />
            </video>
        </section>
    )
}

export default Banner