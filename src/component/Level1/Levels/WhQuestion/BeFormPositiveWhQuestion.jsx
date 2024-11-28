import React, { useState } from 'react'

const BeFormPositiveWhQuestion = () => {

  const [activeIndex, setActiveIndex] = useState(null);

  const whWords = [
    {
      id: 1,
      title: "Who",
      description: "Asks about a person or people.",
      examples: ["Who is your teacher?", "Who are they waiting for?"],
    },
    {
      id: 2,
      title: "What",
      description: "Asks about an object, event, or situation.",
      examples: ["What is your favorite color?", "What was the outcome of the meeting?"],
    },
    {
      id: 3,
      title: "Where",
      description: "Asks about location.",
      examples: ["Where is the nearest hospital?", "Where were you last night?"],
    },
    {
      id: 4,
      title: "When",
      description: "Asks about time.",
      examples: ["When is the concert?", "When was the book published?"],
    },
    {
      id: 5,
      title: "Why",
      description: "Asks about reasons or causes.",
      examples: ["Why are you upset?", "Why was he late for work?"],
    },
    {
      id: 6,
      title: "How",
      description: "Asks about the manner or condition of something.",
      examples: ["How is the weather today?", "How was your vacation?"],
    },
  ];

  const toggleDropdown = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>

      <div className="container my-5">
        <h1 className="text-center mb-4">WH Questions with Be-Form</h1>

        {/* <!-- Introduction Section --> */}
        <div className="mb-4">
          <h2 className="text-primary">Introduction</h2>
          <p>In English grammar, WH questions are essential for asking specific information. When forming WH questions with the be-form, we combine WH words (such as who, what, where, when, why, how) with different forms of the verb be (am, is, are, was, were). These questions are used to inquire about various aspects of subjects, actions, or states.</p>
        </div>

        {/* <!-- Structure Section --> */}
        <div className="mb-4">
          <h2 className="text-primary">Structure of WH Questions with Be-Form</h2>
          <p>The structure of WH questions with the verb be typically follows this order:</p>
          <p className="fw-bold">WH Word + Be (am, is, are, was, were) + Subject?</p>
          <ul>
            <li>Who is she?</li>
            <li>Where are they going?</li>
            <li>What was the problem?</li>
          </ul>
          <p>The verb <strong>be</strong> is the key here and changes depending on the subject and the tense of the sentence. In the present tense, we use <em>am</em>, <em>is</em>, or <em>are</em>, and in the past tense, we use <em>was</em> or <em>were</em>.</p>
        </div>

        {/* <!-- Common WH Words Section --> */}
        <div className="mb-4">
          <h2 className="text-primary">Common WH Words Used with Be-form</h2>
          <div className="accordion" id="whWordsAccordion">
            {whWords.map((item, index) => (
              <div key={item.id} className="accordion-item">
                <h2 className="accordion-header" id={`heading${index}`}>
                  <button
                    className={`accordion-button ${activeIndex === index ? '' : 'collapsed'}`}
                    type="button"
                    onClick={() => toggleDropdown(index)}
                    aria-expanded={activeIndex === index ? "true" : "false"}
                    aria-controls={`collapse${index}`}
                  >
                    {item.title}
                  </button>
                </h2>
                <div
                  id={`collapse${index}`}
                  className={`accordion-collapse collapse ${activeIndex === index ? 'show' : ''}`}
                  aria-labelledby={`heading${index}`}
                  data-bs-parent="#whWordsAccordion"
                >
                  <div className="accordion-body">
                    <p>{item.description}</p>
                    <ul>
                      {item.examples.map((example, i) => (
                        <li key={i}>{example}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>



        {/* <!-- Examples Section --> */}
        <div className="mb-4">
          <h2 className="text-primary">Examples of WH Questions with Be-Form</h2>
          <ul>
            <li className='my-2'>Who is your favorite author? 
              <br/><em>Answer: My favorite author is J.K. Rowling.</em></li>
            <li className='my-2'>Where are you from? <br/><em>Answer: I am from New York.</em></li>
            <li className='my-2'>What was the news about? <br/><em>Answer: The news was about a recent discovery in science.</em></li>
            <li className='my-2'>Why were you absent yesterday? <br/><em>Answer: I was absent because I was feeling sick.</em></li>
            <li className='my-2'>How is your new job going? <br/><em>Answer: It's going great! I love my new role.</em></li>
            <li className='my-2'>When was the last time you traveled abroad? <br/><em>Answer: I traveled abroad last summer.</em></li>
          </ul>
        </div>

        {/* <!-- Usage Section --> */}
        <div className="mb-4">
          <h2 className="text-primary">Usage of WH Questions with Be-Form in Different Contexts</h2>
          <div>
            <h3>In School/College:</h3>
            <ul>
              <li>Who is your math teacher?</li>
              <li>What are you studying this semester?</li>
              <li>Where is the library?</li>
            </ul>
          </div>
          <div>
            <h3>In Professional/Work Settings:</h3>
            <ul>
              <li>What is the deadline for this project?</li>
              <li>Who are the clients for this product?</li>
              <li>When is the meeting scheduled?</li>
            </ul>
          </div>
          <div>
            <h3>In Everyday Life:</h3>
            <ul>
              <li>Where is my phone?</li>
              <li>How is your family doing?</li>
              <li>Why are you so happy today?</li>
            </ul>
          </div>
        </div>
      </div>

    </>
  )
}

export default BeFormPositiveWhQuestion
