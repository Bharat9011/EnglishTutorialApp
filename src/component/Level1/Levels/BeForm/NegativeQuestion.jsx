import React from 'react'

const NegativeQuestion = () => {
  return (
    <>
      <div class="container mt-5">
        <h2 class="text-center mb-4 fw-bold">Negative Statements - Be-form</h2>

        {/* Present Tense Section  */}
        <div class="card shadow-sm mb-4">
          <div class="card-body">
            <h3 class="card-title text-primary fw-bold">Present Tense</h3>
            <p class="card-text text-muted">In the present tense, <strong>am</strong>, <strong>is</strong>, and <strong>are</strong> are used to describe what someone or something is not.</p>
            <h5 class="fw-semibold">Rules:</h5>
            <ul class="list-group list-group-flush mb-3">
              <li class="list-group-item">Use <strong>am not</strong> with the subject <strong>I</strong>.</li>
              <li class="list-group-item">Use <strong>is not</strong> (or the contraction <strong>isn't</strong>) with singular subjects like <strong>he</strong>, <strong>she</strong>, or <strong>it</strong>.</li>
              <li class="list-group-item">Use <strong>are not</strong> (or the contraction <strong>aren't</strong>) with plural subjects like <strong>we</strong>, <strong>they</strong>, or <strong>you</strong>.</li>
            </ul>
            <h5 class="fw-semibold">Examples:</h5>
            <ul class="list-group">
              <li class="list-group-item">I am not a student.</li>
              <li class="list-group-item">She is not happy.</li>
              <li class="list-group-item">They are not friends.</li>
            </ul>
          </div>
        </div>

        {/* Past Tense Section  */}
        <div class="card shadow-sm mb-4">
          <div class="card-body">
            <h3 class="card-title text-primary fw-bold">Past Tense</h3>
            <p class="card-text text-muted">In the past tense, <strong>was not</strong> and <strong>were not</strong> (or <strong>wasn't</strong> and <strong>weren't</strong>) are used to describe what someone or something was not in the past.</p>
            <h5 class="fw-semibold">Rules:</h5>
            <ul class="list-group list-group-flush mb-3">
              <li class="list-group-item">Use <strong>was not</strong> (or <strong>wasn't</strong>) with singular subjects like <strong>I</strong>, <strong>he</strong>, <strong>she</strong>, or <strong>it</strong>.</li>
              <li class="list-group-item">Use <strong>were not</strong> (or <strong>weren't</strong>) with plural subjects like <strong>we</strong>, <strong>they</strong>, or <strong>you</strong>.</li>
            </ul>
            <h5 class="fw-semibold">Examples:</h5>
            <ul class="list-group">
              <li class="list-group-item">I was not at the park yesterday.</li>
              <li class="list-group-item">He was not a great teacher.</li>
              <li class="list-group-item">We were not excited about the trip.</li>
            </ul>
          </div>
        </div>

        {/* Future Tense Section  */}
        <div class="card shadow-sm mb-4">
          <div class="card-body">
            <h3 class="card-title text-primary fw-bold">Future Tense</h3>
            <p class="card-text text-muted">In the future tense, <strong>will not be</strong> (or <strong>won't be</strong>) is used to describe something that will not happen in the future.</p>
            <h5 class="fw-semibold">Rules:</h5>
            <ul class="list-group list-group-flush mb-3">
              <li class="list-group-item">Use <strong>shall not be</strong> or <strong>will not be</strong> with the subject <strong>I</strong> and <strong>we</strong>.</li>
              <li class="list-group-item">Use <strong>will not be</strong> (or <strong>won't be</strong>) with all other subjects.</li>
            </ul>
            <h5 class="fw-semibold">Examples:</h5>
            <ul class="list-group">
              <li class="list-group-item">I will not be there tomorrow.</li>
              <li class="list-group-item">She will not be a doctor one day.</li>
              <li class="list-group-item">They will not be at the party.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default NegativeQuestion
