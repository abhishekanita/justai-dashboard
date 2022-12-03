import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div class="container-fluid px-3">
        <div class="row">
            <div class="col-lg-6 d-none d-lg-flex justify-content-center align-items-center min-vh-lg-100 position-relative bg-light px-0">
                <div class="position-absolute top-0 start-0 end-0 mt-3 mx-3">
                    <div class="d-none d-lg-flex justify-content-between">
                        <a href="./index.html">
                            <img class="w-100" src="/assets/img/logo/justai.svg" alt="Image Description" data-hs-theme-appearance="dark" style={{minWidth: "7rem", maxWidth: "7rem"}} />
                        </a>
                    </div>
                </div>
                <div style={{maxWidth: "23rem"}}>
                    <div class="text-center mb-5">
                        <img class="img-fluid" src="https://htmlstream.com/front-dashboard/assets/svg/illustrations-light/oc-chatting.svg" alt="Image Description" style={{width: "12rem"}} data-hs-theme-appearance="dark" />
                    </div>
                    <div class="mb-5">
                        <h2 class="display-5">Build digital products with:</h2>
                    </div>
                    <ul class="list-checked list-checked-lg list-checked-primary list-py-2">
                        <li class="list-checked-item">
                            <span class="d-block fw-semibold mb-1">All-in-one tool</span>
                            Build, run, and scale your apps - end to end
                        </li>
                        <li class="list-checked-item">
                            <span class="d-block fw-semibold mb-1">Easily add &amp; manage your services</span>
                            It brings together your tasks, projects, timelines, files and more
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-6 d-flex justify-content-center align-items-center min-vh-lg-100">
                <div class="w-100 content-space-t-4 content-space-t-lg-2 content-space-b-1" style={{maxWidth: "25rem"}}>
                    <form class="js-validate needs-validation" novalidate="">
                        <div class="text-center">
                            <div class="mb-5">
                                <h1 class="display-5">Sign in</h1>
                                <p>Don't have an account yet? <a class="link" href="./authentication-signup-cover.html">Sign up here</a></p>
                            </div>
                            <div class="d-grid mb-4">
                  <Link to = "/app" class="btn btn-white btn-lg" href="#">
                    <span class="d-flex justify-content-center align-items-center">
                      <img class="avatar avatar-xss me-2" src="https://htmlstream.com/front-dashboard/assets/svg/brands/google-icon.svg" alt="Image Description" />
                      Sign in with Google
                    </span>
                  </Link>
                </div>

                <span class="divider-center text-muted mb-4">OR</span>
              </div>

              <div class="mb-4">
                <label class="form-label" for="signinSrEmail">Your email</label>
                <input type="email" class="form-control form-control-lg" name="email" id="signinSrEmail" tabindex="1" placeholder="email@address.com" aria-label="email@address.com" required="" />
                <span class="invalid-feedback">Please enter a valid email address.</span>
              </div>

              <div class="mb-4">
                <label class="form-label w-100" for="signupSrPassword" tabindex="0">
                  <span class="d-flex justify-content-between align-items-center">
                    <span>Password</span>
                    <a class="form-label-link mb-0" href="./authentication-reset-password-cover.html">Forgot Password?</a>
                  </span>
                </label>

                <div class="input-group input-group-merge" data-hs-validation-validate-class="">
                  <input type="password" class="js-toggle-password form-control form-control-lg"  />
                  <a id="changePassTarget" class="input-group-append input-group-text" href="javascript:;">
                    <i id="changePassIcon" class="bi-eye-slash"></i>
                  </a>
                </div>

                <span class="invalid-feedback">Please enter a valid password.</span>
              </div>

              <div class="form-check mb-4">
                <input class="form-check-input" type="checkbox" value="" id="termsCheckbox" />
                <label class="form-check-label" for="termsCheckbox">
                  Remember me
                </label>
              </div>

              <div class="d-grid">
                <Link to="/app" type="submit" class="btn btn-primary btn-lg">Sign in</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login