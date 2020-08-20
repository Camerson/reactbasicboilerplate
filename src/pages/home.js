import React from 'react'
import Main from '../layouts/main'
import Header from "../components/header";

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: ''
        }
    }

    componentDidMount(){
        this.setState({title: 'Home'})
    }
    render(){
        return (
            <Main>
                <Header
                    title={this.state.title}
                />
                <h1>{this.state.title}</h1>
                <p>An example of head elements coming from state.</p>
            </Main>
        )
    }
}

export default Home;
