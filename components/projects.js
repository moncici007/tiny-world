
import Image from "next/image";

export default function Projects({ projects }) {
    return (
        <>
        {projects.map( (project) => (<Project project={project}/>))}
        </>
    )
}

function Project({ project }) {

    return (
        <>
            <h3>{project.title}</h3>
            <a href={project.url}>
                <img alt="Preview Screenshot of ai-nft-generator.moncici.xyz" src="blob:https://vercel.com/6c9f4cf0-f4bb-4d19-ba03-cdd5e15c81da"></img>
                {/* <Image 
                    src={project.preview}
                    height={144}
                    width={144}
                /> */}
            </a>
        </>
    )
}