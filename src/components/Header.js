function Header(props) {
    console.log(props)
        return <h1>Header Component, {props.firstName}, {props.color} </h1>;
        
    }
    
    export default Header;