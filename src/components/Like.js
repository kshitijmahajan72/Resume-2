import React from 'react';
import axios from "axios";
import firebase from "../Firebase"
class Like extends React.Component {

    constructor() {
        super();

        this.state = {
            ip:"",
            like:null,
            count:0
        };
    }

    componentDidMount(){
    
        axios.get('https://api.ipify.org/?format=json')
        .then(res=>{
           
                this.setState({
                    ip: res.data.ip
                })
                const db = firebase.firestore().collection("visitors");
                db.get().then(x=>this.setState({count:x.size}))
                db.doc(res.data.ip).get()
                .then(doc=>this.setState({
                    like: doc.data().value
                }))
                .catch(doc=>{db.doc(this.state.ip).set({value:false})
                
            })       
        })
    }
    
    updateLike(){
        const db = firebase.firestore().collection("visitors");
        db.doc(this.state.ip).set({value:true})
        db.get().then(x=>this.setState({count:x.size}))
        this.setState({
            like: !this.state.like
        })
        
    }
    render() {
        return (
            <div>
                {
                        
                        this.state.like?<button className="btn btn-info" style={{backgroundColor:"#22A39F"}} disabled><span className="fa fa-check fa-lg" ></span> Liked  {this.state.count}</button>
                        :<button className="btn btn-primary" style={{backgroundColor:"#22A39F"}} onClick={this.updateLike.bind(this)}><span className="fa fa-thumbs-up fa-lg"></span> Like </button>
                    }
            </div>
        );
    }
}


export default Like;