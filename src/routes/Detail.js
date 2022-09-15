import React from "react";
import './Detail.css';

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push('/');
        }
    }

    render() {
        const { location } = this.props;
        if (location.state) {
            return (
                <div className="detail__container">
                    <div className="info__container">
                        <div id="title">
                            {location.state.title}
                        </div>
                        <div id="title_long">
                            {location.state.title_long}
                        </div>
                        <hr></hr>
                        <div>
                            rating : {location.state.rating}
                        </div>
                        <hr></hr>
                        <div>
                            year : {location.state.year}
                        </div>
                        <div className="genres">
                            genres:
                            {location.state.genres.map((genres, index) => {
                                return <li key={index} className="genres"> {genres} </li>
                            })}
                        </div>
                        <div>
                            runtime : {location.state.runtime} minutes
                        </div>
                        <hr></hr>
                        <div>
                            summary : {location.state.summary}
                        </div>
                    </div>
                    <div className="img__container">
                        <img src={location.state.poster} alt={location.state.title} title={location.state.title}/>
                    </div>
                </div>
            );
        } else {
            return null;
        }

    }
}
export default Detail;
