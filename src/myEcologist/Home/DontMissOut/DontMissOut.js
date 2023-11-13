import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";
import './DontMissOut.css';

function DontMissOut() {

    return (
        <div className='wd-dont-miss-out d-flex p-4'>
            <div className='row w-100'>
                <div className='col-6'>
                    <h4>Don't Miss Out</h4>
                </div>

                <div className='col-6'>
                    <button className='btn btn-success join-now-btn float-end'>Join Now</button>
                </div>
            </div>
        </div>
    );
}

export default DontMissOut;