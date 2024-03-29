import React, { useState } from "react";
import { workExperiences } from "./workExperience";

import Dialog from "../Dialog/Dialog";

const ProjectCard = () => {
  return (
    <section className="bg-gray-2 pb-10 pt-20 dark:bg-dark lg:pb-20 md:w-full">
      <div className="container">
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {workExperiences.map((workExperience) => {
              return (
                <SingleCard
                  cover={workExperience.cover}
                  CardTitle={workExperience.title}
                  CardDescription={workExperience.about}
                  Button="View Details"
                  modalHeader={workExperience.modalHeader}
                  modalBody={workExperience.body}
                />
              );
            })}
          </div>
        </div>
      </section>
  );
};

export default ProjectCard;

const SingleCard = ({
  cover,
  Button,
  CardDescription,
  CardTitle,
  titleHref,
  btnHref,
  modalHeader,
  modalBody,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="mb-10 overflow-hidden rounded-lg bg-white shadow-1 duration-300 hover:border-stone-700 border-4 border-gray-100 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3">
        <img src={cover} alt="cover" className="w-full" />
        <div className="p-8 text-center">
          <h3>
            <a
              href={titleHref ? titleHref : "/#"}
              className="mb-4 block text-xl font-semibold text-dark hover:text-primary dark:text-black sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
            >
              {CardTitle}
            </a>
          </h3>
          <p className="mb-7 text-base leading-relaxed text-body-color dark:text-dark-6">
            {CardDescription}
          </p>

          {Button && (
            <a
              href={btnHref ? btnHref : "#"}
              className="inline-block rounded-full px-7 py-2 text-base font-medium text-body-color transition hover:border-primary hover:bg-primary 
     hover:border-stone-700 border-2 border-gray-200
     hover:text-black dark:border-dark-3 dark:text-dark-6 focus:ring-4 shadow-lg transform active:scale-75 transition-transform"
              onClick={handleOpen}
            >
              {Button}
            </a>
          )}

          {isOpen && (
            <Dialog
              header={modalHeader}
              body={modalBody}
              handleClose={handleClose}
            ></Dialog>
          )}
        </div>
      </div>
    </>
  );
};
