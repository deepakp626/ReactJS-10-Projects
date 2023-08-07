// import './App.css'
import style from './Navigation/Navigation.module.css'
import logo from '../assets/images/do_some_code_logo.png'
const Navigation = ()=>{
    // console.log(style) 
        return (
            <>
                <nav className={`${style.navigation} container`}>
                    <div>
                        <img src={logo} alt='Logo'/>
                    </div>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </>
        )
}

export default Navigation;