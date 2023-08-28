import { useState } from "react";
import "./signin.css";

const Signin = () => {
    const [userName, setUserName] = useState('');
    const [userNameError, setUserErrorMessage] = useState(false);
    const [userNameMessage, setUserNameMessage] = useState("Enter your name");

    const [userSurname, setUserSurname] = useState('');
    const [userSurnameError, setUserSurnameError] = useState(false);
    const [userSurnameMessage, setuserSurnameMessage] = useState("Enter your surname");

    const [userEmail, setUserEmail] = useState('');
    const [userEmailError, setUserEmailError] = useState(false);
    const [userEmailMessage, setuserEmailMessage] = useState("This field is required");

    const [userPassword, setUserPassword] = useState('');
    const [userPasswordError, setUserPasswordError] = useState(false);
    const [userPasswordMessage, setuserPasswordMessage] = useState("This field is required");
    


    const userNameHandler = (e) => {
        setUserName(e.target.value);
        if (userName !=="") {
            setUserNameMessage("You are doing well");
        }
    
        
    };

    const userSurNameHandler = (e) => {
        setUserSurname(e.target.value);
        if (userSurname !=="") {
            setuserSurnameMessage("You are doing well");
        }
    };

    const userEmailHandler = (e) => {
        setUserEmail(e.target.value);
        if (userEmail !=="") {
            setuserEmailMessage("You are doing well");
        }
    };

    const userPasswordHandler = (e) => {
        setUserPassword(e.target.value);
        if (userPassword !=="") {
            setuserPasswordMessage("You are doing well");
        }
    };



    const submitFormHandler = (e) => {
        e.preventDefault();
        console.log(userName);
        console.log(userSurname);
        console.log(userEmail);
        console.log(userPassword);

        if (userName === "") {
            setUserErrorMessage(true);
        }

        if (userSurname === "") {
            setUserSurnameError(true);
            
        }

        if (userEmail === "") {
            setUserEmailError(true);
        }

        if (userPassword === "") {
            setUserPasswordError(true);
            
        }


    }

    return (
        <div className="">
            <h1 className="text-primary fw-bold mt-5 text-center">facebook</h1>
            <br />
            <div className="d-flex justify-content-center">
                <div className="card style">
                    <div className="card-body">
                        <h2 className="fw-bolder text-center">Create a new account</h2>
                        <p className="text-center fw-medium text-light-emphasis">
                            It's quick and easy
                        </p>
                        <hr />
                        <form onSubmit={submitFormHandler}>
                            <div className="row">
                                <div className="col-md-6">
                                    <input
                                        value={userName}
                                        onChange={userNameHandler}
                                        className="form-control-lg mt-2 blu"
                                        type="text"
                                        placeholder="First name" />
                                    {userNameError && <p className={`${userNameMessage ==="Enter your name" ? "text-danger" : "text-success"} fw-semibold`}>{userNameMessage}</p>}
                                </div>
                                <div className="col-md-6">
                                <input
                                    value={userSurname}
                                    onChange={userSurNameHandler}
                                    className="form-control-lg mt-2 blu"
                                    type="text"
                                    placeholder="Surname" />
                                {userSurnameError && <p className={`${userSurnameMessage ==="Enter your surname" ? "text-danger" : "text-success"} fw-semibold`}>{userSurnameMessage}</p>}
                                </div>
                            </div>
                            <br />
                            <input
                                value={userEmail}
                                onChange={userEmailHandler}
                                className="form-control-lg col-12 col-md-12 mt-3 blu"
                                type="email"
                                placeholder="Mobile number or email address"
                            />
                            {userEmailError && <p className={`${userEmailMessage ==="This field is required" ? "text-danger" : "text-success"} fw-semibold`}>{userEmailMessage}</p>}
                            <input
                                value={userPassword}
                                onChange={userPasswordHandler}
                                className="form-control-lg col-12 col-md-12 mt-3 blu"
                                type="password"
                                placeholder="New password"
                            />
                            {userPasswordError && <p className={`${userPasswordMessage ==="This field is required" ? "text-danger" : "text-success"} fw-semibold`}>{userPasswordMessage}</p>}
                            <button type="submit" className="signup-btn text-light fw-bolder position-relative start-50 translate-middle mt-5">
                                Sign Up
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;
