function Promo(props) {

        // <h1 style = {{color:"tomato", fontSize:"40px"}}> can be re-write it as 
        //this below, thus these CSS properties become camelCased
    const styles = {
        color: "tomato",
        fontSize: "40px",
        fontWeight:"bold"
    }
    
    return (
            <div className="promo-section">
                <div>
                    <h1 style={styles}>
                        {props.heading}
                    </h1>
                </div>
                <div>
                    <h2>{props.promoSubHeading}</h2>
                </div>
            </div>
        );
    }

    export default Promo;