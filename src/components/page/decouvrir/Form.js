import { Fragment, useRef, useState } from 'react';
import Button from '../../Button';
import { Dialog, Transition } from '@headlessui/react';
import { CheckIcon, ExclamationCircleIcon } from '@heroicons/react/outline';

import { css } from '@emotion/react';

const inputContainerStyleClass = 'w-full mt-10';
const inputStyleClass = 'w-full border-2 border-gray-100 rounded-md p-2';

const inputBackgroundColor = css`
  background-color: #fbfbfb;
`;
const checkboxStyleClass = 'mr-4';
const checkboxLabelStyleClass = 'text-sm font-bold';

const Form = (props) => {
  let [isModalOpen, setIsModalOpen] = useState(false);
  let [modalTitle, setModalTitle] = useState('Merci');
  let [modalIcon, setModalIcon] = useState(
    <CheckIcon className="h-6 w-6 text-secondary" aria-hidden="true" />
  );
  let [modalDescription, setModalDescription] = useState('Votre message a été envoyé avec succès');
  const cancelButtonRef = useRef(null);

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
        setIsModalOpen(true);
      })
      .catch((error) => {
        setModalTitle('Oops');
        setModalDescription("Une erreur est survenue lors de l'envoi du message :(");
        setModalIcon(<ExclamationCircleIcon className="h-6 w-6" aria-hidden="true" />);
        setIsModalOpen(true);
      });
  };

  return (
    <form
      props={props}
      action="#"
      method="POST"
      className="flex flex-col items-center text-2xl w-full md:w-2/3 xl:w-2/5 md:mx-auto container"
      onSubmit={handleSubmit}
    >
      <Transition.Root show={isModalOpen} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed z-10 inset-0 overflow-y-auto"
          initialFocus={cancelButtonRef}
          open={isModalOpen}
          onClose={setIsModalOpen}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      {modalIcon}
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                        {modalTitle}
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">{modalDescription}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-secondary text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Ok
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      <fieldset className="w-full mt-10">
        <div className={inputContainerStyleClass}>
          <input
            css={inputBackgroundColor}
            className={inputStyleClass}
            type="text"
            name="lastName"
            placeholder="Nom*"
            required
          />
        </div>

        <div className={inputContainerStyleClass}>
          <input
            css={inputBackgroundColor}
            type="text"
            name="firstName"
            className={inputStyleClass}
            placeholder="Prénom*"
            required
          />
        </div>

        <div className={inputContainerStyleClass}>
          <input
            css={inputBackgroundColor}
            type="email"
            name="email"
            className={inputStyleClass}
            placeholder="Adresse mail*"
            required
          />
        </div>

        <div className={inputContainerStyleClass}>
          <input
            css={inputBackgroundColor}
            type="phone"
            name="phone"
            className={inputStyleClass}
            placeholder="Téléphone"
          />
        </div>

        <div className={inputContainerStyleClass}>
          <textarea
            css={inputBackgroundColor}
            type="text"
            name="message"
            className={inputStyleClass}
            rows="8"
            placeholder="Des questions ? Des remarques ? Ou vous voulez simplement nous dire bonjour ? Contactez nous ici 👇"
            required
          ></textarea>
        </div>

        <div className={inputContainerStyleClass}>
          <input
            css={inputBackgroundColor}
            type="checkbox"
            name="confidentiality"
            className={checkboxStyleClass}
            required
          />
          <label className={checkboxLabelStyleClass}>
            En cochant cette case, je marque mon accord pour que mes informations soient traitées
            par WWOM conformément à la politique de confidentialité . *
          </label>
        </div>

        <div className={inputContainerStyleClass}>
          <input
            css={inputBackgroundColor}
            type="checkbox"
            name="subscribe"
            className={checkboxStyleClass}
          />
          <label className={checkboxLabelStyleClass}>
            Je marque mon consentement pour que mes informations soient utilisées pour m’envoyer les
            dernières offres, la newsletter et les communications commerciales. Vous pouvez toujours
            retirer ce consentement via l’option « se désinscrire » prévue dans nos communications.
          </label>
        </div>
      </fieldset>

      <fieldset className="w-full mt-20 flex justify-center">
        <p id="my-form-status"></p>
        <Button id="my-form-button" type="submit" size="lg" className={'  w-80 '}>
          Recevoir mes 2 MOIS GRATUITS !
        </Button>
        <input type="text" size="default" name="_gotcha" className="hidden" />
      </fieldset>
    </form>
  );
};
export default Form;
