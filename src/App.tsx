import "./styles/App.scss";
import {faqData} from "./data.ts";

function App() {
  return (
    <>
      <main>
        <section className="faq-card">
          <h1>FAQs</h1>
          {faqData.map((item, index) => (
            <div className="faq-item" key={index}>
              <input
                type="radio"
                id={`faq${index}`}
                name="faq"
                defaultChecked={item.isSelected}
              />
              <label htmlFor={`faq${index}`}>
                {item.question}
              </label>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </section>
      </main>

      <footer>
        <p>&copy; 2024 FAQ Accordion Card. All rights reserved.</p>
        <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://www.frontendmentor.io/profile/AIY7788">Alex</a>.
        </div>
      </footer>
    </>
  );
}

export default App;
