import ProjectCard from "../components/ProjectCard"
import Link from 'react-router-dom'

const ProjectsSection = () => {
    const moreProjectClick = () => {
        alert('More Projects button clicked!')
    }
    return(
        <div className="flex flex-col items-center justify-center gap-8 w-full px-4 mt-32 cursor-default">
            <h2 className="font-bold text-5xl lg:text-7xl"><span className="text-yellow-500">P</span>rojects</h2>
            <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:mt-12">
                <ProjectCard
                    title={ "Project Title" }
                    desc={
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae autem quo repudiandae consequuntur corrupti earum in aut ea debitis exercitationem."
                    }
                    githubLink={null}
                    demoLink={null}
                />
                <ProjectCard
                    title={ "Project Title" }
                    desc={
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae autem quo repudiandae consequuntur corrupti earum in aut ea debitis exercitationem."
                    }
                    githubLink={null}
                    demoLink={null}
                />
                <ProjectCard
                    title={ "Project Title" }
                    desc={
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae autem quo repudiandae consequuntur corrupti earum in aut ea debitis exercitationem."
                    }
                    githubLink={null}
                    demoLink={null}
                />
            </div>
            <Link
                to='/projects'
                className="w-[310px] text-center bg-black text-yellow-300 cursor-pointer font-semibold text-xl rounded-xl py-3 lg:w-auto lg:text-3xl lg:px-12 lg:mt-6"
            >
                More Projects
            </Link>
        </div>
    )
}

export default ProjectsSection