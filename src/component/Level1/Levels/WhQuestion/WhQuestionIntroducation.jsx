import React from 'react'

const WhQuestionIntroducation = () => {
  return (
    <>
      <div class="container py-4">
        <h1 class="text-center mb-4">Introduction to WH-Questions</h1>

        <div class="card mb-3">
          <div class="card-header">Common WH-Question Words</div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><b>Who:</b> Asks about people. <br/><i>Example:</i> Who is your teacher?</li>
            <li class="list-group-item"><b>What:</b> Asks about things, actions, or descriptions. <br/><i>Example:</i> What is your favorite color?</li>
            <li class="list-group-item"><b>When:</b> Asks about time. <br/><i>Example:</i> When is your birthday?</li>
            <li class="list-group-item"><b>Where:</b> Asks about place or location. <br/><i>Example:</i> Where do you live?</li>
            <li class="list-group-item"><b>Why:</b> Asks for reasons or explanations. <br/><i>Example:</i> Why are you late?</li>
            <li class="list-group-item"><b>How:</b> Asks about manner, process, or amount. <br/><i>Example:</i> How are you feeling?</li>
          </ul>
        </div>

        <div class="card mb-3">
          <div class="card-header">How to Form WH-Questions</div>
          <div class="card-body">
            <p>Forming WH-questions usually follows a pattern that includes the WH-word, an auxiliary verb (like <i>is, do, does, can, etc.</i>), the subject, and the main verb.</p>
            <p><b>Structure:</b> WH-word + Auxiliary Verb + Subject + Main Verb</p>
            <p><i>Example:</i> Where (WH-word) is (auxiliary verb) your friend (subject) staying (main verb)?</p>
            <p><b>WH-word + Main Verb + Complement:</b> For some WH-words like <i>‘who’</i> or <i>‘what,’</i> the question can begin with the WH-word directly when asking for the subject.</p>
            <p><i>Example:</i> Who (WH-word) broke (main verb) the vase?</p>
          </div>
        </div>

        <h2 class="text-center mb-4">Main Verbs and Their Forms</h2>

        <div class="card mb-3">
          <div class="card-header">Importance of Main Verbs</div>
          <div class="card-body">
            <p>Main verbs convey the main action or state in a sentence. They define the action, indicate tense, and add depth to sentences by expressing a range of actions, emotions, and states.</p>
          </div>
        </div>

        <div class="card mb-3">
          <div class="card-header">Verb Forms</div>
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Verb</th>
                <th>V1 (Base Form)</th>
                <th>V2 (Past Simple)</th>
                <th>V3 (Past Participle)</th>
                <th>V4 (Present Participle)</th>
                <th>V5 (3rd Person Singular)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Write</td>
                <td>write</td>
                <td>wrote</td>
                <td>written</td>
                <td>writing</td>
                <td>writes</td>
              </tr>
              <tr>
                <td>Read</td>
                <td>read</td>
                <td>read</td>
                <td>read</td>
                <td>reading</td>
                <td>reads</td>
              </tr>
              <tr>
                <td>Play</td>
                <td>play</td>
                <td>played</td>
                <td>played</td>
                <td>playing</td>
                <td>plays</td>
              </tr>
              <tr>
                <td>Jump</td>
                <td>jump</td>
                <td>jumped</td>
                <td>jumped</td>
                <td>jumping</td>
                <td>jumps</td>
              </tr>
              <tr>
                <td>Eat</td>
                <td>eat</td>
                <td>ate</td>
                <td>eaten</td>
                <td>eating</td>
                <td>eats</td>
              </tr>
              <tr>
                <td>Study</td>
                <td>study</td>
                <td>studied</td>
                <td>studied</td>
                <td>studying</td>
                <td>studies</td>
              </tr>
              <tr>
                <td>Sing</td>
                <td>sing</td>
                <td>sang</td>
                <td>sung</td>
                <td>singing</td>
                <td>sings</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="card mb-3">
          <div class="card-header">Examples</div>
          <div class="card-body">
            <p><i>I write in my journal daily.</i></p>
            <p><i>She wrote an essay yesterday.</i></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhQuestionIntroducation
