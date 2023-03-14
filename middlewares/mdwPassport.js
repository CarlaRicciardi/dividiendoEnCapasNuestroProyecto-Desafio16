// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
// const modelUser = require('../MODELS/user.js');
// const bcrypt = require('bcrypt');

// function isValidPassword(user, password) {
//   return bcrypt.compareSync(password, user.password);
// }

// function createHash(password) {
//   return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
// }

// function checkAuthentication(req, res, next) {
//   if (req.isAuthenticated()) {
//     //este metodo lo trae passport, no esta declarada en el proyecto
//     next();
//   } else {
//     res.redirect('/login');
//   }
// }

// const passportInit = () => {
//   passport.use(
//     'login',
//     new LocalStrategy((username, password, done) => {
//       modelUser.findOne({ username }).then((user, err) => {
//         if (err) return done(err);

//         if (!user) {
//           console.log('❌User Not Found with username ' + username);
//           return done(null, false);
//         }
//         if (!isValidPassword(user, password)) {
//           console.log('Invalid Password❌');
//           return done(null, false);
//         }
//         return done(null, user);
//       });
//     }),
//   );

//   passport.use(
//     'signup',
//     new LocalStrategy(
//       {
//         passReqToCallback: true,
//       },
//       (req, username, password, done) => {
//         modelUser.findOne({ username: username }).then((user, err) => {
//           //la busco en la db a la persona
//           if (err) {
//             console.log('Error in SignUp: ' + err);
//             return done(err);
//           }
//           if (user) {
//             console.log('User already exists');
//             return done(null, false);
//           }
//           const newUser = {
//             username: username,
//             password: createHash(password),
//             name: req.body.name,
//             address: req.body.address,
//             age: req.body.age,
//             phone: req.body.phone,
//             url: req.body.url,
//           };
//           modelUser.create(newUser).then((userWithId, err) => {
//             if (err) {
//               console.log('Error in Saving user: ' + err);
//               return done(err);
//             }
//             console.log(user);
//             console.log('User Registration succesful');
//             return done(null, userWithId);
//           });
//         });
//       },
//     ),
//   );

//   passport.serializeUser((user, done) => {
//     done(null, user._id);
//   });
//   passport.deserializeUser((id, done) => {
//     modelUser.findById(id).then((user, err) => {
//       done(err, user);
//     });
//   });
// };

// module.exports = { passportInit, checkAuthentication };
