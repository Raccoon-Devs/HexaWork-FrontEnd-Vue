module.exports = {
    'Login fallido': function (browser) {
        browser.url("http://localhost:8087/")
        .windowMaximize()
        .setValue("#loginCorreo", "correo@gmail.com")
        .setValue("#loginPassword", "a5a5a5a5")
        .click("#loginAcceder")
        .assert.title("hexawork-vue")
        .assert.containsText("#app > div > main > div > div > div.v-snack.v-snack--active.v-snack--has-background.v-snack--top > div > div.v-snack__content", "Correo o contraseña inválido")
        .pause(1500)
    },
}