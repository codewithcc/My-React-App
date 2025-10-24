import ProjectPrimaryButton from './ProjectPrimaryButton'
import ProjectSecondaryButton from './ProjectSecondaryButton'

const ProjectCard = ({ title, desc, githubLink, demoLink }) => {
    let gitClick = () => {
        if (githubLink) window.open(githubLink, '_blank')
    }
    let demoClick = () => {
        if (demoLink) window.open(demoLink, '_blank')
    }
    return(
        <div className="flex flex-col items-center justify-between w-[300px] h-[300px] p-4 border border-gray-200 rounded-xl shadow-lg transform transition-all ease-in-out duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="flex w-full flex-col items-start justify-center gap-2">
                <h2 className='text-2xl font-bold'>{title}</h2>
                <p className="text-justify text-slate-500">{desc}</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 w-full text-center">
                <ProjectPrimaryButton onClick={gitClick} disabled={!githubLink} />
                <ProjectSecondaryButton onClick={demoClick} disabled={!demoLink} />
            </div>
        </div>
    )
}

export default ProjectCard