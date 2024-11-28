import React from 'react'

const NegativeWhQuestion = () => {
  return (
    <>
    <div class="container mt-4">
        <h1 class="text-center">Negative Wh-Questions</h1>
        <div class="my-4">
            <h2>Introduction</h2>
            <p>Wh-questions are questions that begin with words like <strong>who</strong>, <strong>what</strong>, <strong>when</strong>, <strong>where</strong>, <strong>why</strong>, <strong>how</strong>, and <strong>which</strong>. These questions are used to gather specific information. A negative Wh-question is simply a Wh-question with a negation added. This is typically formed by adding <strong>"not"</strong> after the auxiliary verb (like do, did, is, are, etc.).</p>
        </div>

        <div class="my-4">
            <h2>Structure of Negative Wh-Questions</h2>
            <p>The structure of a negative Wh-question depends on the type of Wh-word used and the tense of the sentence. Here’s the basic structure:</p>
            <div class="alert alert-info">
                <p><strong>Structure:</strong> Wh-word + auxiliary verb + subject + not + main verb</p>
            </div>
            <ul>
                <li><strong>Example 1:</strong> What don't you like?</li>
                <li><strong>Example 2:</strong> Why hasn't she arrived yet?</li>
                <li><strong>Example 3:</strong> When didn't they call me?</li>
            </ul>
        </div>

        <div class="my-4">
            <h2>7 Types of Wh-Questions</h2>
            <div class="accordion" id="whQuestions">
                {/* <!-- What --> */}
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingWhat">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWhat" aria-expanded="true" aria-controls="collapseWhat">
                            1. What
                        </button>
                    </h2>
                    <div id="collapseWhat" class="accordion-collapse collapse show" aria-labelledby="headingWhat" data-bs-parent="#whQuestions">
                        <div class="accordion-body">
                            <p>Used to ask about things, ideas, or actions.</p>
                            <ul>
                                <li><strong>Positive Example:</strong> What is your favorite color?</li>
                                <li><strong>Negative Example:</strong> What don't you like to do?</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* <!-- Who --> */}
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingWho">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWho" aria-expanded="false" aria-controls="collapseWho">
                            2. Who
                        </button>
                    </h2>
                    <div id="collapseWho" class="accordion-collapse collapse" aria-labelledby="headingWho" data-bs-parent="#whQuestions">
                        <div class="accordion-body">
                            <p>Used to ask about people.</p>
                            <ul>
                                <li><strong>Positive Example:</strong> Who is your best friend?</li>
                                <li><strong>Negative Example:</strong> Who has not called you?</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* <!-- Add more accordion items here for When, Where, Why, How, and Which --> */}
            </div>
        </div>

        <div class="my-4">
            <h2>Examples by Helping Verb</h2>
            <div class="row">
                {/* <!-- Do/Does --> */}
                <div class="col-md-6 mb-3">
                    <div class="card">
                        <div class="card-header">
                            <h4>Do/Does</h4>
                        </div>
                        <div class="card-body">
                            <ul>
                                <li>What don't you like to eat for breakfast?</li>
                                <li>Who doesn't she work with?</li>
                                <li>When don't they usually come to class?</li>
                                <li>Where don't you live?</li>
                                <li>Why doesn't he always arrive late?</li>
                                <li>How don't you make this recipe?</li>
                                <li>Which book don't you prefer?</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* <!-- Did --> */}
                <div class="col-md-6 mb-3">
                    <div class="card">
                        <div class="card-header">
                            <h4>Did</h4>
                        </div>
                        <div class="card-body">
                            <ul>
                                <li>What didn't you do yesterday?</li>
                                <li>Who didn't you meet at the conference?</li>
                                <li>When didn't they leave for the trip?</li>
                                <li>Where didn't you go last weekend?</li>
                                <li>Why didn't she cancel the meeting?</li>
                                <li>How didn't you finish the project so quickly?</li>
                                <li>Which movie didn't you watch last night?</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="my-4">
            <h2>Conclusion</h2>
            <p>Negative Wh-questions are a powerful tool for asking questions that focus on information while also implying a negation. Each type of Wh-question serves a different purpose and is used to gather specific types of information. By mastering the structure and usage of these questions, you'll be able to improve both your comprehension and communication in English.</p>
        </div>
    </div>

    </>
  )
}

export default NegativeWhQuestion
