import Footer from '../components/Footer';

import style from './css/Contact.module.css';

const Contact = () => (
  <>
    <main className={style.Main}>
      <section className={style.ContactSection}>
        <div>
          <h1>Contact Me</h1>
          <p>Hi there, contact me to ask me about anything you have in mind.</p>
        </div>
        <form>
          <div className={style.Flex}>
            <label htmlFor="first_name">
              First name
              <input
                type="text"
                name="firstname"
                id="first_name"
                placeholder="Enter your first name"
                required
              />
            </label>
            <label htmlFor="last_name">
              Last name
              <input
                type="text"
                name="lastname"
                id="last_name"
                placeholder="Enter your last name"
                required
              />
            </label>
          </div>
          <div>
            <label htmlFor="email">
              Email
              <input
                type="email"
                id="email"
                placeholder="yourname@email.com"
              />
            </label>
            <label htmlFor="message">
              Message
              <textarea
                id="message"
                rows="5"
                placeholder="Send me a message and I'll reply you as soon as possible..."
              />
            </label>
            <label htmlFor="terms" className={style.label}>
              <input
                type="checkbox"
              />
              You agree to providing your data to Raga who may contact you.
            </label>
            <label htmlFor="btn__submit">
              <input
                type="button"
                id="btn__submit"
                value="Send message"
              />
            </label>
          </div>
        </form>
      </section>
    </main>
    <Footer />
  </>

);

export default Contact;
