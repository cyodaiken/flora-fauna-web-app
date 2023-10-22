import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function Footer() {

    return (
        <div className='wd-footer w-100'>
                <div className="row">

                    <div className="col-md-3 mx-auto text-center">
                        <p>
                            <a href="#!">About</a>
                        </p>
                        <p>
                            <a href="#!">Help</a>
                        </p>
                        <p>
                            <a href="#!">Terms of Use</a>
                        </p>
                    </div>

                    <div className="col-md-3 mx-auto text-center">
                        <p>
                            <a href="#!">Community</a>
                        </p>
                        <p>
                            <a href="#!">Guidelines</a>
                        </p>
                        <p>
                            <a href="#!">Privacy</a></p>
                    </div>

                    <div className="col-md-3 mx-auto text-center">
                        <p>Boston, MA 02115</p>
                        <p>info@myecologist.com</p>
                        <p>+1 617 867 5309</p>
                    </div>

                    <div className="col mx-auto text-center">
                        <div className="d-flex justify-content-center">
                            <img src="Images/world.svg" height="80px" />
                        </div>
                    </div>
                </div>

            <div className="text-center p-2">
                © 2023 Copyright
            </div>
        </div>
    );

}

export default Footer;