import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";

const Landing = () => {
    return (
        <main>
            <nav>
                <img src={logo} alt='jobotron' className='logo' />
            </nav>
            <div className='container page'>
                {/* info */}
                <div className='info'>
                    <h1>
                        job <span>tracking</span> app
                    </h1>
                    <p>
                        I'm baby marfa poutine pickled kickstarter 8-bit
                        drinking vinegar schlitz sriracha next level cloud bread
                        affogato hoodie pinterest post-ironic. Skateboard craft
                        beer unicorn blue bottle brooklyn lyft.{" "}
                    </p>
                    <button className='btn btn-hero'>Login/Register</button>
                </div>
                <img src={main} alt='job hunt' className='img main-img' />
            </div>
        </main>
    );
};
export default Landing;
