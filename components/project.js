
export default function Project({ project }) {

    retuern (
        <>
            <H3>{project.title}</H3>
            <Image 
                src={project.url}
                height={144}
                width={144}
            />
        </>
    )
}