<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="Discover a skilled Junior IT professional experienced in
         computer and network systems installation, configuration, and management, as well as video registration systems.
         Have skills to manage Active Directory systems and currently working at ENGROUP LLC."
    />
    <title>Muzaffar Mustafayev - IT Technician Resume</title>
    <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png" />
    <link rel="stylesheet" href="css/style.css" />
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
      rel="stylesheet"
    />
  </head>

  <body>
    <header>
      <!-- image in background -->
      <!-- my name, and main work -->
      <img src="img/html5_logo.png" alt="hmtl5" id="html_img" />
      <img src="img/mikrotik_logo.png" alt="mikrotik" />
      <img src="img/unifi-app-logo.png" alt="unifi" />
      <img src="img/Wordpress_Blue_logo.png" alt="wordpress" />
      <div id="subject">
        <p id="first_name">Muzaffar Mustafayev</p>
      </div>
    </header>
    <main>
      <aside>
        <!-- includes my photo -->
        <!-- details and contact app of php -->
        <section id="profile_image" class="aside_sections">
          <img src="img/me_5.jpg" id="muzo_img" alt="Muzaffar Mustafayev" />
        </section>
        <section id="personal" class="aside_sections">
          <table>
            <caption>
              Personal
            </caption>
            <tr>
              <td class="bold_table">Name</td>
              <td>Muzaffar Mustafayev Elchin</td>
            </tr>
            <tr>
              <td class="bold_table">Profile</td>
              <td id="profile_description">
                Junior IT professional with skills in computer and network
                systems installation, configuration and management, and video
                registration systems. Proficient in Teltonika GPS systems and
                currently working at ENGROUP LLC. Also, have experience in
                technical support and marketing tools deployment
              </td>
            </tr>
            <tr>
              <td class="bold_table">Languages</td>
              <td>Azerbaijani, Russian, English, French</td>
            </tr>
            <tr>
              <td class="bold_table">Bachelor education</td>
              <td>
                <a
                  href="http://ufaz.az"
                  target="_blank"
                  rel="noopener noreferrer"
                  >French-Azerbaijani University</a
                >
              </td>
            </tr>
            <tr>
              <td class="bold_table">Additional education</td>
              <td>
                <a
                  href="http://iatc.edu.az"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Israel Azerbaijani Training Center</a
                >
              </td>
            </tr>
            <tr>
              <td class="bold_table">Official CV</td>
              <td>
                  <a
                    href="pdf/muzo.pdf"
                    download="Muzaffar Mustafayev's Resume.pdf"
                    target="_blank"
                    >Download</a
                  >
              </td>
            </tr>
          </table>
        </section>
        <section id="contact" class="aside_sections">
          <table>
            <caption>
              Contact
            </caption>
            <tr>
              <td class="bold_table">Mobile</td>
              <td>
                <a href="tel:+994709966399">+994709966399</a>
              </td>
            </tr>
            <tr>
              <td class="bold_table">Mail</td>
              <td>
                <a href="mailto:muzaffar.mustafayev@ufaz.az"
                  >muzaffar.mustafayev@ufaz.az</a
                >
              </td>
            </tr>
            <tr>
              <td class="bold_table">Address</td>
              <td>
                <address>
                  <a
                    href="https://www.google.com/maps/place/Baku,+Azerbaijan/@40.3947695,49.7148741,11z/data=!3m1!4b1!4m5!3m4!1s0x40307d6bd6211cf9:0x343f6b5e7ae56c6b!8m2!3d40.4092617!4d49.8670924"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Baku, Azerbaijan</a
                  >
                </address>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button id="unwrap_button" onclick="init()">
                  Send me a message
                </button>
              </td>
            </tr>
          </table>
          <div id="form-div">
            <?php
                        if (isset($_POST["email"])) { require "php/contact_form.php"; }
                        ?>
            <form id="myForm" method="post">
              <div>
                <p>
                  <label for="inputName">Name:</label>
                  <input
                    type="text"
                    id="inputName"
                    name="name"
                    placeholder="Your name"
                  />
                </p>
              </div>
              <div>
                <p>
                  <label for="surname">Surname:</label>
                  <input
                    type="text"
                    id="surname"
                    name="surname"
                    placeholder="Your surname"
                  />
                </p>
              </div>
              <div>
                <p>
                  <label for="email">Email:</label>
                  <input type="email" id="email" name="email" required placeholder="Your email address" />
                </p>
              </div>
              <div>
                <label for="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                ></textarea>
              </div>
              <div id="form_buttons">
                <input type="submit" value="Send" />
                <button id="wrap_button" type="button" onclick="init()">
                  Hide
                </button>
              </div>
            </form>
          </div>
        </section>
        <section id="references" class="aside_sections">
          <table>
            <caption>
              References
            </caption>
            <tr>
              <td>
                Omar Balayev, Head of IT Department, <br />
                Agrarco LLC
              </td>
            </tr>
            <tr>
              <td>
                <a href="tel:+994518999509">+994518999509</a>
              </td>
            </tr>
            <tr>
              <td>Anar Aliyev, Director, ENGROUP LLC</td>
            </tr>
            <tr>
              <td>
                <a href="tel:+994503929992">+994503929992</a>
              </td>
            </tr>
            <tr>
              <td>Samir Hamzayev, HR specialist, RAM Holding</td>
            </tr>
            <tr>
              <td>
                <a href="tel:+994506259044">+994506259044</a>
              </td>
            </tr>
          </table>
        </section>
        <section id="links" class="aside_sections">
          <table>
            <caption>
              Links
            </caption>
            <tr>
              <td>
                <a
                  href="https://www.instagram.com/muzaffar_mustafayev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Instagram</a
                >
              </td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://www.facebook.com/profile.php?id=100025387429029"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Facebook</a
                >
              </td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://www.linkedin.com/in/muzaffar-mustafayev-180a4122b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >LinkedIn</a
                >
              </td>
            </tr>
          </table>
        </section>
      </aside>
      <section id="jobs">
        <h1>Work Experience</h1>
      </section>
      <div id="certificates" class="under_main"></div>
    </main>
    <footer>
      <!-- dont know what to write here right now  -->
    </footer>
    <!-- JS -->
    <script src="js/dynamic-jobs-list.js"></script>
    <script src="js/dynamic-certificates-list.js"></script>
    <!-- <script src="js/shuffle_profile_picture.js"></script> -->
    <script src="js/wrapper.js"></script>
  </body>
</html>
