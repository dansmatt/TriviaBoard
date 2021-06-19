import Score from './Score'
import Timer from './Timer'

const Footer = (props) => {
    
    return (
        <footer className="container">
            <div className="row mx-auto">
                <Score score={props.score}/>
                <Timer />
            </div>
        </footer>
    );
}

export default Footer