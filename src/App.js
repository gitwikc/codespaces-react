import * as React from "react";
import "./App.css";

const App = () => {
  const [btnText, setBtnText] = React.useState("Submit");
  const [start, setStart] = React.useState(false);
  const [btnPos, setBtnPos] = React.useState(1);
  const [name, setName] = React.useState("");
  const [city, setCity] = React.useState("");
  const prompts = [
    "Kuch likh",
    "Data dal na",
    "Kuch bhi...",
    "Arey... DATA!",
    "Shahnpatti nai...",
    "Hello... data?",
    "Aye! Likh na",
  ];

  const handleMouseHover = (e) => {
    // e.preventDefault();
    setStart(true);
    if (name.length == 0 || city.length == 0) {
      if (btnPos == 0) setBtnPos(1);
      else setBtnPos((x) => -x);
    } else {
      setBtnPos(0);
    }
  };

  React.useEffect(() => {
    if (name.length > 0 && city.length > 0) {
      setBtnPos(0);
    }
  }, [name, city]);

  React.useEffect(() => {
    if (start) {
      document.getElementById("btn_submit").style.transform = `translateX(${
        btnPos * 120
      }px)`;

      setTimeout(() => {
        if (btnPos == 0) setBtnText("Submit");
        else {
          setBtnText(prompts[Math.floor(Math.random() * prompts.length)]);
        }
      }, 200);
    }
  }, [btnPos]);

  return (
    <div className="App">
      <header>
        <img
          className="logo"
          src="https://img.icons8.com/external-bzzricon-filled-lines-bzzricon-studio/512/external-lol-puppy-bzzricon-filled-lines-bzzricon-filled-lines-bzzricon-studio.png"
          alt="dog lol"
        />

        <div className="title">Prenk</div>
      </header>

      <main>
        <div className="card">
          <div className="card_title">Form Bharo</div>
          <div className="card_contents">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (btnPos == 0) {
                  alert(`${city} se ${name}`);
                }
              }}
            >
              <div className="input_field">
                <input
                  type="text"
                  placeholder="Batao batao"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="name">Aapka shubh naam</label>
              </div>
              <div className="input_field">
                <input
                  type="text"
                  placeholder="Batao batao"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
                <label htmlFor="city">Kaha se ho</label>
              </div>
              <div className="btn" id="btn_sub">
                <button
                  onMouseEnter={handleMouseHover}
                  onTouchStart={handleMouseHover}
                  id="btn_submit"
                  type="submit"
                >
                  {btnText}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
