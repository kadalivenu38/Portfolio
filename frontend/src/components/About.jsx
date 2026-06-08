export default function About() {
    return (
        <div id="about" className="w-full px-[12%] py-5 mb-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
            <h2 className="text-center text-5xl font-Ovo">About me</h2>

            <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-10">
                <div className="max-w-max mx-auto relative">
                    <img src='./assets/user-image.png' alt="" className="w-48 sm:w-72 rounded-3xl max-w-none" />

                    <div className="bg-white w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center justify-center">
                        <img src="./assets/circular-text.png" alt="" className="w-full animate-spin_slow" />
                        <img src="./assets/dev-icon.png" alt="" className="w-1/2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    </div>
                </div>
                <div className="flex-1 text-md font-Outfit" style={{wordSpacing: '2px'}}>
                    <p className="mb-5 max-w-2xl">
                        I'm Kadali Venu, a B.Tech student and Full-Stack Developer passionate about creating responsive and scalable web applications. I specialize in the MERN stack and enjoy building projects that combine clean design with efficient functionality.
                    </p>
                    <p className="mb-5 max-w-2xl">
                        My learning journey includes working on full-stack web development projects, exploring data structures and algorithms,
                        and strengthening my understanding of software engineering principles.
                    </p>
                    <p className="max-w-2xl">
                        Beyond coding, I continuously explore new technologies, strengthen my problem-solving skills, and work on projects that help me grow as a software developer.
                    </p>
                </div>
            </div>
        </div>
    )
}