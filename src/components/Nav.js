
//function Nav(props) {

    const Nav = props => {
        const navStyle = {
            background: "azure",
            width: "calc(30% -10px)",
            marginLeft: "40px"
          }
        return (
            <ul style = {navStyle}>
                <li>{props.first}</li>
            </ul>
        );
    }
    
//  };

  export default Nav;

  /* <ul>
        <li>Home</li>
        <li>Articles</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
            
*/