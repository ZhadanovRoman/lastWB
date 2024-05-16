
const accord = `<div class="accordion  col-md-9" id="accordionExample">
<div class="accordion-item mb-4">
    <h2 class="accordion-header" id="headingOne">
        <button class="accordion-button" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Sunset Sun Set
        </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
        data-bs-parent="#accordionExample">
        <div class="accordion-body accord-main-body">
            <img src="./assets/images/mainPic.png" class="img-fluid content__main-img" alt="slide image">
        </div>
    </div>
</div>
<div class="accordion-item mb-4">
    <h2 class="accordion-header" id="headingTwo">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Accordion Item #2
        </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample">
        <div class="accordion-body">
            <strong>This is the second item's accordion body.</strong> It is hidden by default,
            until the collapse plugin adds the appropriate classes that we use to style each
            element. These classes control the overall appearance, as well as the showing and hiding
            via CSS transitions. You can modify any of this with custom CSS or overriding our
            default variables. It's also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
<div class="accordion-item mb-4">
    <h2 class="accordion-header" id="headingThree">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Accordion Item #3
        </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
        data-bs-parent="#accordionExample">
        <div class="accordion-body">
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until
            the collapse plugin adds the appropriate classes that we use to style each element.
            These classes control the overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or overriding our default
            variables. It's also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
</div>
<div class="content__right d-flex flex-column  col-md-3  ">
<div class="content__right-avatar d-flex flex-column mb-4 py-3 align-items-center">
    <img src="./assets/images/avatar.png" class="img-fluid content__avatar-img" alt="avatar image">
    <span class="content__right-name  py-1 "> hanna dorman</span>
    <span class="content__right-stat  py-1 "> UX/UI designer</span>
    <div class="content__right-links d-flex   py-1">
        <img src="./assets/icons/telegr.svg" class="img-fluid" alt="slide" />
        <img src="./assets/icons/hh.svg" class="img-fluid" alt="slide" />
        <img src="./assets/icons/X.svg" class="img-fluid" alt="slide" />
    </div>
</div>
<aside>
    <nav>
        <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item accord-nav-item mb-4">
                <h2 class="accordion-header accord-nav-title" id="flush-headingOne">
                    <button class="accordion-button collapsed accord-nav-button" type="button"
                        data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                        aria-expanded="false" aria-controls="flush-collapseOne">
                        Navigation 
                    </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body accord-nav-body ">
                  <ul class="accord-nav-ul">
                    <li class="accord-nav-item">
                        <img src="./assets/icons/myProfile.svg" class="img-fluid" alt="slide" />
                        <span>My profile</span>
                    </li>
                    <li class="accord-nav-item">
                        <img src="./assets/icons/balance.svg" class="img-fluid" alt="slide" />
                        <span>Balance</span>
                    </li>
                    <li class="accord-nav-item">
                        <img src="./assets/icons/connect.svg"class="img-fluid" alt="connect" />
                        <span>Connections</span>
                    </li>
                    <li class="accord-nav-item">
                        <img src="./assets/icons/friends.svg" class="img-fluid" alt="friends" />
                        <span>Friends</span>
                    </li>
                    <li class="accord-nav-item">
                        <img src="./assets/icons/events.svg" class="img-fluid" alt="slide" />
                        <span>Events</span>
                    </li>
                    <li class="accord-nav-item">
                        <img src="./assets/icons/settings.svg" class="img-fluid" alt="slide" />
                        <span>Account settings</span>
                    </li>
                </ul>
                    </div>
                </div>
            </div>
            <div class="accordion-item accord-nav-item">
                <h2 class="accordion-header accord-nav-title" id="flush-headingTwo" >
                    <button class="accordion-button collapsed accord-nav-button" type="button"
                        data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                        aria-expanded="false" aria-controls="flush-collapseTwo">
                        Share your thoughts
                    </button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body accord-nav-body d-flef flex-column">
                       <form >
                         <label for="accord-nav-text" class="d-flex flex-column ">
                            <textarea name="accord-nav-text" id="accord-nav-text" class="mb-2 mt-1 accord-nav-txtArea" placeholder="Enter your message..."></textarea>
                            <button type="submit" class="btn btn-primary">Save</button>
                         </label>
                       </form>
                </div>
            </div>
            </div>
        </div>
    </nav>
</aside>
</div>
`
