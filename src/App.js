import { useState } from "react";
import Background from "./components/background";
import Header from "./components/header";
import Hero from "./components/hero/Hero";
import Main from "./components/main";
import Footer from "./components/footer";

function App() {
  let [typeOf, setTypeOf] = useState(null);

  const toggleUiType = (type) => {
    setTypeOf(type);
  };

  const toggleTheme = () => {};
  return (
    <Background>
      <Header toggleUiType={toggleUiType} toggleTheme={toggleTheme} />
      <main>
        <Hero toggleUi={typeOf} toggleTheme={toggleTheme} />
        <Main />
      </main>
      <Footer />
    </Background>
  );
}

export default App;
