import Score from './Score'
import Timer from './Timer'

const Footer = (props) => {
    
    return (
        <footer className="container">
            <div className="row mx-auto">
                <Score />
                <Timer time={60000}/>
            </div>
        </footer>
    );
}

export default Footer