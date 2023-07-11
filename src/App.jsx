import Header from "./component/Header";
import Content from "./component/Content";
import Footer from "./component/Footer";

function App() {
  const title = "Creating a Simple React Application";
  const quote = "Where there is a will, there is a way.";
  return (
    <div>
      <Header title={title} />
      <Content />
      <Footer quote={quote} />
    </div>
  );
}

export default App;
