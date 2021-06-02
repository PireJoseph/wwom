import React from 'react';
import Button from '../../Button';

import { css } from '@emotion/react';

const inputContainerStyleClass = 'w-full mt-10';
const labelStyleClass = 'text-bold text-primary flex flex-col items-start ml-2 mb-2';
const inputStyleClass = 'w-full border-2 border-gray-100 rounded-md';
const inputBackgroundColor = css`
  background-color: #fbfbfb;
`;

const Form = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch('https://formspree.io/f/xzbyrveb', {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => {
        event.target.reset();
        alert('Envoi de mail réussi');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form
      action="#"
      method="POST"
      className="flex flex-col items-center text-2xl w-full md:w-2/3 xl:w-2/5 md:mx-auto"
      onSubmit={handleSubmit}
    >
      <fieldset className="w-full mt-10">
        <div className={inputContainerStyleClass}>
          <label className={labelStyleClass}>Nom</label>
          <input
            css={inputBackgroundColor}
            className={inputStyleClass}
            type="text"
            name="lastName"
          />
        </div>
        <div className={inputContainerStyleClass}>
          <label className={labelStyleClass}>Prénom</label>
          <input
            css={inputBackgroundColor}
            type="text"
            name="firstName"
            className={inputStyleClass}
          />
        </div>
        <div className={inputContainerStyleClass}>
          <label className={labelStyleClass}>Email</label>
          <input
            css={inputBackgroundColor}
            type="email"
            name="email"
            className={inputStyleClass}
            required
          />
        </div>
        <div className={inputContainerStyleClass}>
          <label className={labelStyleClass}>Téléphone</label>
          <input css={inputBackgroundColor} type="phone" name="phone" className={inputStyleClass} />
        </div>
        <div className={inputContainerStyleClass}>
          <label className={labelStyleClass}>Message</label>
          <textarea
            css={inputBackgroundColor}
            type="text"
            name="message"
            className={inputStyleClass}
            rows="8"
            required
          ></textarea>
        </div>
      </fieldset>

      <fieldset className="w-full mt-20 flex justify-center">
        <p id="my-form-status"></p>
        <Button id="my-form-button" type="submit" className={'  w-80  '}>
          Recevoir mes 2 MOIS GRATUITS !
        </Button>
        <input type="text" name="_gotcha" className="hidden" />
      </fieldset>
    </form>
  );
};
export default Form;
