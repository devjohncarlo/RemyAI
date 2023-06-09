

<!doctype html>
<html class="no-js" lang="en">
<link rel="stylesheet" media="screen" href="assets/css/style.css">
<?php include("head.php"); ?>
<head>
<style>


</style>
</head>
<body onload="return ran_col()">

    <div id="preloader">
        <div class="loader"></div>
    </div>
    <!-- preloader area end -->
    <!-- login area start -->
    <div id="particles-js"></div>
        <script type="text/javascript">
            function ran_col() { //function name
                var color = '#'; // hexadecimal starting symbol
                var letters = ['224C8A']; //Set your colors here //'7E9FF0'
                color += letters[Math.floor(Math.random() * letters.length)];
                document.getElementById('particles-js').style.background = color; // Setting the random color on your div element.
            }
        </script>
    <div class="container" id="container">
        <!-- Navbar -->
        <div class="nav-container">
            <a class="logo" href="#">REMY AI</a>
            <div class="dropdown">
                <a class="user-dropdown" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    John Doe
                </a>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#"> <img src="images/sub.png" alt="" height="18" width="18"> Subscription</a>
                    <a class="dropdown-item" href="#"> <img src="images/support.png" alt="" height="18" width="18"> Support</a>
                    <a class="dropdown-item" href="#"> <img src="images/logout.png" alt="" height="20" width="20"> Logout</a>
                </div>
            </div>
        </div>
        <div class="nav-mobile">
            <span>John Doe</span>
            <div class="dropdown">
                <a class="user-dropdown" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src="images/menu.png" alt="menu-icon">
                </a>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#"> <img src="images/sub.png" alt="" height="18" width="18"> Subscription</a>
                        <a class="dropdown-item" href="#"> <img src="images/support.png" alt="" height="18" width="18"> Support</a>
                        <a class="dropdown-item" href="#"> <img src="images/logout.png" alt="" height="20" width="20"> Logout</a>
                </div>
            </div>
        </div>

        <div class="prompt-container">
            <div class="greetings" id="greetings" >
                <h1>Good Morning, John Doe. How may I assist you today?</h1>
            </div>
            <div class="form-container d-flex mb-3">
                <div class="input-group" id="user-input-container" >
                    <input type="text" id="user-input" class="form-control" maxlength="90" placeholder="Pull up property overview of 123 Main" required aria-label="Recipient's username" aria-describedby="basic-addon2">
                    <div class="input-group-append">
                        <button onclick="readPrompt()" id="submit" disabled class="btn btn-outline-secondary" type="button"><img src="images/sent.png" alt="" height="22" width="22"></button>
                    </div>
                </div>
            </div>
            <div class="prompt-sub" id="prompt-sub">
                <div class="prev-container" id="prev" >
                        <span class="prev-text" href="">See Previous Messages</span>
                        <img class="prev-img" src="images/arrow-up.png" alt="" height="15" width="15">
                </div>
                <div id="prompt-msg">
                </div>
                <div class="next-container" id="latest" >
                        <span class="next-text" href="">See Latest Messages</span>
                        <img class="next-img" src="images/arrow-down.png" alt="" height="15" width="15">
                </div>
            </div>
           
          
            <div class="footer-mobile">
                <span>© Remy AI | 2023</span> 
            </div>
        </div>
        
    </div>
    <div class="footer">
        <span>© Remy AI | 2023</span> 
    </div>
    <!-- <div class="login-area login-bg">
     
        <div  class="container">
            <div class="login-box ptb--100">
                <form method="post" action="#">

                    <div class="login-form-head">
                       <h4>WELCOME</h4>
                        <p>Hello there! Please enter your credentials to manage your dashboard</p>
                    </div>
                    <div class="login-form-body">
                        <div class="form-gp">
                            <label for="exampleInputEmail1">Username</label>
                            <input type="text" name="username" id="username" required="">
                            <i class="ti-email"></i>
                        </div>
                        <div class="form-gp">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" name="password" id="password" required="">
                            <i class="ti-lock"></i>
                        </div>

                        <div class="submit-btn-area">
                            <button  value="Login"  id="submitButton" name="login" type="submit">Proceed <i class="ti-arrow-right"></i></button>
                        </div>

                    </div>
                </form>
            </div>
        </div>

    </div> -->
        
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/TextPlugin.min.js"></script>
<script src="assets/js/particles.js"></script>
<script src="assets/js/app.js"></script>

<!-- 
<script src="js/lib/stats.js"></script>
stats.js -->

<!-- jquery latest version -->
<script src="assets/js/vendor/jquery-2.2.4.min.js"></script>
<!-- bootstrap 4 js -->
<script src="assets/js/popper.min.js"></script>
<script src="assets/js/bootstrap.min.js"></script>
<script src="assets/js/owl.carousel.min.js"></script>
<script src="assets/js/metisMenu.min.js"></script>
<script src="assets/js/jquery.slimscroll.min.js"></script>
<script src="assets/js/jquery.slicknav.min.js"></script>
<!-- others plugins -->
<script src="assets/js/plugins.js"></script>
<script src="assets/js/scripts.js"></script>
<script src="assets/js/animation.js"></script>
<!-- page container area end -->

</body>
</html>
