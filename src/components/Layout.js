import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import '../styles/index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet defaultTitle="Liduše píše" titleTemplate="%s - Liduše píše">
      <html lang="cs" />
      <body className="font-serif text-lg" />
    </Helmet>
    <Navbar />
    <div>{children}</div>
    <footer className="relative mt-10 pt-10 bg-black text-white text-center">
      <h2 className="">Liduše píše</h2>
      <form
        name="subscription"
        method="post"
        data-netlify="true"
        class="flex flex-col mb-3"
      >
        <input type="hidden" name="form-name" value="subscription" />
        <div class="flex flex-col self-center my-5">
          <div className="flex">
            <input
              class="appearance-none w-full text-grey-darker border border-grey-dark py-3 px-4 mr-4 leading-tight"
              type="email"
              name="email"
              placeholder="Chci vědět, co Liduše píše"
            />
            <button
              type="submit"
              className="border border-white text-white p-2"
            >
              Přihlásit&nbsp;odběr
            </button>
          </div>
          <label class="block my-2">
            <input name="terms" class="mr-2 leading-tight" type="checkbox" />
            <span class="text-sm">
              Tohle je GDPR čtvereček. Prosím, zaškrtni jej, jinak zítra nevyjde
              slunce.
            </span>
          </label>
        </div>
      </form>
      <p className="py-10 text-sm text-grey-light">© Lidmila Maršálková</p>
    </footer>
  </div>
)

export default TemplateWrapper
