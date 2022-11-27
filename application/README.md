## Проект Запись на прием

- Интерактивный макет:
https://www.figma.com/proto/d0wKin6ELHk5aGm3E9IxZz/%D0%9F%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F-%D0%A1%D0%BC%D0%BE%D1%80%D0%BE%D0%B4%D0%B8%D0%BD%D0%B0?page-id=611%3A6130&node-id=617%3A6132&viewport=493%2C454%2C0.04&scaling=min-zoom&starting-point-node-id=617%3A6132

## Запуск самого проекта

- Из дериктории application -> yarn install

- Из дериктории application -> yarn start

## Запуск тестового сервера, чтобы данные из тестовой базы приходили

- Из дериктории server (из основной) -> yarn run dev

## Описание

- Проект написан с использованием технологий: React, TypeScript, GraphqQL + Apollo, Formik, Styled-components, Material UI Core

## Важно

- Данные сейчас приходят только в раздел "Пользователи" -> это просто тестовые данные, чтобы проверить связку данного приложения на React и БД с GraphQl

- Также при клике на кнопку "Войти" в форме авторизации отправляется мутация в graphQl, чтобы также просто проверить, что приложение на React, может записать данные в БД и получить какой-то результат.