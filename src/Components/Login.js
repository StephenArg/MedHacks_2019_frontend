import React from 'react'
 
const Login = props => {
  return (
    <div>
        <div className="alert alert-danger" role="alert" id="error" style={{display: 'none'}}>
        Email or password is incorrect.
        </div>
        <div className="signup-form">
            <form action="/examples/actions/confirmation.php" method="post">
            <h2>Login</h2>
                <div className="form-group">
              <div className="input-group">
                <span className="input-group-addon"><i className="fa fa-paper-plane"></i></span>
                <input type="email" className="form-control" name="email" id="email" placeholder="Email Address" required="required"/>>
              </div>
                </div>
            <div className="form-group">
              <div className="input-group">
                <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                <input type="password" className="form-control" name="pass" id="pass" placeholder="Password" required="required"/>>
              </div>
                </div>
                <div id="login" name="login" className="form-group">
                  <button type="submit" className="btn btn-primary btn-block btn-lg">Login</button>
                </div>
            </form>
          <div className="text-center" >Need an account? <p onClick={props.handleSignupForm}>Sign Up here.</p></div>
        </div>
      <script src="https://www.gstatic.com/firebasejs/7.0.0/firebase-app.js"></script>
      <script src="https://www.gstatic.com/firebasejs/7.0.0/firebase-auth.js"></script>
    </div>
  )
}
 
export default Login
