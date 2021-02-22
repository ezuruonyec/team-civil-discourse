/** Google Passport routing to authenticate users
 * @module routes/authRoutes
 * @requires passport
 */


//  ██╗███╗   ███╗██████╗  ██████╗ ██████╗ ████████╗███████╗
//  ██║████╗ ████║██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝
//  ██║██╔████╔██║██████╔╝██║   ██║██████╔╝   ██║   ███████╗
//  ██║██║╚██╔╝██║██╔═══╝ ██║   ██║██╔══██╗   ██║   ╚════██║
//  ██║██║ ╚═╝ ██║██║     ╚██████╔╝██║  ██║   ██║   ███████║
//  ╚═╝╚═╝     ╚═╝╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚══════╝
//     
const passport = require("passport")

module.exports = (app) => {

    /**
     * Calls on Google Authentication to verify user
     * @name /authRoutes/auth/google
     * @function
     * @param {string} path - Express path
     * @param {callback} middleware - Express middleware.
     * @access public
     */
    app.get("/auth/google", passport.authenticate("google", {
        scope: ["profile", "email"],

    }))

    /**
     * Calls on Google Authentication to verify user and calls back to /admin
     * @name /authRoutes/auth/google/callback
     * @function
     * @param {string} path - Express path
     * @param {callback} middleware - Express middleware.
     * @access public
     */
    app.get(
        "/auth/google/callback",
        passport.authenticate("google"),
        (req, res) => {
            res.redirect("/admin")
        }
    )

    /**
     * Calls on Google Authentication to log out a user
     * @name /api/logout
     * @function
     * @param {string} path - Express path
     * @param {callback} middleware - Express middleware.
     * @access public
     */
    app.get("/api/logout", (req, res) => {
        req.logout()
        res.redirect("/")
    })

    /**
     * Calls on Google Authentication to get the current user
     * @name /api/current_user
     * @function
     * @param {string} path - Express path
     * @param {callback} middleware - Express middleware.
     * @access public
     */
    app.get("/api/current_user", (req, res) => {
        res.send(req.user)
    })
}
