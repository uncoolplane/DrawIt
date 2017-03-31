console.log('XXXXXXXXXXXXXXXX   user logged in', profile);
db.get_user_facebook([profile.id], function(err, user) {
  if(err) {
    console.log('getFacebookUser', id, err);
    return done(err);
  }

  if(user) {
    return done(null, user);
  } else {
    //name, email, password, profiletoken, facebookid
    db.insert_user([profile.name.givenName + ' ' + profile.name.familyName,
    profile.emails[0].value,
    '',
    token,
    profile.id], function(err, user) {
      if(err) {
        console.log('getNewFacebookUser', id, err);
        return done(err);
      }

      return done(null, {
        name: profile.name.givenName + ' ' + profile.name.familyName,
        email: profile.emails[0].value,
        password: '',
        profiletoken: token
      })
    })
  }
