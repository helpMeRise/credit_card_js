import {el, setChildren} from 'redom';
import dateFormat from 'dateformat';
import Inputmask from 'inputmask';

const wrapper = el('div.wrapper');
const card = el('div.card');
const secure = el('p.secure', 'Secure Checkout');
const creditCard = el('div.credit-card');
const cardNumber = el('span.card__number', 'xxxx xxxx xxxx xxxx');
const cardPersonal = el('div.card__personal');
const cardName = el('span.card__name', 'John Doe');
const cardDate = el('span.card__date', '04/24');

setChildren(cardPersonal, [cardName, cardDate]);
setChildren(creditCard, [cardNumber, cardPersonal]);


const form = el('form.form#form');
const formInputWrapHolder =
  el('div.form__input-wrap.form__input-wrap_holder');
const formHolderLabel =
  el('label.form__label.form__holder-label', 'Card Holder');
const inputHolder = el('input.input.input__holder', {type: 'text'});
const formInputWrapNumber =
  el('div.form__input-wrap.form__input-wrap_number');
const formNumberLabel =
  el('label.form__label.form__number-label', 'Card Number');
const inputNumber =
  el('input.input.input__number#card__number', {type: 'text'});
const formInputWrapdDate = el('div.form__input-wrap.form__input-wrap_date');
const formDateLabel =
  el('label.form__label.form__date-label', 'Card Expiry');
const inputDate = el('input.input.input__date',
  {type: 'date'});
const formInputWrapCvv = el('div.form__input-wrap.form__input-wrap_number');
const formCvvLabel =
  el('label.form__label.form__cvv-label', 'CVV');
const inputCvv = el('input.input.input__cvv#input__cvv', {type: 'text'});
const button = el('button.form__button', 'CHECK OUT');

setChildren(formInputWrapHolder, [formHolderLabel, inputHolder]);
setChildren(formInputWrapNumber, [formNumberLabel, inputNumber]);
setChildren(formInputWrapdDate, [formDateLabel, inputDate]);
setChildren(formInputWrapCvv, [formCvvLabel, inputCvv]);
setChildren(form, [formInputWrapHolder,
  formInputWrapNumber, formInputWrapdDate, formInputWrapCvv, button]);

setChildren(card, [secure, creditCard, form]);
setChildren(wrapper, card);
setChildren(document.body, wrapper);

inputHolder.addEventListener('input',
  () => cardName.textContent = inputHolder.value);

Inputmask('9{4} 9{4} 9{4} 9{4}').mask(inputNumber);

inputNumber.addEventListener('input', () => {
  cardNumber.textContent = inputNumber.value;
});

inputDate.addEventListener('input', () => {
  const date = inputDate.value;
  cardDate.textContent = dateFormat(date, 'dd/mm');
});
