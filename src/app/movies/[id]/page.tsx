

const MovieDetail = ({ params }: { params: { id: string } }) => {
    const { id } = params;
    return (
        <div>AnimeDetail {id}</div>
    )
}

export default MovieDetail