import './Header.css';


const Header = ( {title, desc} ) => {
return (
    <header className="root">
        <div className="forest"></div>
        <div className="container">
            <h1>{title}</h1>
            <p>{desc}</p>
        </div>
    </header>
    );
}
  
export default Header;


