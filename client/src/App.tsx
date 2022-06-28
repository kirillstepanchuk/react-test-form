import React from "react";
import "./app.css";
import Form from "./components/Form/Form";

const App = () => {
  // const inputs = [
  //   {
  //     id: 1,
  //     name: "fullName",
  //     type: "text",
  //     placeholder: "Имя Фамилия",
  //     errorMessage:
  //       "Данное поле должно состоять только из 2-х слов латинского афлавита, от 3 до 30 символов, между словами может быть только 1 пробел.",
  //     label: "Имя Фамилия",
  //     pattern: new RegExp("[a-zA-Z]{3,30}\\s][a-zA-Z]{3,30}"),
  //     required: true,
  //   },
  //   {
  //     id: 2,
  //     name: "email",
  //     type: "email",
  //     placeholder: "E-mail",
  //     errorMessage: "E-mail адресс должен быть валиден.",
  //     label: "E-mail",
  //     required: true,
  //   },
  //   {
  //     id: 3,
  //     name: "birthday",
  //     type: "date",
  //     placeholder: "Дата рождения",
  //     label: "Дата рождения",
  //   },
  //   {
  //     id: 4,
  //     name: "phoneNumber",
  //     type: "tel",
  //     placeholder: "+7 999 999 9999",
  //     errorMessage: "У номера телефона должен быть формат: +7 999 999 9999",
  //     label: "Номер телефона",
  //     pattern:
  //       "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
  //     required: true,
  //   },
  //   {
  //     id: 5,
  //     name: "message",
  //     type: "textarea",
  //     placeholder: "Сообщение",
  //     errorMessage: "Сообщение должно иметь от 10 до 300 символов.",
  //     label: "Сообщение",
  //     pattern: values.password,
  //     required: true,
  //   },
  // ];

  return (
    <div className="app">
      <Form />
    </div>
  );
};

export default App;
