import React from 'react'

const Introduction = () => {
  return (
    <>
      <div class="container my-5">
        {/* <!-- Main Title --> */}
        <h1 class="text-center mb-4">Tenses</h1>

        {/* <!-- Present Tense Section --> */}
        <div class="card mb-4">
          <div class="card-header bg-primary text-white">
            1. Present Tense
          </div>
          <div class="card-body">
            <p>The present tense describes actions happening now, routines, or general truths. It has four main forms:</p>
            <ul class="list-group">
              <li class="list-group-item">
                <strong>a. Simple Present Tense:</strong> For habits, general truths, and scheduled events.<br/>
                  <em>Example:</em> "She walks to school every day."
              </li>
              <li class="list-group-item">
                <strong>b. Present Continuous Tense:</strong> For ongoing actions happening now or temporary actions.<br/>
                  <em>Example:</em> "I am reading a book."
              </li>
              <li class="list-group-item">
                <strong>c. Present Perfect Tense:</strong> For actions completed at some point in the past with relevance to the present.<br/>
                  <em>Example:</em> "He has finished his homework."
              </li>
              <li class="list-group-item">
                <strong>d. Present Perfect Continuous Tense:</strong> For actions that started in the past and continue up to the present.<br/>
                  <em>Example:</em> "They have been playing for two hours."
              </li>
            </ul>
          </div>
        </div>

        {/* <!-- Past Tense Section --> */}
        <div class="card mb-4">
          <div class="card-header bg-success text-white">
            2. Past Tense
          </div>
          <div class="card-body">
            <p>The past tense refers to actions or situations that happened in the past. It also has four forms:</p>
            <ul class="list-group">
              <li class="list-group-item">
                <strong>a. Simple Past Tense:</strong> For completed actions in the past.<br/>
                  <em>Example:</em> "She visited her grandmother yesterday."
              </li>
              <li class="list-group-item">
                <strong>b. Past Continuous Tense:</strong> For actions that were ongoing at a specific time in the past.<br/>
                  <em>Example:</em> "I was watching a movie when he called."
              </li>
              <li class="list-group-item">
                <strong>c. Past Perfect Tense:</strong> For actions that were completed before another past action.<br/>
                  <em>Example:</em> "They had left by the time we arrived."
              </li>
              <li class="list-group-item">
                <strong>d. Past Perfect Continuous Tense:</strong> For actions that started and continued for some time before a certain point in the past.<br/>
                  <em>Example:</em> "She had been working at the company for five years before moving."
              </li>
            </ul>
          </div>
        </div>

        {/* <!-- Future Tense Section --> */}
        <div class="card mb-4">
          <div class="card-header bg-info text-white">
            3. Future Tense
          </div>
          <div class="card-body">
            <p>Future tense describes actions that are expected to happen in the future. The four forms include:</p>
            <ul class="list-group">
              <li class="list-group-item">
                <strong>a. Future Simple:</strong> For actions that will happen in the future.<br/>
                  <em>Example:</em> "I will call you tomorrow."
              </li>
              <li class="list-group-item">
                <strong>b. Future Continuous:</strong> For ongoing actions that will be happening at a certain time in the future.<br/>
                  <em>Example:</em> "They will be waiting for us at the station."
              </li>
              <li class="list-group-item">
                <strong>c. Future Perfect:</strong> For actions that will be completed by a specific future time.<br/>
                  <em>Example:</em> "He will have finished his project by next week."
              </li>
              <li class="list-group-item">
                <strong>d. Future Perfect Continuous:</strong> For actions that will continue up to a point in the future.<br/>
                  <em>Example:</em> "By 5 PM, I will have been working for eight hours."
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Introduction;