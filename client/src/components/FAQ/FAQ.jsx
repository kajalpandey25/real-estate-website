import React, { useState } from "react";
import "./FAQ.css"; // Optional: External CSS for styling

const FAQ = () => {
  // State to track which question is active (collapsed or expanded)
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    // Toggle the clicked question
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    {
      question: "What is the cost of property listings?",
      answer:
        "The cost of property listings varies depending on the type and location. Please refer to each property for more specific details.",
    },
    {
      question: "How can I contact the seller?",
      answer:
        "You can contact the seller through the seller's profile or use the contact form provided on the property details page.",
    },
    {
      question: "Can I schedule a visit to the property?",
      answer:
        "Yes, you can schedule a visit by selecting the 'Schedule Visit' option on the property details page.",
    },
    {
      question: "What documents do I need to buy a property?",
      answer:
        "The required documents include identification proof, property registration papers, and loan approval (if applicable). For a full list, consult our guidelines.",
    },
  ];

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <ul className="faq-list">
        {faqs.map((faq, index) => (
          <li key={index} className="faq-item">
            <div
              className="faq-question"
              onClick={() => toggleQuestion(index)}
            >
              {faq.question}
              <span className="faq-toggle">
                {activeIndex === index ? "▲" : "▼"}
              </span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
