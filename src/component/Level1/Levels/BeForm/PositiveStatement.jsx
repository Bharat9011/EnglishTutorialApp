import React from 'react'

const PositiveStatement = () => {
  return (
    <>
      <div className="container mt-5">
        <h2 className='text-center mb-5'>Positive Statements - Be-form</h2>

        {/* Present Tense */}
        <div className="mt-4">
          <h3>Present Tense Be-form</h3>
          <p className="text-muted">
            Am, is, and are are used to describe the present state of being.
          </p>
          <h5>Rules:</h5>
          <ul>
            <li>Use <strong>am</strong> with the subject <strong>I</strong>.</li>
            <li>Use <strong>is</strong> with singular subjects like <strong>he</strong>, <strong>she</strong>, or <strong>it</strong>.</li>
            <li>Use <strong>are</strong> with plural subjects like <strong>we</strong>, <strong>they</strong>, or <strong>you</strong>.</li>
          </ul>
        </div>

        {/* Past Tense */}
        <div className="mt-4">
          <h3>Past Tense Be-form</h3>
          <p className="text-muted">
            Was and were are used to describe something that happened or existed in the past.
          </p>
          <h5>Rules:</h5>
          <ul>
            <li>Use <strong>was</strong> with singular subjects like <strong>he</strong>, <strong>she</strong>, or <strong>it</strong>.</li>
            <li>Use <strong>were</strong> with plural subjects like <strong>we</strong>, <strong>they</strong>, or <strong>you</strong>.</li>
          </ul>
          <h5>Examples:</h5>
          <ul>
            <li>I was at the park yesterday.</li>
            <li>He was a great teacher.</li>
            <li>We were excited about the trip.</li>
          </ul>
        </div>

        {/* Future Tense */}
        <div className="mt-4">
          <h3>Future Tense Be-form</h3>
          <p className="text-muted">
            Shall be and will be are used to describe future events or states.
          </p>
          <h5>Rules:</h5>
          <ul>
            <li>
              Use <strong>shall be</strong> with <strong>I</strong> and <strong>we</strong> (though <strong>will be</strong> is more commonly used).
            </li>
            <li>Use <strong>will be</strong> with all other subjects.</li>
          </ul>
          <h5>Examples:</h5>
          <ul>
            <li>I will be there tomorrow.</li>
            <li>She will be a doctor one day.</li>
            <li>They will be at the party.</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default PositiveStatement
