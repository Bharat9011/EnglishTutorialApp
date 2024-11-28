import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Introducation = () => {
  return (
    <div className="container my-5">
      {/* Title */}
      <div className="text-center">
        <h1 className="display-4 fw-bold mb-4">Welcome to Spoken English</h1>
        <p className="lead text-secondary">
          Our app is designed to help you master English grammar step by step. We have divided the content into different levels to make learning easy and fun. Each level builds on the previous one, helping you improve gradually.
        </p>
      </div>

      {/* Level 1 */}
      <div className="my-4">
        <h2 className="text-primary">Level 1: Basics</h2>
        <ul className="list-group list-group-flush">
          <li className="list-group-item my-1 rounded-2">Be-form: Learn how to use verbs like 'is,' 'am,' 'are,' and more.</li>
          <li className="list-group-item my-1 rounded-2">WH Questions: Understand how to ask questions using words like 'who,' 'what,' 'where,' etc.</li>
          <li className="list-group-item my-1 rounded-2">Tenses: Get comfortable with different tenses like present, past, and future.</li>
        </ul>
      </div>

      {/* Level 2 */}
      <div className="my-4">
        <h2 className="text-primary">Level 2: Intermediate</h2>
        <ul className="list-group list-group-flush">
          <li className="list-group-item my-1 rounded-2">Modal Verbs: Learn to express abilities, permissions, and obligations using words like 'can,' 'must,' 'should,' etc.</li>
          <li className="list-group-item my-1 rounded-2">Sentence Structure: Understand how to arrange words correctly to form sentences.</li>
        </ul>
      </div>

      {/* Level 3 */}
      <div className="my-4">
        <h2 className="text-primary">Level 3: Advanced</h2>
        <ul className="list-group list-group-flush">
          <li className="list-group-item my-1 rounded-2">Active and Passive Voice: Learn how to change sentences from active to passive and vice versa.</li>
          <li className="list-group-item my-1 rounded-2">Reported Speech: Understand how to report what someone else said.</li>
          <li className="list-group-item my-1 rounded-2">Conditionals: Dive into 'if' statements to express possibilities, conditions, and outcomes.</li>
          <li className="list-group-item my-1 rounded-2">Clauses: Explore different types of clauses, like dependent and independent clauses.</li>
        </ul>
      </div>

      {/* Grammar Section */}
      <div className="my-4">
        <h2 className="text-primary">Grammar Section</h2>
        <ul className="list-group list-group-flush">
          <li className="list-group-item my-1 rounded-2">Articles: Learn how and when to use 'a,' 'an,' and 'the.'</li>
          <li className="list-group-item my-1 rounded-2">Prepositions: Master the use of words like 'in,' 'on,' 'at,' and others to show relationships in space and time.</li>
          <li className="list-group-item my-1 rounded-2">Adjectives and Adverbs: Discover how to describe nouns and actions more effectively.</li>
          <li className="list-group-item my-1 rounded-2">Conjunctions: Understand how to link words, phrases, and clauses using words like 'and,' 'but,' 'because,' etc.</li>
          <li className="list-group-item my-1 rounded-2">
            Direct and Indirect Speech: In direct speech, the exact words of the speaker are quoted and enclosed in quotation marks. The reporting verb (e.g., said, asked, exclaimed) introduces the quoted speech.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Introducation;