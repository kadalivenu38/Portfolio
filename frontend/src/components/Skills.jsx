import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNode,
    FaDatabase,
    FaBootstrap,
    FaPython,
    FaJava,
    FaGitAlt,
    FaVial,
    FaGithub,
} from "react-icons/fa";
import { SiExpress, SiPostman, SiMongodb, SiTailwindcss, SiOpenai } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const Skills = () => {
    const skillsRow1 = [
        { name: "HTML", icon: FaHtml5, color: "#E34C26" },
        { name: "CSS", icon: FaCss3Alt, color: "#563D7C" },
        { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
        { name: "React", icon: FaReact, color: "#61DAFB" },
        { name: "Node.js", icon: FaNode, color: "#68A063" },
        { name: "Express", icon: SiExpress, color: "#000000" },
        { name: "MongoDB", icon: SiMongodb, color: "#13AA52" },
        { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
    ];

    const skillsRow2 = [
        { name: "Python", icon: FaPython, color: "#3776AB" },
        { name: "Java", icon: FaJava, color: "#007396" },
        { name: "SQL", icon: FaDatabase, color: "#336791" },
        { name: "Git", icon: FaGitAlt, color: "#F1502F" },
        { name: "Git Hub", icon: FaGithub, color: "#000000" },
        { name: "Postman", icon: SiPostman, color: "#FF6C37" },
        { name: "DSA", icon: FaVial, color: "#00D9FF" },
        { name: "VS Code", icon: VscVscode, color: "#007ACC" },
        { name: "ChatGPT", icon: SiOpenai, color: "#10A37F" }
    ];

    const SkillCard = ({ skill }) => {
        const IconComponent = skill.icon;
        return (
            <div className="flex flex-col items-center justify-center gap-3 px-6 py-4 min-w-max">
                <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#b820e6] to-[#da7d20] rounded-xl blur-lg opacity-0 group-hover:opacity-75 transition duration-300" />
                    <div className="relative bg-white dark:bg-darkHover border border-gray-200 dark:border-white/10 rounded-xl p-2 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg dark:group-hover:shadow-purple-500/20">
                        <IconComponent size={40} color={skill.color} />
                    </div>
                </div>
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-200 whitespace-nowrap">
                    {skill.name}
                </span>
            </div>
        );
    };

    return (
        <>
            <style>{`
                @keyframes scrollRight {
                    0% {
                        transform: translateX(0%);
                    }
                    100% {
                        transform: translateX(calc(-50% - 16px));
                    }
                }

                @keyframes scrollLeft {
                    0% {
                        transform: translateX(calc(-50% - 16px));
                    }
                    100% {
                        transform: translateX(0%);
                    }
                }

                .scroll-right {
                    animation: scrollRight 40s linear infinite;
                }

                .scroll-left {
                    animation: scrollLeft 40s linear infinite;
                }
            `}</style>

            <section id="skills" className="py-10">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-10">
                        <h2 className="text-center text-5xl font-Ovo">My Skills</h2>
                        <p className="text-center max-w-2xl mx-auto my-5 font-Ovo">
                            I've developed proficiency across modern web technologies and programming languages, enabling me to build scalable, user-centric applications from frontend to backend.
                        </p>
                    </div>

                    {/* Skills Row 1 - Scroll Right */}
                    <div className="mb-5">
                        <div className="overflow-hidden relative scroll-track">
                            <div className="absolute left-0 top-0 h-full w-20 lg:w-40 z-10 pointer-events-none bg-gradient-to-r from-white dark:from-dark to-transparent" />
                            <div className="scroll-right flex gap-4 w-max">
                                {/* First Set */}
                                {skillsRow1.map((skill, index) => (
                                    <SkillCard key={`row1-first-${index}`} skill={skill} />
                                ))}
                                {/* Duplicate Set for continuous loop */}
                                {skillsRow1.map((skill, index) => (
                                    <SkillCard key={`row1-second-${index}`} skill={skill} />
                                ))}
                            </div>
                            <div className="absolute right-0 top-0 h-full w-20 lg:w-40 z-10 pointer-events-none bg-gradient-to-l from-white dark:from-dark to-transparent" />
                        </div>
                    </div>

                    {/* Skills Row 2 - Scroll Left */}
                    <div>
                        <div className="overflow-hidden relative scroll-track">
                            <div className="absolute left-0 top-0 h-full w-20 lg:w-40 z-10 pointer-events-none bg-gradient-to-r from-white dark:from-dark to-transparent" />
                            <div className="scroll-left flex gap-4 w-max">
                                {/* First Set */}
                                {skillsRow2.map((skill, index) => (
                                    <SkillCard key={`row2-first-${index}`} skill={skill} />
                                ))}
                                {/* Duplicate Set for continuous loop */}
                                {skillsRow2.map((skill, index) => (
                                    <SkillCard key={`row2-second-${index}`} skill={skill} />
                                ))}
                            </div>
                            <div className="absolute right-0 top-0 h-full w-20 lg:w-40 z-10 pointer-events-none bg-gradient-to-l from-white dark:from-dark to-transparent" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Skills;