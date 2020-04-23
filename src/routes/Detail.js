import React from "react";
import "./Detail.css";

class Detail extends React.Component{
    componentDidMount(){
        const { location, history } = this.props;
        console.log("DidMount");
        console.log(this.props);
        
        if(location.state === undefined){
            history.push("/");
        }
    }
    render() {
        const { location } = this.props;
        console.log("detail render");
        
        if(location.state) {
            
            return (
            <div className="movie__detail">
                <div className="movie__picture"><img src={location.state.poster} alt={location.state.title} title={location.state.title}/></div>
                <div className="detail_data">    
                    <h5 className="movie__year">{location.state.year}</h5>
                    <h3 className="movie__title">{location.state.title}</h3>
                    <div className="movie__summary">{location.state.summary}</div>
                </div>            
            </div>);
                
            
        }else{
            return null;
        }
    }
}

export default Detail;