import React, { SyntheticEvent, useCallback, useEffect, useState } from "react";
import InputMask from "react-input-mask";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { PHONE_MASK } from "../../constants";

import useInput from "../../hooks/useInput";
import addNewFeedback from "../../store/actions/addFeedback";
import { FeedbackState } from "../../store/reducers/feedback";
import { FeedbackData } from "../../types/feedback";
import Input from "../Input/Input";
import Loader from "../Loader/Loader";
import MaskedInput from "../MaskedInput/MaskedInput";
import Textarea from "../Textarea/Textarea";
import "./form.scss";

const Form = () => {
  const fullName = useInput("", "fullName");
  const email = useInput("", "email");
  const phoneNumber = useInput("", "phoneNumber");
  const birthday = useInput("", "birthday");
  const message = useInput("", "message");

  const dispatch: Dispatch = useDispatch();
  const feedback: FeedbackState = useSelector(
    (state: RootStateOrAny) => state.feedback
  );

  const isFormValid =
    fullName.isValid &&
    email.isValid &&
    phoneNumber.isValid &&
    birthday.isValid &&
    message.isValid;

  const onSubmitHandler = useCallback((evt: SyntheticEvent) => {
    evt.preventDefault();

    const target = evt.target as HTMLFormElement;
    const formData: any = Object.fromEntries(new FormData(target));

    dispatch(addNewFeedback(formData));
  }, []);

  return (
    <div className="form_container">
      <form onSubmit={onSubmitHandler} noValidate>
        <h1 className="form_title">Обратная связь</h1>

        <Input
          options={fullName}
          type="text"
          placeholder="Имя Фамилия"
          name="fullName"
          errorMessage="Данное поле должно состоять только из 2-х слов латинского афлавита,
            от 3 до 30 символов, между словами может быть только 1 пробел."
        />

        <Input
          options={email}
          type="email"
          placeholder="E-mail"
          name="email"
          errorMessage="E-mail адресс должен быть валиден."
        />

        <MaskedInput
          mask={PHONE_MASK}
          options={phoneNumber}
          type="tel"
          placeholder="+7 (999) 999-99-99"
          name="phoneNumber"
          errorMessage="У номера телефона должен быть формат: +7 999 999 9999."
        />

        <Input
          options={birthday}
          type="date"
          placeholder="Дата рождения"
          name="birthday"
          errorMessage="День рождения должен быть раньше, чем сегодня) и желательно полной
            датой"
        />

        <Textarea
          options={message}
          placeholder="Сообщение"
          name="message"
          errorMessage="Сообщение должно состоять из 10 - 300 символов латинского алфавита."
        />

        <button className="form_button" disabled={!isFormValid} type="submit">
          {feedback.loading ? <Loader /> : "Отправить"}
        </button>
        <p className="request_status">
          {feedback.data || feedback.error ? (
            feedback.data || feedback.error
          ) : (
            <></>
          )}
        </p>
      </form>
    </div>
  );
};

export default Form;
