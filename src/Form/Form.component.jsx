/* eslint-disable linebreak-style */
/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/tabindex-no-positive */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react'
import './form.styles.css'

const Form = () => (
  <div className="form-container">
    <form id="contact" action="" method="post">
      <h3>Contact Me!</h3>
      <fieldset>
        <input placeholder="Your name" type="text" tabindex="1" required autofocus />
      </fieldset>
      <fieldset>
        <input placeholder="Your Email Address" type="email" tabindex="2" required />
      </fieldset>
      <fieldset>
        <textarea placeholder="Type your Message Here...." tabindex="5" required> </textarea>
      </fieldset>
      <fieldset>
        <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
      </fieldset>
    </form>
  </div>
)

export default Form
