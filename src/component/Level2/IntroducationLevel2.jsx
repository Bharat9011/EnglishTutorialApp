import React from 'react'

const IntroducationLevel2 = () => {
  return (
    <>
      <div className="container my-5">
        {/* Level 2 Introduction */}
        <div className="mb-4">
          <h2 className="text-primary">Level 2: Introduction</h2>
          <p className="text-muted">
            In Level 2, we explore modal verbs and sentence structures to help you express a wide range of intentions, abilities, permissions, and obligations. Modal verbs play a crucial role in communicating moods, attitudes, and levels of certainty. Understanding sentence structures will further help in building clear, logical sentences.
          </p>
        </div>

        {/* Modal Verbs Section */}
        <div className="mb-4">
          <h3 className="text-secondary">Modal Verbs</h3>
          <p>
            Modal verbs are auxiliary (helping) verbs that express necessity, possibility, ability, permission, or advice. They are used before the main verb and do not change forms based on the subject (i.e., they don’t add “-s” for third-person singular).
          </p>
          <h5 className="mt-3">List of Common Modal Verbs</h5>
          <ul className="list-group">
            <li className="list-group-item">Can – ability, permission</li>
            <li className="list-group-item">Could – past ability, polite request, possibility</li>
            <li className="list-group-item">May – permission, possibility</li>
            <li className="list-group-item">Might – possibility, slight chance</li>
            <li className="list-group-item">Will – future intent, certainty</li>
            <li className="list-group-item">Would – polite request, hypothetical situations</li>
            <li className="list-group-item">Shall – suggestions, offers (mainly in British English)</li>
            <li className="list-group-item">Should – advice, recommendation, obligation</li>
            <li className="list-group-item">Must – strong obligation, necessity</li>
            <li className="list-group-item">Ought to – moral obligation, advice (similar to “should”)</li>
          </ul>
        </div>

        {/* Uses of Modal Verbs */}
        <div className="mb-4">
          <h3 className="text-secondary">Uses of Modal Verbs</h3>
          <div className="accordion" id="modalUsesAccordion">
            {/* Ability */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="abilityHeading">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#abilityCollapse"
                  aria-expanded="true"
                  aria-controls="abilityCollapse"
                >
                  Ability
                </button>
              </h2>
              <div
                id="abilityCollapse"
                className="accordion-collapse collapse show"
                aria-labelledby="abilityHeading"
              >
                <div className="accordion-body">
                  <p>Can and Could are commonly used to describe ability.</p>
                  <p className="text-muted">
                    Example: "She can swim well." / "He could play the piano when he was younger."
                  </p>
                </div>
              </div>
            </div>
            {/* Possibility */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="possibilityHeading">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#possibilityCollapse"
                  aria-expanded="false"
                  aria-controls="possibilityCollapse"
                >
                  Possibility
                </button>
              </h2>
              <div
                id="possibilityCollapse"
                className="accordion-collapse collapse"
                aria-labelledby="possibilityHeading"
              >
                <div className="accordion-body">
                  <p>May, Might, and Could indicate possible outcomes or situations.</p>
                  <p className="text-muted">
                    Example: "They may visit tomorrow." / "It might rain later."
                  </p>
                </div>
              </div>
            </div>
            {/* Additional accordion items for Permission, Requests, Advice, etc. */}
          </div>
        </div>

        {/* Sentence Structures with Modal Verbs */}
        <div className="mb-4">
          <h3 className="text-secondary">Sentence Structures with Modal Verbs</h3>
          <p>
            Modal verbs follow a specific structure in sentences and typically come before the main verb in its base form. Here’s how you can use modal verbs in different types of sentences:
          </p>
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Affirmative Sentences:</strong> Subject + Modal Verb + Base Form of Main Verb
              <br />
              <em>Example: "I can solve this problem." / "She might come to the party."</em>
            </li>
            <li className="list-group-item">
              <strong>Negative Sentences:</strong> Subject + Modal Verb + Not + Base Form of Main Verb
              <br />
              <em>Example: "He cannot (can’t) attend the meeting." / "We should not (shouldn’t) waste time."</em>
            </li>
            <li className="list-group-item">
              <strong>Interrogative Sentences:</strong> Modal Verb + Subject + Base Form of Main Verb?
              <br />
              <em>Example: "Can you help me?" / "Should we leave now?"</em>
            </li>
          </ul>
        </div>

        {/* Tips for Using Modal Verbs */}
        <div className="mb-4">
          <h3 className="text-secondary">Tips for Using Modal Verbs</h3>
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Choose the Right Modal Verb:</strong> Each modal verb has a specific meaning and use. Pick the correct one based on whether you want to express ability, permission, possibility, necessity, etc.
            </li>
            <li className="list-group-item">
              <strong>Use Base Form Only:</strong> Modal verbs are followed by the base form of the main verb without adding “to.” For example, “He can play the guitar,” not “He can to play the guitar.”
            </li>
            <li className="list-group-item">
              <strong>Combine Modals with Adverbs:</strong> You can combine modals with adverbs to clarify certainty. For example, “She might possibly be late,” “He will definitely join.”
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default IntroducationLevel2;