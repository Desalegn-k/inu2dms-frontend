import React from 'react'
import "./css/Home.css"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
 
export default function Home() {
  const navigate=useNavigate();
  return (
    <div>
      <main class="main-container">
        <section class="banner">
          <div class="pyramid-loader">
            <div class="wrapper">
              <span class="side side4">WELCOME!</span>
              <span class="shadow"></span>
            </div>
          </div>
          <h1 class=" banner-comon Welcome-text">
            Welcome to Injibara University
          </h1>
          {/* <h3 class=" banner-comon promotin">
            Your gateway to seamless dormitory living and management.
          </h3> */}

          <div class="number-of-blocks">
            <div class="block">
              <h2>7000+</h2>
              <p>Students Accommodated</p>
            </div>
            <div class="block">
              <h2>20+</h2>
              <p>Dormitory Buildings</p>
            </div>
            <div class="block">
              <h2>50+</h2>
              <p>Staff Members</p>
            </div>
          </div>
          <div class="banner-sign-up-in">
            <p class="sign-up-on-banner">
              <a href="/pages/signup.html">Get Started</a>
            </p>

            <p class="sign-up-on-banner private">
              <button onClick={() => navigate("/login")}>Sign In</button>
            </p>
          </div>
        </section>
        <hr />

        <section class="home-page-welcom-all">
          <h1 class="welcome-message-title">
            Welcome to injibara university <br /> Dormitory management
            system(INU DMS)
          </h1>
          <div
            style={{
              textAlign: "left",
              width: "95%",
              margin: "0 auto",
              border: "solid",
              borderWidth: 4,
              borderColor: "aqua",
              padding: "18px",
              borderRadius: 20,
              background: "#174381",
              color: "white",
            }}
          >
            <h1 style={{ color: "#f59e0b" }}>
              Important Information for Students to Log In to Your Account
            </h1>

            <h3>
              <p>
                Inorder to login your account for the first time, please use the
                following login credential format, later you can change your
                password.{" "}
              </p>
              <br></br>
              <span>
                Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
              </span>
              <span style={{ color: "greenyellow" }}>Yourfirstname</span>
              <span style={{ color: "orangered" }}>inu</span>
              <span style={{ color: "orange" }}>
                yourgarndfathername@gmail.com
              </span>
              <br></br>
              Password &nbsp;&nbsp;:
              <span style={{ color: "greenyellow" }}>Inu</span>
              <span style={{ color: "orangered" }}>yourId</span>
              <span style={{ color: "orange" }}>1234@</span>
              <br></br>
              <br></br>
              <table className="stulist-table" border="solid">
                <caption style={{ color: "dodgerblue", fontSize: 40 }}>
                  Sample Data
                </caption>
                <tr style={{ background: "black" }}>
                  <th>First Name</th>
                  <th>Middle Name</th>
                  <th>Last Name</th>
                  <th>studentId</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Remark</th>
                </tr>
                <tbody>
                  <tr>
                    <td>Abebe</td>
                    <td>Alemu</td>
                    <td>Kebede</td>
                    <td>inuxxxxxxx</td>
                    <td>abebeinukebede@gmail.com</td>
                    <td>Inuxxxxxxx1234@</td>
                    <td rowSpan="3" style={{color:"orangered"}}>The first ' I ' letter must be uppercase in your password</td>
                  </tr>
                  <tr>
                    <td>Almaz</td>
                    <td>Kebede</td>
                    <td>Abebe</td>
                    <td>inuyyyyyyy</td>
                    <td>almazinuabebe@gmail.com</td>
                    <td>Inuyyyyyyy1234@</td>
                  </tr>

                  <tr>
                    <td>Desalegn</td>
                    <td>Kerie</td>
                    <td>Abebe</td>
                    <td>inuzzzzzzz</td>
                    <td>desalegninuabebe@gmail.com</td>
                    <td>Inuzzzzzzz1234@</td>
                  </tr>
                </tbody>
              </table>
            </h3>
          </div>
          <hr class="title-line" />
          <section class="home-page-welcom">
            <div class="welcome-message-left">
              <p class="class w-message">
                Welcome to the Injibara University Dormitory Management System
                (INU DMS). This platform is designed to provide students and
                staff with easy access to all dormitory-related information.
                Whether you are a new student looking for accommodation or a
                returning student managing your room, INU DMS simplifies your
                dormitory experience.
              </p>
              <p class="class w-message">
                INU DMS allows you to explore dormitory facilities such as
                rooms, blocks, showers, etc. You can view room availability,
                check block assignments, and learn about the amenities provided
                in each area. The system ensures that all dormitory resources
                are organized and accessible for everyone. ,
              </p>
              <p class="class w-message">
                Stay updated with announcements, dormitory policies, and
                important events through our platform. INU DMS also provides
                guidance and support for students regarding dormitory rules,
                room allocations, and facility usage. Our goal is to create a
                well-managed and comfortable living environment for all
                students.We are committed to improving student life by ensuring
                transparency, accessibility, and efficiency in dormitory
                management. Through continuous updates and digital services, INU
                DMS aims to make dormitory processes easier and more convenient
                for everyone.
              </p>
            </div>

            <div class="welcome-message-right">
              <div class="dean-detail1">
                <div class="dean-image">
                  <img
                    src="../images/Belay-Zeleke-Ph.jpg"
                    alt="Students Dormitory Service Team Leader."
                    class=""
                  />
                </div>
                <div class="dean-detail">
                  <p>Mekuanint Almaw (?)</p>
                  <p>Tel:-xxxxxxxx</p>
                  <p>Email: xxxxxxxxx@gmail.com</p>
                </div>
              </div>

              <div class="dean-detail1">
                <div class="dean-image">
                  {/* <img
                    src="../images/Belay-Zeleke-PhD.jp"
                    alt=" Student`s service dean."
                    class=""
                  /> */}
                </div>
                <div class="dean-detail">
                  <p>Belay Zeleke (PhD)</p>
                  <p>Tel:-0910004169</p>
                  <p>Email: blzeleke@gmail.com</p>
                </div>
              </div>
            </div>
          </section>

          <hr class="title-line" />

          <section class="student-home">
            <div class="image-for-student">
              <img src="../images/students.jpg" alt="" />
            </div>
            <div class="discription-for-student">
              <p>
                As the sun rises over the green hills of Injibara, students
                arrive with hope and excitement, stepping into a new chapter of
                their academic journey. Smiles and warm goodbyes fill the air as
                families bid farewell, trusting that their children are in a
                home away from home.{" "}
              </p>
            </div>
          </section>
          {/* <hr style="margin: 2px auto; border: solid; border-color: orange;border-radius: 20px; width: 50%; "/> */}

          <section class="student-home">
            <div class="discription-for-student">
              <p>
                {" "}
                The dormitory stands not just as a building, but as a community
                — a place of friendship, growth, and shared dreams. Here, every
                student finds comfort, support, and the spirit of belonging that
                makes Injibara University truly special.
              </p>
            </div>
            <div class="image-for-student2">
              <img src="../images/student2.jpg" alt="" />
            </div>
          </section>
          <hr class="title-line" />
        </section>
      </main>
    </div>
  );
}
