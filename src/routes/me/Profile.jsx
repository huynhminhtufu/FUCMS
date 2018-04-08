import React from 'react';

class Profile extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="row">
              <div className="col-lg-12 col-md-6 order-md-1">
                <div className="card animated fadeInUp animation-delay-7">
                  <div className="ms-hero-bg-primary ms-hero-img-coffee">
                    <h3 className="color-white index-1 text-center no-m pt-4">Victoria Smith</h3>
                    <div className="color-medium index-1 text-center np-m">@vic_smith</div>
                    <img src="https://agmstudio.io/themes/material-style/2.2.2/assets/img/demo/avatar1.jpg" alt="Profile picture" className="img-avatar-circle" /> </div>
                  <div className="card-body pt-4 text-center">
                    <h3 className="color-primary">Bio</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur alter adipisicing elit. Facilis, natuse inse voluptates officia repudiandae beatae magni es magnam autem molestias.</p>
                    <a href="javascript:void(0)" className="btn-circle btn-circle-raised btn-circle-xs mt-1 mr-1 no-mr-md btn-facebook">
                      <i className="zmdi zmdi-facebook" />
                    </a>
                    <a href="javascript:void(0)" className="btn-circle btn-circle-raised btn-circle-xs mt-1 mr-1 no-mr-md btn-twitter">
                      <i className="zmdi zmdi-twitter" />
                    </a>
                    <a href="javascript:void(0)" className="btn-circle btn-circle-raised btn-circle-xs mt-1 mr-1 no-mr-md btn-instagram">
                      <i className="zmdi zmdi-instagram" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 order-md-3 order-lg-2">
                <a href="javascript:void(0)" className="btn btn-warning btn-raised btn-block animated fadeInUp animation-delay-12">
                  <i className="zmdi zmdi-edit" /> Edit Profile</a>
                <a href="javascript:void(0)" className="btn btn-danger btn-raised btn-block animated fadeInUp animation-delay-12">
                  <i className="zmdi zmdi-delete" /> Delete User</a>
              </div>
              <div className="col-lg-12 col-md-6 order-md-2 order-lg-3">
                <div className="card animated fadeInUp animation-delay-12">
                  <div className="ms-hero-bg-royal ms-hero-img-mountain">
                    <h3 className="color-white index-1 text-center pb-4 pt-4">Recent Contacts</h3>
                  </div>
                  <div className="card-body">
                    <div className="ms-media-list">
                      <div className="media mb-2">
                        <a className="mr-3" href="#">
                          <img className="media-object" src="https://agmstudio.io/themes/material-style/2.2.2/assets/img/demo/avatar6.jpg" /> </a>
                        <div className="media-body">
                          <h4 className="mt-0 mb-0 color-warning">Maria Sharaphova</h4>
                          <a href="mailto:joe@example.com?subject=feedback">maria.sha@example.com</a>
                          <div>
                            <a href="javascript:void(0)" className="btn-circle btn-circle-xs no-mr-md btn-facebook">
                              <i className="zmdi zmdi-facebook" />
                            </a>
                            <a href="javascript:void(0)" className="btn-circle btn-circle-xs no-mr-md btn-twitter">
                              <i className="zmdi zmdi-twitter" />
                            </a>
                            <a href="javascript:void(0)" className="btn-circle btn-circle-xs no-mr-md btn-instagram">
                              <i className="zmdi zmdi-instagram" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="media mb-2">
                        <div className="media-left media-middle">
                          <a className="mr-3" href="#">
                            <img className="media-object" src="https://agmstudio.io/themes/material-style/2.2.2/assets/img/demo/avatar3.jpg" /> </a>
                        </div>
                        <div className="media-body">
                          <h4 className="mt-0 mb-0 color-warning">Rafael Nadal</h4>
                          <a href="mailto:joe@example.com?subject=feedback">rafa.nad@example.com</a>
                          <div>
                            <a href="javascript:void(0)" className="btn-circle btn-circle-xs no-mr-md btn-facebook">
                              <i className="zmdi zmdi-facebook" />
                            </a>
                            <a href="javascript:void(0)" className="btn-circle btn-circle-xs no-mr-md btn-twitter">
                              <i className="zmdi zmdi-twitter" />
                            </a>
                            <a href="javascript:void(0)" className="btn-circle btn-circle-xs no-mr-md btn-instagram">
                              <i className="zmdi zmdi-instagram" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="media mb-2">
                        <div className="media-left media-middle">
                          <a className="mr-3" href="#">
                            <img className="media-object" src="https://agmstudio.io/themes/material-style/2.2.2/assets/img/demo/avatar5.jpg" /> </a>
                        </div>
                        <div className="media-body">
                          <h4 className="mt-0 mb-0 color-warning">Roger Federer</h4>
                          <a href="mailto:joe@example.com?subject=feedback">roger.fef@example.com</a>
                          <div>
                            <a href="javascript:void(0)" className="btn-circle btn-circle-xs no-mr-md btn-facebook">
                              <i className="zmdi zmdi-facebook" />
                            </a>
                            <a href="javascript:void(0)" className="btn-circle btn-circle-xs no-mr-md btn-twitter">
                              <i className="zmdi zmdi-twitter" />
                            </a>
                            <a href="javascript:void(0)" className="btn-circle btn-circle-xs no-mr-md btn-instagram">
                              <i className="zmdi zmdi-instagram" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="row">
              <div className="col-sm-4">
                <div className="card card-info card-body text-center wow zoomInUp animation-delay-2" style={{visibility: 'visible', animationName: 'zoomInUp'}}>
                  <h2 className="counter color-info">450</h2>
                  <i className="fa fa-4x fa-file-text color-info" />
                  <p className="mt-2 no-mb lead small-caps color-info">articles</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="card card-success card-body text-center wow zoomInUp animation-delay-5" style={{visibility: 'visible', animationName: 'zoomInUp'}}>
                  <h2 className="counter color-success">64</h2>
                  <i className="fa fa-4x fa-briefcase color-success" />
                  <p className="mt-2 no-mb lead small-caps color-success">projects done</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="card card-royal card-body text-center wow zoomInUp animation-delay-4" style={{visibility: 'visible', animationName: 'zoomInUp'}}>
                  <h2 className="counter color-royal">600</h2>
                  <i className="fa fa-4x fa-comments-o color-royal" />
                  <p className="mt-2 no-mb lead small-caps color-royal">comments</p>
                </div>
              </div>
            </div>
            <div className="card card-primary animated fadeInUp animation-delay-12">
              <div className="card-header">
                <h3 className="card-title">
                  <i className="zmdi zmdi-account-circle" /> General Information</h3>
              </div>
              <table className="table table-no-border table-striped">
                <tbody><tr>
                    <th>
                      <i className="zmdi zmdi-account mr-1 color-success" /> User Name</th>
                    <td>vic_smith</td>
                  </tr>
                  <tr>
                    <th>
                      <i className="zmdi zmdi-face mr-1 color-warning" /> Fullname</th>
                    <td>Victoria Smith</td>
                  </tr>
                  <tr>
                    <th>
                      <i className="zmdi zmdi-email mr-1 color-danger" /> Email</th>
                    <td>
                      <a href="#">mail@example.com</a>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <i className="zmdi zmdi-link mr-1 color-info" /> Website</th>
                    <td>
                      <a href="#">www.example.com</a>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <i className="zmdi zmdi-calendar mr-1 color-royal" /> Member Since</th>
                    <td>12/11/2015</td>
                  </tr>
                </tbody></table>
            </div>
            <h2 className="color-primary text-center mt-4 mb-2">Recent Activity</h2>
            <div className="row">
              <div className="col-lg-12">
                <ul className="ms-timeline">
                  <li className="ms-timeline-item wow materialUp" style={{visibility: 'visible', animationName: 'materialUp'}}>
                    <div className="ms-timeline-date">
                      <time className="timeline-time" >2016
                        <span>March</span>
                      </time>
                      <i className="ms-timeline-point bg-royal" />
                      <img src="https://agmstudio.io/themes/material-style/2.2.2/assets/img/demo/avatar6.jpg" className="ms-timeline-point-img" /> </div>
                    <div className="card card-royal">
                      <div className="card-header">
                        <h3 className="card-title">Card Title</h3>
                      </div>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-sm-4">
                            <img src="https://agmstudio.io/themes/material-style/2.2.2/assets/img/demo/office1.jpg" alt="card title" className="img-fluid" /> </div>
                          <div className="col-sm-8">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, praesentium, quam! Quia fugiat aperiam.</p>
                            <p>Perspiciatis soluta voluptate dolore officiis libero repellat cupiditate explicabo atque facere aliquam.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="ms-timeline-item wow materialUp" style={{visibility: 'visible', animationName: 'materialUp'}}>
                    <div className="ms-timeline-date">
                      <time className="timeline-time" >2015
                        <span>October</span>
                      </time>
                      <i className="ms-timeline-point bg-info" />
                    </div>
                    <div className="card card-info">
                      <div className="card-header">
                        <h3 className="card-title">Card Title</h3>
                      </div>
                      <div className="list-group">
                        <a href="javascript:void(0)" className="list-group-item withripple">
                          <i className="zmdi zmdi-favorite" />Cras justo odio
                          <span className="label label-default pull-right">Active</span>
                        </a>
                        <a href="javascript:void(0)" className="list-group-item withripple">
                          <i className="zmdi zmdi-cocktail" /> Dapibus ac facilisis in
                          <span className="label label-primary pull-right">Other</span>
                        </a>
                        <a href="javascript:void(0)" className="list-group-item withripple active">
                          <i className="zmdi zmdi-cast" />Morbi leo risus
                          <span className="label label-default pull-right">New</span>
                        </a>
                        <a href="javascript:void(0)" className="list-group-item withripple">
                          <i className="zmdi zmdi-city" />Porta ac consectetur ac
                          <span className="label label-warning pull-right">Two words</span>
                        </a>
                        <a href="javascript:void(0)" className="list-group-item withripple">
                          <i className="zmdi zmdi-chart" />Vestibulum at eros
                          <span className="label label-success pull-right">Success</span>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="ms-timeline-item wow materialUp" style={{visibility: 'visible', animationName: 'materialUp'}}>
                    <div className="ms-timeline-date">
                      <time className="timeline-time" >2015
                        <span>October</span>
                      </time>
                      <i className="ms-timeline-point bg-success" />
                    </div>
                    <div className="card card-success-inverse">
                      <div className="card-body"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus officiis autem magni et, nisi eveniet nulla magnam tenetur voluptatem dolore, assumenda delectus error porro animi architecto dolorum quod veniam nesciunt.
                      </div>
                    </div>
                  </li>
                  <li className="ms-timeline-item wow materialUp" style={{visibility: 'hidden', animationName: 'none'}}>
                    <div className="ms-timeline-date">
                      <time className="timeline-time" >2015
                        <span>February</span>
                      </time>
                      <i className="ms-timeline-point bg-warning" />
                      <img src="https://agmstudio.io/themes/material-style/2.2.2/assets/img/demo/avatar2.jpg" className="ms-timeline-point-img" /> </div>
                    <div className="card card-warning">
                      <div className="card-header">
                        <h3 className="card-title">Card Title</h3>
                      </div>
                      <div className="card-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, nulla recusandae blanditiis architecto soluta culpa obcaecati quis earum atque consequuntur.</p>
                        <div className="row">
                          <div className="col-sm-4">
                            <img src="https://agmstudio.io/themes/material-style/2.2.2/assets/img/demo/office2.jpg" alt="Alt for this image" className="img-fluid" /> </div>
                          <div className="col-sm-4">
                            <img src="https://agmstudio.io/themes/material-style/2.2.2/assets/img/demo/office3.jpg" alt="Alt for this image" className="img-fluid" /> </div>
                          <div className="col-sm-4">
                            <img src="https://agmstudio.io/themes/material-style/2.2.2/assets/img/demo/office4.jpg" alt="Alt for this image" className="img-fluid" /> </div>
                        </div>
                        <br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, ipsum voluptates eius placeat dolorum reprehenderit ducimus accusamus magni aspernatur at dolore assumenda quae suscipit enim veritatis obcaecati molestias laudantium
                          maxime!</p>
                      </div>
                    </div>
                  </li>
                  <li className="ms-timeline-item wow materialUp" style={{visibility: 'hidden', animationName: 'none'}}>
                    <div className="ms-timeline-date">
                      <time className="timeline-time" >2014
                        <span>July</span>
                      </time>
                      <i className="ms-timeline-point" />
                    </div>
                    <div className="card">
                      <blockquote className="blockquote blockquote-color-bg-primary withripple color-white">
                        <p>
                          <strong>Blockquote in timeline!</strong> consectetur adipiscing elit. Integer sodales sagittis magna. consectetur adipiscing elit sed consequat, quam semper libero.</p>
                        <footer>Someone famous in
                          <cite title="Source Title">Source Title</cite>
                        </footer>
                      </blockquote>
                    </div>
                  </li>
                  <li className="ms-timeline-item wow materialUp" style={{visibility: 'hidden', animationName: 'none'}}>
                    <div className="ms-timeline-date">
                      <time className="timeline-time" >2014
                        <span>January</span>
                      </time>
                      <i className="ms-timeline-point bg-info" />
                      <img src="https://agmstudio.io/themes/material-style/2.2.2/assets/img/demo/avatar3.jpg" className="ms-timeline-point-img" /> </div>
                    <div className="card card-info">
                      <div className="card-header">
                        <h3 className="card-title">Card Title</h3>
                      </div>
                      <div tabIndex={0} className="plyr plyr--youtube plyr--video plyr--fullscreen-enabled plyr--stopped plyr--ready" aria-label="Landscapes: Volume 4K (UHD)"><div className="plyr__video-wrapper plyr__video-embed plyr--setup" style={{cursor: 'pointer'}}><iframe id="youtube-1521" frameBorder={0} allowFullScreen={1} allow="autoplay; encrypted-media" title="Player for Landscapes: Volume 4K (UHD)" width={640} height={360} src="https://www.youtube.com/embed/9ZfN87gSjvI?autoplay=0&controls=0&rel=0&showinfo=0&iv_load_policy=3&cc_load_policy=0&cc_lang_pref=en&wmode=transparent&modestbranding=1&disablekb=1&origin=https%3A%2F%2Fagmstudio.io&enablejsapi=1&widgetid=1" tabIndex={-1} /></div><button type="button" data-plyr="play" className="plyr__play-large" aria-label="Play, Landscapes: Volume 4K (UHD)"><svg><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#plyr-play" /></svg><span className="plyr__sr-only">Play</span></button><div className="plyr__controls"><button type="button" data-plyr="play" aria-label="Play, Landscapes: Volume 4K (UHD)"><svg><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#plyr-play" /></svg><span className="plyr__sr-only">Play</span></button><button type="button" data-plyr="pause"><svg><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#plyr-pause" /></svg><span className="plyr__sr-only">Pause</span></button><span className="plyr__progress"><label htmlFor="seek6931" className="plyr__sr-only">Seek</label><input id="seek6931" className="plyr__progress--seek" type="range" min={0} max={100} step="0.1" defaultValue={0} data-plyr="seek" /><progress className="plyr__progress--played" max={100} value={0} role="presentation" /><progress className="plyr__progress--buffer" max={100} value={0}><span>0</span>% buffered</progress><span className="plyr__tooltip">00:00</span></span><span className="plyr__time"><span className="plyr__sr-only">Current time</span><span className="plyr__time--current">04:18</span></span><button type="button" data-plyr="mute" aria-pressed="false"><svg className="icon--muted"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#plyr-muted" /></svg><svg><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#plyr-volume" /></svg><span className="plyr__sr-only">Toggle Mute</span></button><span className="plyr__volume"><label htmlFor="volume6931" className="plyr__sr-only">Volume</label><input id="volume6931" className="plyr__volume--input" type="range" min={0} max={10} defaultValue={10} data-plyr="volume" /><progress className="plyr__volume--display" max={10} value={10} role="presentation" /></span><button type="button" data-plyr="captions"><svg className="icon--captions-on"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#plyr-captions-on" /></svg><svg><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#plyr-captions-off" /></svg><span className="plyr__sr-only">Toggle Captions</span></button><button type="button" data-plyr="fullscreen" aria-pressed="false"><svg className="icon--exit-fullscreen"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#plyr-exit-fullscreen" /></svg><svg><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#plyr-enter-fullscreen" /></svg><span className="plyr__sr-only">Toggle Fullscreen</span></button></div></div>
                    </div>
                  </li>
                  <li className="ms-timeline-item wow materialUp" style={{visibility: 'hidden', animationName: 'none'}}>
                    <div className="ms-timeline-date">
                      <time className="timeline-time" >2013
                        <span>June</span>
                      </time>
                      <i className="ms-timeline-point" />
                    </div>
                    <div className="card">
                      <div className="ms-hero-bg-primary ms-hero-img-coffee">
                        <h3 className="color-white index-1 text-center no-m pt-4">Victoria Smith</h3>
                        <div className="color-medium index-1 text-center np-m">@vic_smith</div>
                        <img src="https://agmstudio.io/themes/material-style/2.2.2/assets/img/demo/avatar1.jpg" alt="..." className="img-avatar-circle" /> </div>
                      <div className="card-body pt-4 text-center">
                        <h3 className="color-primary">Bio</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur alter adipisicing elit. Facilis, natuse inse voluptates officia repudiandae beatae magni es magnam autem molestias.</p>
                        <a href="javascript:void(0)" className="btn-circle btn-circle-raised btn-circle-xs mt-1 mr-1 no-mr-md btn-facebook">
                          <i className="zmdi zmdi-facebook" />
                        </a>
                        <a href="javascript:void(0)" className="btn-circle btn-circle-raised btn-circle-xs mt-1 mr-1 no-mr-md btn-twitter">
                          <i className="zmdi zmdi-twitter" />
                        </a>
                        <a href="javascript:void(0)" className="btn-circle btn-circle-raised btn-circle-xs mt-1 mr-1 no-mr-md btn-instagram">
                          <i className="zmdi zmdi-instagram" />
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;