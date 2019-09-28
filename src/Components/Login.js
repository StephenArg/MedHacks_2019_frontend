import React from 'react'
 
const Login = props => {
  return (
    <div>
      <head>
        <title>MedHacks 2019</title>
      </head>
        <body>
          <div class="alert alert-danger" role="alert" id="error" style="display: none">
          Email or password is incorrect.
          </div>
          <div class="signup-form">
              <form action="/examples/actions/confirmation.php" method="post">
              <h2>Login</h2>
                  <div class="form-group">
                <div class="input-group">
                  <span class="input-group-addon"><i class="fa fa-paper-plane"></i></span>
                  <input type="email" class="form-control" name="email" id="email" placeholder="Email Address" required="required"/>>
                </div>
                  </div>
              <div class="form-group">
                <div class="input-group">
                  <span class="input-group-addon"><i class="fa fa-lock"></i></span>
                  <input type="password" class="form-control" name="pass" id="pass" placeholder="Password" required="required"/>>
                </div>
                  </div>
                  <div id="login" name="login" class="form-group">
                    <button type="submit" class="btn btn-primary btn-block btn-lg">Login</button>
                  </div>
              </form>
            <div class="text-center" >Need an account? <p onClick={props.handleSignupForm}>Sign Up here.</p></div>
          </div>
        <script src="https://www.gstatic.com/firebasejs/7.0.0/firebase-app.js"></script>
        <script src="https://www.gstatic.com/firebasejs/7.0.0/firebase-auth.js"></script>
      </body>
    </div>
  )
}
 
export default Login