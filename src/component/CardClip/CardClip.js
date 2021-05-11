import React, {Component} from "react";
import "./CardClip.css"

class CardClip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: '',
            name: 'name',
            prof1: '',
            prof2: '',
            body: '',
            backTitle: '',
            backText: '',
            fontBackText: '14px',
            width: '300px',
            height: '450px',
            link:''
        };
    }


    render() {

        function flip(event){
            let element = event.currentTarget;
            if (element.className === "flip-card-inner") {
                if(element.style.transform === "rotateY(180deg)") {
                    element.style.transform = "rotateY(0deg)";
                }
                else {
                    element.style.transform = "rotateY(180deg)";
                }
            }
        };


        return (
            <div className={'flip-card'} style={{width:this.props.width, height:this.props.height, opacity:'1'}} >
                <div className={'flip-card-inner'} onClick={flip}>
                        <div className="flip-card-front row_white">
                            <img className={"p-0 bg-white"} src={this.props.img} alt="Avatar" style={{width:"100%"}}/>
                            <div className={"name bg-white"}>{this.props.name}</div>
                            {/* <div className={"prof1"}>{this.props.prof1}</div>
                            <div className={"prof2"}>{this.props.prof2}</div>
                            <div className={"body"}>{this.props.body}</div> */}
                        </div>
                        <div className="flip-card-back">
                            <div className={"backTitle"}>{this.props.backTitle}</div>
                            <div className={"backText"} style={{fontSize: this.props.fontBackText}}>{this.props.backText}
                                {this.props.link!==''
                                    ? <p className={'flip-card-link'}><a style={{color:'blue'}} href={this.props.link} target="_blank" rel="noopener noreferrer">Więcej informacji</a></p>
                                    :''
                                }
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}
CardClip.defaultProps = {
        fontBackText: "14px",
        width: '300px',
        height: '450px',
        link:''
};

export default CardClip
