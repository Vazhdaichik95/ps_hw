'use strict';
function isValidAge (birthday) {
  const b = new Date(birthday);
  const now = new Date();

  return (now.getFullYear()-b.getFullYear() > 14) 
      || (now.getFullYear()-b.getFullYear() === 14 && now.getMonth() > b.getMonth())
      || (now.getFullYear()-b.getFullYear() === 14 && now.getMonth() === b.getMonth() && now.getDate() >= b.getDate());
}