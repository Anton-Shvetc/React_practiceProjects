import React from "react";
// import { useEffect, useState } from "react";
// import {useLocalStorage} from '../../data/useLocalStore'

function Input() {
  const data = {
    data: [
      { question: "Сколько вам лет?", id: 1 },
      { question: "Как вас зовут?", id: 2 },
      { question: "В каком городе вы живете?", id: 3 },
      { question: "Ваш любимый цвет?", id: 4 },
      { question: "У вас есть собака?", id: 5 },
      { question: "Любимая музыка?", id: 6 },
    ],
  };
  // console.log(data.data[0]);

  const [values, setValues] = React.useState(getFormValues);

  React.useEffect(() => {
    localStorage.setItem("form", JSON.stringify(values));
  }, [values]);

  function handleSubmit(event) {
    if (localStorage.hasOwnProperty(values.email) && values.email) {
      alert("Такой пользователь уже существует");
    } else {
      event.preventDefault();
      // console.log(localStorage);

      localStorage.setItem(values.email, JSON.stringify(values));
      reset();
    }

    // alert('An error occurred on the server. Please try again!!!');
  }

  function reset(event) {
    setValues(() => ({
      name: "",
      email: "",
      message: "",
      telephone: "",
    }));
  }

  function handleChange(event) {
    setValues((previousValues) => ({
      ...previousValues,
      [event.target.name]: event.target.value,
    }));
  }

  // localStorage.setItem(user.id, user);

  function getFormValues() {
    const storedValues = localStorage.getItem("form");
    if (!storedValues)
      return {
        name: "",
        email: "",
        message: "",
        telephone: "",
      };
    return JSON.parse(storedValues);
  }

  return (
    <main>
      <header>
        <h1>Form In React</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name
          <input
            autoComplete="off"
            type="text"
            name="name"
            id="name"
            placeholder="Mr. Anyisob Baidoo"
            onChange={handleChange}
            value={values.name}
          />
          <small>An identifiable name which we can use to contact you.</small>
        </label>
        <label htmlFor="email">
          Email
          <input
            placeholder="e.g. user.email@domain.com"
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            value={values.email}
          />
        </label>
        <label htmlFor="telephone">
          Telephone
          <input
            type="text"
            placeholder="e.g. +233(0)-392-498-2882"
            name="telephone"
            id="telephone"
            onChange={handleChange}
            value={values.telephone}
          />
        </label>
        <label htmlFor="message">
          Message
          <textarea
            name="message"
            id="message"
            value={values.message}
            onChange={handleChange}
          ></textarea>
          <small>Your contact message for us</small>
        </label>
        <button type="submit">Submit</button>
      </form>
    </main>

    // <div>
    //   <h1> Форма</h1>

    //   <form action="submit">
    //     {data.data.map(function (e, id) {
    //       return (
    //         <div>
    //           {" "}
    //           <label key={id}>{e.question}</label>
    //           <input type="text" placeholder="enter student name" />
    //         </div>
    //       );
    //     })}
    //   </form>
    //   <button>Submit</button>
    // </div>
  );
}

export default Input;
