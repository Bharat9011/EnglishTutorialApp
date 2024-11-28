import React from 'react'

const NegativeStatment = () => {
  return (
    <>

  <div class="container mt-5">
    <h2 class="text-center">Negative Statements - Be-form</h2>

    {/* Present Tense Section */}
    <div class="mt-4">
      <h3>Present Tense</h3>
      <p class="text-muted">In the present tense, am, is, and are are used to describe what someone or something is not.</p>
      <h5>Rules:</h5>
      <ul>
        <li>Use <strong>am not</strong> with the subject <strong>I</strong>.</li>
        <li>Use <strong>is not</strong> (or the contraction <strong>isn't</strong>) with singular subjects like <strong>he</strong>, <strong>she</strong>, or <strong>it</strong>.</li>
        <li>Use <strong>are not</strong> (or the contraction <strong>aren't</strong>) with plural subjects like <strong>we</strong>, <strong>they</strong>, or <strong>you</strong>.</li>
      </ul>
      <h5>Examples:</h5>
      <ul>
        <li>I am not a student.</li>
        <li>She is not happy.</li>
        <li>They are not friends.</li>
      </ul>
    </div>

    {/* Past Tense Section */}
    <div class="mt-4">
      <h3>Past Tense</h3>
      <p class="text-muted">In the past tense, was not and were not (or wasn't and weren't) are used to describe what someone or something was not in the past.</p>
      <h5>Rules:</h5>
      <ul>
        <li>Use <strong>was not</strong> (or <strong>wasn't</strong>) with singular subjects like <strong>I</strong>, <strong>he</strong>, <strong>she</strong>, or <strong>it</strong>.</li>
        <li>Use <strong>were not</strong> (or <strong>weren't</strong>) with plural subjects like <strong>we</strong>, <strong>they</strong>, or <strong>you</strong>.</li>
      </ul>
      <h5>Examples:</h5>
      <ul>
        <li>I was not at the park yesterday.</li>
        <li>He was not a great teacher.</li>
        <li>We were not excited about the trip.</li>
      </ul>
    </div>

    {/* Future Tense Section  */}
    <div class="mt-4">
      <h3>Future Tense</h3>
      <p class="text-muted">In the future tense, will not be (or won't be) is used to describe something that will not happen in the future.</p>
      <h5>Rules:</h5>
      <ul>
        <li>Use <strong>shall not be</strong> or <strong>will not be</strong> with the subject <strong>I</strong> and <strong>we</strong>.</li>
        <li>Use <strong>will not be</strong> (or <strong>won't be</strong>) with all other subjects.</li>
      </ul>
      <h5>Examples:</h5>
      <ul>
        <li>I will not be there tomorrow.</li>
        <li>She will not be a doctor one day.</li>
        <li>They will not be at the party.</li>
      </ul>
    </div>
  </div>
    </>
  )
}

export default NegativeStatment;