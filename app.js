class App extends React.Component {
    state = {
        name: "Ryu",
        age: 35
    }

    //When we use arrow function, the context of this is the component
    handleClick = (event) => {
        console.log(event.target);
        this.setState({
            name: "Yoshi",
            age: 25
        });
        console.log(this.state)
    }

    handleMouseOver = (e) => {
        console.log(e.target, e.pageX);
    }

    handleCopy  = (e) => {
        console.log("Try being original for once!");
    }

    render(){
        return(
            <div>
                <h1>Hello from my app!</h1>
                <p>Hi! My name is : {this.state.name} and my age is: {this.state.age}</p>
                <button onClick={this.handleClick}>Click Me!</button>
                <button onMouseOver={this.handleMouseOver}>Hover Me!</button>
                <p onCopy={this.handleCopy}>What we think, we become</p>
            </div>
        )
    }
} 

ReactDOM.render(<App />, document.getElementById("root"));