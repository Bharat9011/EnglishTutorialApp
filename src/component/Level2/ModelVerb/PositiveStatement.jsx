import React from 'react'

const PositiveStatement = () => {
  return (
    <>
      <div className="container mt-4">
        {/* Positive Statement Modal Verb */}
        <div className="mb-4">
          <h3>Positive Statement Modal Verb</h3>
          <p><strong>Rules:</strong> Modal verb is used only in the verb (V1) form.</p>
          <p><strong>Structure:</strong> Subject + Modal Verb + V1 (verb) + Object + Extra word</p>
          <h5>Examples for Positive Statement Modal Verb</h5>
          <ul className="list-group">
            <li className="list-group-item"><strong>Shall:</strong> I shall play cricket.</li>
            <li className="list-group-item"><strong>Will:</strong> We will play cricket.</li>
            <li className="list-group-item"><strong>Can:</strong> They can play cricket.</li>
            <li className="list-group-item"><strong>Could:</strong> He could play cricket.</li>
            <li className="list-group-item"><strong>May:</strong> You may play cricket.</li>
            <li className="list-group-item"><strong>Might:</strong> She might play cricket.</li>
            <li className="list-group-item"><strong>Must:</strong> You must play cricket.</li>
            <li className="list-group-item"><strong>Should:</strong> She should play cricket.</li>
            <li className="list-group-item"><strong>Would:</strong> I would play cricket.</li>
          </ul>
        </div>

        {/* Past Modal Verb */}
        <div className="mb-4">
          <h3>Past Modal Verb</h3>
          <p><strong>Rules:</strong> Past Modal verb is used only in the verb (V3) form.</p>
          <h5>Examples for Past Modal Verb</h5>
          <ul className="list-group">
            <li className="list-group-item"><strong>Could have:</strong> I could have played cricket.</li>
            <li className="list-group-item"><strong>Should have:</strong> We should have played cricket.</li>
            <li className="list-group-item"><strong>May have:</strong> They may have played cricket.</li>
            <li className="list-group-item"><strong>Might have:</strong> She might have played cricket.</li>
            <li className="list-group-item"><strong>Must have:</strong> He must have played cricket.</li>
            <li className="list-group-item"><strong>Would have:</strong> You would have played cricket.</li>
          </ul>
        </div>

        {/* Negative Statement with Modal Verbs */}
        <div className="mb-4">
          <h3>Negative Statement with Modal Verbs</h3>
          <p>
            <strong>Rules:</strong> Modal verbs are followed only by the base (V1) form of the verb.
            The structure is formed by adding <strong>'Not'</strong> after the modal verb.
          </p>
          <p><strong>Structure:</strong> Subject + Modal Verb + Not + Object + V1 (Verb) + Extra Word</p>
          <h5>Examples of Negative Statements with Modal Verbs</h5>
          <ul className="list-group">
            <li className="list-group-item"><strong>Shall:</strong> I shan't play cricket.</li>
            <li className="list-group-item"><strong>Will:</strong> We won’t play cricket.</li>
            <li className="list-group-item"><strong>Can:</strong> They can't play cricket.</li>
            <li className="list-group-item"><strong>Could:</strong> He couldn't play cricket.</li>
            <li className="list-group-item"><strong>May:</strong> You may not play cricket.</li>
            <li className="list-group-item"><strong>Might:</strong> She mightn't play cricket.</li>
            <li className="list-group-item"><strong>Must:</strong> You mustn't play cricket.</li>
            <li className="list-group-item"><strong>Should:</strong> She shouldn't play cricket.</li>
            <li className="list-group-item"><strong>Would:</strong> I wouldn't play cricket.</li>
          </ul>
        </div>

        {/* Past Modal Verb with Negative Examples */}
        <div className="mb-4">
          <h5>Examples of Past Modal Verbs</h5>
          <ul className="list-group">
            <li className="list-group-item"><strong>Could have:</strong> I could have played cricket.</li>
            <li className="list-group-item"><strong>Should have:</strong> We shouldn't have played cricket.</li>
            <li className="list-group-item"><strong>May have:</strong> They may not have played cricket.</li>
            <li className="list-group-item"><strong>Might have:</strong> She mightn't have played cricket.</li>
            <li className="list-group-item"><strong>Must have:</strong> He mustn't have played cricket.</li>
            <li className="list-group-item"><strong>Would have:</strong> You wouldn't have played cricket.</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default PositiveStatement;