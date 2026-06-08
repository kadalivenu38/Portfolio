export default function Projects() {

    const projects = [
        {
            name: 'Authentication system',
            icon: './assets/Authentication-project.png',
            description: 'Authentication functionality of real-world applications',
            link: 'https://github.com/kadalivenu38/auth-system',
        },
        {
            name: 'Quick GPT',
            icon: './assets/quick-gpt-project.png',
            description: 'Web based Chat application built using MERN and Gemini API',
            link: 'https://chat-web-application-frontend.vercel.app/',
        },
        {
            name: 'Resume Builder',
            icon: './assets/resume-builder-project.png',
            description: 'AI powered Resume building web application by using Gemini API',
            link: 'https://github.com/kadalivenu38/AI-Resume-Builder',
        },
        {
            name: 'Poster Generator',
            icon: './assets/poster-generator-project.png',
            description: 'AI based poster generating web application using python, streamlit',
            link: 'https://ai-poster-generator-9wzuvpeychuqnhldbvh7s2.streamlit.app/',
        }
    ];
    return (
        <div id="projects" className="w-full px-[12%] py-10 scroll-mt-20">
            <h2 className="text-center text-5xl font-Ovo">My latest work</h2>
            <p className="text-center max-w-2xl mx-auto my-5 font-Ovo">Welcome to my portfolio! Explore a collection of projects showcasing my expertise in full-stack web development.</p>

            <div className="mt-8">
                <style>{`
                    .no-scrollbar::-webkit-scrollbar { display: none; }
                    .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

                    /* Mobile: stacked full-width cards */
                    .project-card {
                        width: 100%;
                        max-width: 100%;
                    }

                    /* Larger screens: limit card width for horizontal carousel */
                    @media (min-width: 640px) {
                        .project-card { max-width: 260px; }
                    }
                    @media (min-width: 768px) {
                        .project-card { max-width: 300px; }
                    }
                    @media (min-width: 1024px) {
                        .project-card { max-width: 350px; }
                    }
                    @media (min-width: 1280px) {
                        .project-card { max-width: 380px; }
                    }
                `}</style>
                <div className="flex flex-col md:flex-row gap-4 md:overflow-x-auto py-3 px-2 md:snap-x md:snap-mandatory no-scrollbar">
                    {projects.map((project, idx) => (
                        <a
                            key={idx}
                            href={project.link}
                            target="_blank"
                            className="project-card md:snap-start p-2 bg-white border border-gray-200 hover:-translate-y-2 transition-transform duration-300
                             rounded-lg shadow shadow-black/10 md:flex-shrink-0 dark:bg-darkHover dark:border-white/10 dark:hover:border-white/50"
                        >
                            <div className="h-48 overflow-hidden rounded-md bg-slate-100 dark:bg-slate-900">
                                <img className="w-full h-full object-fill" src={project.icon} alt={project.name} />
                            </div>
                            <div>
                                <p className="text-gray-900 text-md font-semibold dark:text-white">{project.name}</p>
                                <p className="text-gray-500 text-sm line-clamp-2 dark:text-gray-300">{project.description}</p>
                                <div className="mt-3">
                                    <button type="button" className="bg-indigo-500 hover:bg-indigo-800 transition cursor-pointer px-3 py-1
                                    font-medium rounded-md text-white text-sm">
                                        View Project
                                    </button>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            <div className="text-center mt-5">
                <a href="https:github.com/kadalivenu38" className="inline-flex items-center gap-2 text-gray-700 border border-gray-300 dark:border-white/25
                 hover:bg-slate-100/70 dark:hover:bg-darkHover rounded-full py-2 px-6 duration-300 dark:text-white">
                    Show more
                    <img src="./assets/right-arrow-bold.png" alt="" className="w-4 dark:hidden" />
                    <img src="./assets/right-arrow-bold-dark.png" alt="" className="w-4 hidden dark:block" />
                </a>
            </div>
        </div>
    )
}