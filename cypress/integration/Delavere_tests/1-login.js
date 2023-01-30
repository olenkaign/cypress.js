describe('Тестирование формы логина', function () {
    it('Позитивный тест на верный логин и пароль', function () {
     cy.visit('https://login.qa.studio/');
     cy.get('#mail').type('german@dolnikov.ru');
     cy.get('#pass').type('iLoveqastudio1');
     cy.get('#loginButton').click();
     cy.get('#messageHeader').contains('Авторизация прошла успешно');
     cy.get('#exitMessageButton > .exitIcon');
     cy.get('#exitMessageButton > .exitIcon').click();
     cy.contains('Форма логина');
    })

    it('Проверка логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.contains('Восстановите пароль');
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();
        cy.contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').click();
        cy.contains('Форма логина');
       })

    it('Негативный тест на верный логин и не верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon');
        cy.get('#exitMessageButton > .exitIcon').click();
        cy.contains('Форма логина');
       })

       it('Негативный тест на не верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikova.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon');
        cy.get('#exitMessageButton > .exitIcon').click();
        cy.contains('Форма логина');
       })

       it('Негативный тест валидации', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
       })

       it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon');
        cy.get('#exitMessageButton > .exitIcon').click();
        cy.contains('Форма логина');
       })

        
})
