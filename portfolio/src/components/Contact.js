import { React, useState } from 'react';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [formState] = useState('Send');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') setEmail(inputValue);
    else return false;
  };

  return (
    <section>
      <div>
        <h2>Contact</h2>
        <form>
          <div>
            <label>Name</label>
            <input type='text' id='name' />
          </div>
          <div>
            <label>Email</label>
            <input
              type='email'
              id='email'
              required
              value={email}
              name='email'
              onChange={handleInputChange}
              placeholder='email'
            />
          </div>
          <div>
            <label>Message</label>
            <textarea id='message' required />
          </div>
          <button type='submit'>{formState}</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
