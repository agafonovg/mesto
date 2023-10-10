/**
 * Настройки для подключения к серверу
 */
const token = 'cda30784-e8aa-4a1e-80cd-e6d1aa8c13ab';
const cohortId = 'cohort-76';

export const apiConfig = {
  baseUrl: `https://mesto.nomoreparties.co/v1/${cohortId}`,
  headers: {
    authorization: token,
    'Content-Type': 'application/json'
  }
};
