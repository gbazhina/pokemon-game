import './Layout.css';

const Layout = ( {title, desc, id, urlBg, colorBg = false} ) => {
    const styleRoot = colorBg ? {backgroundImage: 'none', background: '#ddd'} : { backgroundImage: `url(${urlBg})`};

    
return (
    <section className="root" id={id} style={styleRoot}>
        <div className="wrapper">
            <article>
                <div className="title">
                    <h3>{title}</h3>
                    <span className="separator"></span>
                </div>
                <div className="desc full">
                    <p>{desc}</p>
                </div>
            </article>
        </div>
    </section>
    );
}

export default Layout;





