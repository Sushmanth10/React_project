function ConditionalRendering(){
    let fruits = []
    const isLoading = true;
    fruits = ["avacado","grapes", "orange"]

    return(
        <div>
            {
                fruits.map((fruit, index) => (
                    <p key={index}>{fruit}</p>
                ))
            }
        </div>
    )
}

export default ConditionalRendering;