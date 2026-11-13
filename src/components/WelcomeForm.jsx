import '../css/components/WelcomeForm.css';
import Logo from '../assets/images/logo.svg';

const WelcomeForm = () => {
    return (  
        <div className="container__description__form">
            <div className="description">
                <div className="logo">
                    <img src={Logo} alt="logo"/>
                </div>
                <h1 className="welcome-title">
                <span className="welcome-title__slashes" aria-hidden="true">
                    <span />
                    <span />
                </span>
                <span className="welcome-title__top">JOIN THE</span>
                <span className="welcome-title__bottom">NEXUS</span>
                </h1>
                <p>
                    Initialize your neoncore identity
                </p>
                <div className="container__signed">
                    <div className="title__signed">
                        <span>
                            Operator id
                        </span>
                        <span>
                            0/5 ready
                        </span>
                    </div>
                    <div className="signed">
                        <h2>Unassigned</h2>
                        <div className="container__points">
                            <div className="point">
                                <h4>
                                    Callsign
                                </h4>
                                <div className="line"></div>
                                <h4>
                                    Pending
                                </h4>
                            </div>
                            <div className="point">
                                <h4>
                                    Email
                                </h4>
                                <div className="line"></div>
                                <h4>
                                    Pending
                                </h4>
                            </div>
                            <div className="point">
                                <h4>
                                    Password
                                </h4>
                                <div className="line"></div>
                                <h4>
                                    Pending
                                </h4>
                            </div>
                            <div className="point">
                                <h4>
                                    Confirm
                                </h4>
                                <div className="line"></div>
                                <h4>
                                    Pending
                                </h4>
                            </div>
                            <div className="point">
                                <h4>
                                    Terms
                                </h4>
                                <div className="line"></div>
                                <h4>
                                    Required
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default WelcomeForm;