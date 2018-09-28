import React, {Component} from "react";
import axios from 'axios';

class Test extends Component{
    formatPostData(data){
        const dataToSend = new URLSearchParams();

        for(let [key, value] of Object.entries(data)){
            dataToSend.append(key, value);
        }

        return dataToSend;
    }
    async componentDidMount(){
        /*const user = this.formatPostData({
            name: 'steve',
            awesomeness: true,
            codeWord: 'abracadabra'
        });*/
        const user = {
            name: 'steve',
            awesomeness: true,
            codeWord: 'abracadabra'
        };
        const response = await axios.post('/api/index.php', user);
        console.log('server response: ', response);
    }
    render(){
        return (<h1>API test Component</h1>);
    }
}

export default Test;