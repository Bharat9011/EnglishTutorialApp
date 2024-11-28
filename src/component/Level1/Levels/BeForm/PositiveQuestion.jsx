import React from 'react'

const PositiveQuestion = () => {
  return (
    <>
      <div class="container mt-5">
        <h2 class="text-center mb-4 fw-bold">Positive Questions - Be-form</h2>

        {/* Present Tense Section */}
        <div class="card shadow-sm mb-4">
          <div class="card-body">
            <h3 class="card-title text-primary fw-bold">Present Tense Be-form Questions</h3>
            <p class="card-text text-muted">In the present tense, <strong>am</strong>, <strong>is</strong>, and <strong>are</strong> are used.</p>
            <h5 class="fw-semibold">Rules:</h5>
            <ul class="list-group list-group-flush mb-3">
              <li class="list-group-item">• Use <strong>Am</strong> for the subject <strong>'I'</strong>.</li>
              <li class="list-group-item">• Use <strong>Is</strong> for singular subjects like <strong>'he'</strong>, <strong>'she'</strong>, or <strong>'it'</strong>.</li>
              <li class="list-group-item">• Use <strong>Are</strong> for plural subjects like <strong>'we'</strong>, <strong>'they'</strong>, or <strong>'you'</strong>.</li>
            </ul>
            <h5 class="fw-semibold">Examples:</h5>
            <ul class="list-group">
              <li class="list-group-item">• Am I late?</li>
              <li class="list-group-item">• Is she your friend?</li>
              <li class="list-group-item">• Are they in the classroom?</li>
              <li class="list-group-item">• Are you ready?</li>
            </ul>
          </div>
        </div>

        {/* Past Tense Section  */}
        <div class="card shadow-sm mb-4">
          <div class="card-body">
            <h3 class="card-title text-primary fw-bold">Past Tense Be-form Questions</h3>
            <p class="card-text text-muted">In the past tense, <strong>was</strong> and <strong>were</strong> are used.</p>
            <h5 class="fw-semibold">Rules:</h5>
            <ul class="list-group list-group-flush mb-3">
              <li class="list-group-item">• Use <strong>Was</strong> for singular subjects like <strong>'I'</strong>, <strong>'he'</strong>, <strong>'she'</strong>, or <strong>'it'</strong>.</li>
              <li class="list-group-item">• Use <strong>Were</strong> for plural subjects like <strong>'we'</strong>, <strong>'they'</strong>, or <strong>'you'</strong>.</li>
            </ul>
            <h5 class="fw-semibold">Examples:</h5>
            <ul class="list-group">
              <li class="list-group-item">• Was I on the list?</li>
              <li class="list-group-item">• Were they happy with the results?</li>
            </ul>
          </div>
        </div>

        {/* Future Tense Section */}
        <div class="card shadow-sm mb-4">
          <div class="card-body">
            <h3 class="card-title text-primary fw-bold">Future Tense Be-form Questions</h3>
            <p class="card-text text-muted">In the future tense, <strong>will be</strong> is used to ask about future events or conditions.</p>
            <h5 class="fw-semibold">Rules:</h5>
            <ul class="list-group list-group-flush mb-3">
              <li class="list-group-item">• Use <strong>'Will be'</strong> for all subjects.</li>
            </ul>
            <h5 class="fw-semibold">Examples:</h5>
            <ul class="list-group">
              <li class="list-group-item">• Will I be there on time?</li>
              <li class="list-group-item">• Will they be here tomorrow?</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default PositiveQuestion