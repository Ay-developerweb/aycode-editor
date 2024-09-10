import logo from "./logo.jpg";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Editor from "./components/Editor.js";

function App() {
    return (
        <>
            <div className="App">
                <header className="App-header">
                    <div id="cover">
                        <center>
                            <img src={logo} alt="aycode_logo" />
                            <h2>
                                AYCODE <span>Editor</span>
                            </h2>
                        </center>
                    </div>
                </header>
                {setTimeout(function () {
                    const duration = document.getElementById("cover");
                    duration.style.display = "none";
                }, 4000)}
                {<Navbar />}
                {<Editor />}
                {<Footer />}{" "}
            </div>
        </>
    );
}

export default App;
