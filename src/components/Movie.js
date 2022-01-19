import PropTypes from "prop-types";
function Movie({coverImg, title, summary, genres}){ 
                //({properties}) > 부모 컴포넌트로부터 받아옴
                //이름 원하는대로 짓기 가능
    return (
    <div>
        <img src={coverImg} alt={title}/>
        <h2>{title}</h2>
        <p>{summary}</p>
        <ul>
            {genres.map( 
                (g) => ( 
                    <li key={g}>{g}</li>
                )
            )}
        </ul>
    </div>);
}
Movie.PropTypes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};



export default Movie;