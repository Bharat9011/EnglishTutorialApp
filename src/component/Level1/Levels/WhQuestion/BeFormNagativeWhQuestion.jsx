import React from 'react'

const BeFormNagativeWhQuestion = () => {
  return (
    <>
            <div class="container my-5">
        {/* <!-- Title --> */}
        <h1 class="text-center text-primary mb-4">WH Negative Questions with Be-Form</h1>

        {/* <!-- Introduction Section --> */}
        <section class="mb-5">
          <h2 class="text-secondary">Introduction</h2>
          <p>In English grammar, WH questions with the be-form are commonly used to ask about specific information.</p>
          <p>However, there are times when we want to ask these questions in a negative form, often to clarify information, confirm understanding, or express surprise.</p>
          <p>WH negative questions with the be-form can help convey these subtleties.</p>
        </section>

        {/* <!-- Structure Section --> */}
        <section class="mb-5">
          <h2 class="text-secondary">Structure of WH Negative Questions with Be-Form</h2>
          <p>The structure for negative WH questions using the be-form is straightforward. In most cases, we place a WH word at the beginning, followed by the negative form of the verb be (<code>isn't</code>, <code>aren't</code>, <code>wasn't</code>, <code>weren't</code>), and then the subject.</p>
          <div class="alert alert-info">
            <strong>Structure:</strong> WH Word + Be (negative) + Subject + Predicate?
          </div>
        </section>

        {/* <!-- Examples Section --> */}
        <section class="mb-5">
          <h2 class="text-secondary">Examples</h2>
          <ul>
            <li>Why isn’t he here yet?</li>
            <li>Where aren’t they going?</li>
            <li>Who isn’t available for the meeting?</li>
          </ul>
        </section>

        {/* <!-- Common WH Words Section --> */}
        <section class="mb-5">
          <h2 class="text-secondary">Common WH Words in Negative Questions with Be-Form</h2>
          <p>Let’s explore some common WH words used in negative questions with the be-form, along with examples to illustrate their use.</p>

          <div class="accordion" id="whWordsAccordion">
            {/* <!-- Who --> */}
            <div class="accordion-item">
              <h3 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#who" aria-expanded="true">
                  Who
                </button>
              </h3>
              <div id="who" class="accordion-collapse collapse show" data-bs-parent="#whWordsAccordion">
                <div class="accordion-body">
                  <p><strong>Usage:</strong> To inquire about people when expecting someone’s presence or action.</p>
                  <p><strong>Example:</strong> Who isn’t attending the class today?</p>
                </div>
              </div>
            </div>
            {/* <!-- What --> */}
            <div class="accordion-item">
              <h3 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#what">
                  What
                </button>
              </h3>
              <div id="what" class="accordion-collapse collapse" data-bs-parent="#whWordsAccordion">
                <div class="accordion-body">
                  <p><strong>Usage:</strong> To clarify an expected event, object, or situation that didn’t happen.</p>
                  <p><strong>Example:</strong> What isn’t working in the presentation?</p>
                </div>
              </div>
            </div>
            {/* <!-- Where --> */}
            <div class="accordion-item">
              <h3 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#where">
                  Where
                </button>
              </h3>
              <div id="where" class="accordion-collapse collapse" data-bs-parent="#whWordsAccordion">
                <div class="accordion-body">
                  <p><strong>Usage:</strong> To ask about a place or location where someone or something is not present.</p>
                  <p><strong>Example:</strong> Where aren’t they meeting up?</p>
                </div>
              </div>
            </div>
            {/* <!-- Add other WH words similarly --> */}
          </div>
        </section>

        {/* <!-- Context Examples Section --> */}
        <section class="mb-5">
          <h2 class="text-secondary">Examples of WH Negative Questions with Be-Form</h2>
          <p>Here are some practical examples of how WH negative questions with the be-form are used in different contexts:</p>
          <div class="row">
            <div class="col-md-4">
              <h3 class="text-success">1. Everyday Situations</h3>
              <ul>
                <li>Why isn’t the train arriving on schedule?</li>
                <li>Where aren’t we allowed to park?</li>
                <li>What isn’t clear in the instructions?</li>
              </ul>
            </div>
            <div class="col-md-4">
              <h3 class="text-success">2. School/College Context</h3>
              <ul>
                <li>Who isn’t submitting their homework today?</li>
                <li>When aren’t classes held on campus?</li>
                <li>Why isn’t the professor available for consultation?</li>
              </ul>
            </div>
            <div class="col-md-4">
              <h3 class="text-success">3. Workplace/Professional Context</h3>
              <ul>
                <li>Who isn’t joining the project team this quarter?</li>
                <li>What isn’t covered in this quarter’s training?</li>
                <li>Why isn’t the meeting scheduled in the main conference room?</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default BeFormNagativeWhQuestion
