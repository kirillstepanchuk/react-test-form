import React, { useEffect, useState } from "react";
import InputMask from "react-input-mask";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import addNewFeedback from "../../store/actions/addFeedback";
import { FeedbackState } from "../../store/reducers/feedback";
import { FeedbackData } from "../../types/feedback";

async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });

  return await response.json();
}

const useValidation = (value: any, type: any) => {
  const [isValid, setIsValid] = useState(true);

  let regExp: RegExp = new RegExp("[\\s\\S]*");
  useEffect(() => {
    switch (type) {
      case "fullName":
        regExp = new RegExp("[a-zA-Z]{3,30}\\s[a-zA-Z]{3,30}");
        break;
      case "email":
        regExp = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
        break;
      case "phoneNumber":
        regExp = new RegExp(
          "^(\\+7|7|8)?[\\s\\-]?\\(?[0-9]{3}\\)?[\\s\\-]?[0-9]{3}[\\s\\-]?[0-9]{2}[\\s\\-]?[0-9]{2}$"
        );
        break;
      case "birthday":
        if (new Date(value) > new Date()) {
          setIsValid(false);
          return;
        }
        regExp = new RegExp(
          "^\\d{4}[\\/\\-](0?[1-9]|1[012])[\\/\\-](0?[1-9]|[12][0-9]|3[01])$"
        );
        break;
      case "message":
        regExp = new RegExp("^\\b([a-zA-Z0-9_]|\\s){10,300}\\b");
        break;
    }

    regExp.test(String(value)) ? setIsValid(true) : setIsValid(false);
    console.log(regExp.test(String(value)));
  }, [value]);

  return {
    isValid,
  };
};

const useInput = (initialState: string, type: string) => {
  const [value, setValue] = useState(initialState);
  const [isDirty, setIsDirty] = useState(false);

  const valid = useValidation(value, type);

  const onChange = (evt: any) => {
    setValue(evt.target.value);
  };

  const onBlur = (evt: any) => {
    setIsDirty(true);
  };

  return {
    value,
    onChange,
    onBlur,
    isDirty,
    ...valid,
  };
};

const Form = () => {
  const fullName = useInput("", "fullName");
  const email = useInput("", "email");
  const phoneNumber = useInput("", "phoneNumber");
  const birthday = useInput("", "birthday");
  const message = useInput("", "message");

  const mask = "+7 (999) 999-99-99";

  const dispatch: Dispatch = useDispatch();
  const feedback: FeedbackState = useSelector(
    (state: RootStateOrAny) => state.feedback
  );

  const onSubmitHandler = (evt: any) => {
    evt.preventDefault();

    const target = evt.target as HTMLFormElement;
    const formData: any = Object.fromEntries(new FormData(target));
    dispatch(addNewFeedback(formData));
    console.log(feedback);

    // postData("http://localhost:3000/feedback/add", formData).then((data) => {
    //   console.log("component data:", data);
    // });
  };

  return (
    <div className="form_container">
      <form onSubmit={onSubmitHandler} noValidate>
        {fullName.isDirty && !fullName.isValid && (
          <div>
            Данное поле должно состоять только из 2-х слов латинского афлавита,
            от 3 до 30 символов, между словами может быть только 1 пробел.
          </div>
        )}
        <input
          value={fullName.value}
          onChange={fullName.onChange}
          onBlur={fullName.onBlur}
          type="text"
          name="fullName"
          placeholder="Имя Фамилия"
        />

        {email.isDirty && !email.isValid && (
          <div>E-mail адресс должен быть валиден.</div>
        )}
        <input
          value={email.value}
          onChange={email.onChange}
          onBlur={email.onBlur}
          type="email"
          name="email"
          placeholder="E-mail"
        />

        {phoneNumber.isDirty && !phoneNumber.isValid && (
          <div>У номера телефона должен быть формат: +7 999 999 9999</div>
        )}
        <InputMask
          mask={mask}
          value={phoneNumber.value}
          onChange={phoneNumber.onChange}
          onBlur={phoneNumber.onBlur}
          type="tel"
          name="phoneNumber"
          placeholder="+7 (999) 999-99-99"
        />

        {birthday.isDirty && !birthday.isValid && (
          <div>
            День рождения должен быть раньше, чем сегодня) и желательно полной
            датой
          </div>
        )}
        <input
          value={birthday.value}
          onChange={birthday.onChange}
          onBlur={birthday.onBlur}
          type="date"
          name="birthday"
          placeholder="Дата рождения"
        />

        {message.isDirty && !message.isValid && (
          <div>Сообщение должно состоять из 10 - 300 символов.</div>
        )}
        <textarea
          value={message.value}
          onChange={message.onChange}
          onBlur={message.onBlur}
          name="message"
          placeholder="Сообщение"
        ></textarea>

        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};

export default Form;
