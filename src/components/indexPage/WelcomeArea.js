import '../../App.css';
import welcome from '../../images/welcome-bg.png'

function WelcomeArea() {
  return (
    <section className="welcome-area section-padding2">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 align-self-center">
                    <div className="welcome-img">
                        <img src={welcome} class="img-fluid" alt=""/>
                    </div>
                </div>
                <div className="col-md-6 align-self-center">
                    <div className="welcome-text mt-5 mt-md-0">
                        <h3><span className="style-change">welcome</span> <br/>to food fun</h3>
                        <p className="pt-3">Created god gathered don't you yielding herb you had. And isn't, god was saw. Dominion. Great sixth for in unto was. Open can't tree am waters brought. Divide after there. Was.</p>
                        <p>Created god gathered don't you yielding herb you had. And isn't, god was saw. Dominion. Great sixth for in unto was. Open can't tree waters brought. Divide after there. Was. Created god gathered don't you yielding herb you had. And isn't god.</p>
                        <a href="#" className="template-btn mt-3" data-toggle="modal" data-target="#form">book a table</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="modal fade" id="form" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header border-bottom-0">
                <h5 className="modal-title" id="exampleModalLabel">Book table</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form>
                <div className="modal-body">
                  <div className="form-group">
                    <label for="email1">Email address</label>
                    <input type="email" className="form-control" id="email1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted">Your information is safe with us.</small>
                  </div>
                  <div className="form-group">
                    <label for="password1">Password</label>
                    <input type="text" className="form-control" id="password1" placeholder="Password"/>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="password2" placeholder="Confirm Password"/>
                  </div>
                </div>
                <div className="modal-footer border-top-0 d-flex justify-content-center">
                  <button type="submit" className="btn btn-success">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
    </section>
  );
}

export default WelcomeArea;
