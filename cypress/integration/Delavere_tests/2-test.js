describe('Один длинный автотест', function () {
    it('Поехали', function () {
     cy.visit('https://testqastudio.me/');
     cy.get('.post-11342 > .product-inner > .product-summary > .woocommerce-loop-product__title > .woocommerce-LoopProduct-link').click();
     cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase > svg').dblclick();
     cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
     cy.get('.header-left-items > .site-branding > .logo > .logo-dark').click();
     cy.get('.post-11337 > .product-inner > .product-summary > .woocommerce-loop-product__title > .woocommerce-LoopProduct-link').click();
     cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
     cy.get('.header-right-items > .header-cart > a > .razzi-svg-icon > svg').click;
     cy.get('.woocommerce-mini-cart__buttons > [href="https://testqastudio.me/cart/"]').should('be.visible').click();
     cy.get('.checkout-button').click();
     cy.get('#billing_first_name').type('Ольга');
     cy.get('#billing_last_name').type('Игнатьева');
     cy.get('#billing_address_1').type('18, Дачный проспект');
     cy.get('#billing_city').type('Санкт-Петербург');
     cy.get('#billing_state').type('Санкт-Петербург');
     cy.get('#billing_postcode').type('198214');
     cy.get('#billing_phone').type('89818982589');
     cy.get('#billing_email').type('german@dolnikov.ru');
     cy.get('#place_order').click();
     cy.contains('Ваш заказ принят. Благодарим вас.');
    })

})
