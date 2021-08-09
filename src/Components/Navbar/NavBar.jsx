import { Component } from 'react';
import styles from './NavBar.module.scss';

// const NavBar = ({products}) => {
//     return ( 
//         <header className={styles.navBar}>
//             <h1>Armin Shopping</h1> 
//             <span>{products}</span>
//         </header>
//      );
// }

class NavBar extends Component{
    componentDidMount() {
        console.log("NavBar.jsx DidMount");
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("NavBar.jsx DidUpdate");
    }
    render(){
        const {products} = this.props;
    return ( 
        <header className={styles.navBar}>
            <h1>Armin Shopping</h1> 
            <span>{products}</span>
        </header>
     );
    }
}
 
export default NavBar;