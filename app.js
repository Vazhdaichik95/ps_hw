'use strict';

const timerEl = document.getElementById('timer');

function getNewYearDate() {
  const now = new Date();
  const year = now.getFullYear() + 1; // до следующего НГ
  return new Date(year, 0, 1, 0, 0, 0, 0);
}

function splitDiffToUnits(msTotal) {
  // грубо считаем месяц = 30 дней, как в учебных примерах [web:222]
  const sec = Math.floor(msTotal / 1000);
  const min = Math.floor(sec / 60);
  const hours = Math.floor(min / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);

  const remDays = days % 30;
  const remHours = hours % 24;
  const remMinutes = min % 60;
  const remSeconds = sec % 60;

  return { months, days: remDays, hours: remHours, minutes: remMinutes, seconds: remSeconds };
}

const nf = new Intl.NumberFormat('ru-RU');

function plural(value, one, few, many) {
  // простое склонение для ru
  const mod10 = value % 10;
  const mod100 = value % 100;
  if (mod10 === 1 && mod100 !== 11) return one;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return few;
  return many;
}

function formatUnits({ months, days, hours, minutes, seconds }) {
  const parts = [];

  parts.push(`${nf.format(months)} ${plural(months, 'месяц', 'месяца', 'месяцев')}`);
  parts.push(`${nf.format(days)} ${plural(days, 'день', 'дня', 'дней')}`);
  parts.push(`${nf.format(hours)} ${plural(hours, 'час', 'часа', 'часов')}`);
  parts.push(`${nf.format(minutes)} ${plural(minutes, 'минута', 'минуты', 'минут')}`);
  parts.push(`${nf.format(seconds)} ${plural(seconds, 'секунда', 'секунды', 'секунд')}`);

  return parts.join(', ');
}

const newYear = getNewYearDate();

function updateTimer() {
  const now = new Date();
  let diff = newYear - now;

  if (diff <= 0) {
    timerEl.textContent = 'С Новым годом!';
    clearInterval(intervalId);
    return;
  }

  const units = splitDiffToUnits(diff);
  timerEl.textContent = formatUnits(units);
}

updateTimer();
const intervalId = setInterval(updateTimer, 1000);