import { useState } from "react";
import "./faq.css";

const faqData = [
  {
    question: "What is the minimum order quantity?",
    answer: "It depends on the product. Most items start at. Tell us what you need, and we will suggest the closest option."
  },
  {
    question: "Can I get a sample before placing a large order?",
    answer: "Yes, samples are available for most products at a nominal cost, adjustable against your final order. "
  },
  {
    question: "How long does production take?",
    answer: "Typically as for requirement after mockup approval, depending on product and quantity. Share your deadline and we will confirm if it is feasible."
  },
  {
    question: "Can you deliver to multiple addresses?",
    answer: "Yes. We can send gifts to your office or directly to individual recipients across [Delhi NCR / India]."
  },
  {
    question: "What file format do you need for my logo?",
    answer: "A vector file (AI, EPS, PDF, SVG) is best. A high-resolution PNG also works. If you only have a low-quality image, our design team can help recreate it."
  },
  {
    question: "How does payment work?",
    answer: "We take 50% in advance to begin production, and the balance before dispatch."
  },
  {
    question: "Can you design the gift kit for me?",
    answer: "Yes. Share your budget, headcount and occasion, and we will propose a kit with a mockup."
  }
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <h2>Frequently Asked Questions</h2>
          <p>Got questions about bulk orders, custom branding, or delivery? Find your answers here.</p>
        </div>

        <div className="faq-accordion">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
            >
              <button 
                type="button" 
                className="faq-question" 
                onClick={() => toggleAccordion(index)}
              >
                <span>{item.question}</span>
                <span className="faq-icon">{activeIndex === index ? "−" : "+"}</span>
              </button>
              
              <div className="faq-answer-wrapper" style={{ maxHeight: activeIndex === index ? "200px" : "0px" }}>
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;