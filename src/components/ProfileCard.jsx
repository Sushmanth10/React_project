function ProjectCards(props){
    return(
        <article className="ProfileCards card">
            <h1>{props.name}</h1>
            <p>{props.desigination}</p>
        </article>
    )
}

export default ProjectCards