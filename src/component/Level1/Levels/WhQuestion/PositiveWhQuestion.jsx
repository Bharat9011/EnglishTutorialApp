import React from 'react'

const PositiveWhQuestion = () => {
  return (
    <>
      <div class="container mt-5">
        <h1 class="text-center mb-4">WH Positive Questions</h1>
        <div className='bg-light rounded p-3'>
          <p class="lead">
            WH positive questions are inquiries that start with WH-words like
            <strong>'who,' 'what,' 'where,' 'when,' 'why,'</strong> and <strong>'how'</strong>
            but assume an affirmative (positive) or neutral answer, rather than a negative or interrogative tone.
            These questions aim to gather specific information rather than forming closed, yes-or-no queries.
          </p>
          <p>
            They are integral to both everyday conversation and formal communication, as they help us gain insights,
            clarify situations, and gather detailed responses.
          </p>
        </div>
        <h2 class="mt-5 text-center">Common WH-Words and Usage</h2>
        <ul class="list-group mb-4">
          <li class="list-group-item">
            <strong>Who:</strong> Asks about people or the subject of the action.
            <em>Example:</em> 'Who teaches your class?'
          </li>
          <li class="list-group-item">
            <strong>What:</strong> Asks about objects, actions, or descriptions.
            <em>Example:</em> 'What subjects are you studying?'
          </li>
          <li class="list-group-item">
            <strong>Where:</strong> Asks about a place or location.
            <em>Example:</em> 'Where is the nearest bookstore?'
          </li>
          <li class="list-group-item">
            <strong>When:</strong> Asks about time.
            <em>Example:</em> 'When is the next train?'
          </li>
          <li class="list-group-item">
            <strong>Why:</strong> Asks for reasons or motives.
            <em>Example:</em> 'Why did you choose this career path?'
          </li>
          <li class="list-group-item">
            <strong>How:</strong> Asks about manner, process, or quantity.
            <em>Example:</em> 'How do you solve this problem?'
          </li>
          <li class="list-group-item">
            <strong>Which:</strong> Asks about a choice between a limited set of options.
            <em>Example:</em> 'Which color do you prefer?'
          </li>
          <li class="list-group-item">
            <strong>Whose:</strong> Asks about possession.
            <em>Example:</em> 'Whose book is this?'
          </li>
          <li class="list-group-item">
            <strong>What kind of:</strong> Asks for a specific type or category.
            <em>Example:</em> 'What kind of music do you like?'
          </li>
          <li class="list-group-item">
            <strong>How many:</strong> Asks about quantity or number.
            <em>Example:</em> 'How many people are coming to the party?'
          </li>
          <li class="list-group-item">
            <strong>How long:</strong> Asks about duration or time length.
            <em>Example:</em> 'How long does it take to get to the station?'
          </li>
          <li class="list-group-item">
            <strong>How often:</strong> Asks about frequency.
            <em>Example:</em> 'How often do you exercise?'
          </li>
          <li class="list-group-item">
            <strong>How much:</strong> Asks about amount or price.
            <em>Example:</em> 'How much does this cost?'
          </li>
        </ul>

        <h2 class="mt-5">Structure of WH Positive Questions</h2>
        <p>
          Forming a WH positive question generally follows a straightforward structure:
        </p>
        <p><strong>Structure:</strong> WH-word + Auxiliary Verb + Subject + Main Verb</p>
        <p><strong>Example:</strong> 'Where (WH-word) do (auxiliary verb) you (subject) live (main verb)?'</p>
        <p>
          In certain cases, WH-words like <strong>'who'</strong> or <strong>'what'</strong> can directly start the sentence
          without an auxiliary verb, especially when they act as the subject of the question.
        </p>
        <p><strong>Example:</strong> 'Who made this decision?'</p>

        <h2 class="mt-5">Examples in Different Contexts</h2>
        <div class="row">
          <div class="col-md-6">
            <h3>Daily Life</h3>
            <ul class="list-unstyled">
              <li>'What time do you wake up?'</li>
              <li>'Where do you live?'</li>
            </ul>
          </div>
          <div class="col-md-6">
            <h3>Workplace</h3>
            <ul class="list-unstyled">
              <li>'How long have you been working here?'</li>
              <li>'What project are you working on?'</li>
            </ul>
          </div>
          <div class="col-md-6">
            <h3>School</h3>
            <ul class="list-unstyled">
              <li>'How many subjects are you taking this semester?'</li>
              <li>'What books do you need for your class?'</li>
            </ul>
          </div>
          <div class="col-md-6">
            <h3>Travel</h3>
            <ul class="list-unstyled">
              <li>'When does the flight depart?'</li>
              <li>'Where is the nearest restaurant?'</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default PositiveWhQuestion
