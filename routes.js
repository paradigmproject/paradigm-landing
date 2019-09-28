const routes = require("next-routes");

module.exports = routes()
    .add("index", "/")
    .add("contact", "/contact")
    .add("auth", "/auth")
    .add("terms-of-service", "/terms-of-service")
    .add("privacy-policies", "/privacy-policies");