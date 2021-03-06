const generate_avatar = function (options) {
  /*
   * options = { "gender": "male" , "id":xxx}
   *
   */
  var baseURL =
    "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/"
  var gender, id

  if (typeof options != "undefined" && options) {
    //If options are given but one of them is skipped
    if (typeof options.gender === "undefined") {
      gender = getRandomInt(0, 1) % 2 ? "male" : "female"
    } else {
      gender = getGender(options.gender)
    }

    if (typeof options.id === "undefined") {
      id = getRandomInt(
        1,
        gender === "male" ? 100 : 100
      )
    } else {
      id =
        options.id %
        Math.round(
          gender === "male"
            ? 100 + 1
            : 100 + 1
        )
      id = id === 0 ? 1 : id
    }
  } else {
    //If no options are given
    gender = getRandomInt(0, 1) % 2 ? "male" : "female"
    id = getRandomInt(
      1,
      gender === "male" ? 100 : 100
    )
  }
  return baseURL + gender + "/" + id + ".png"
}

function getGender(gender) {
  gender = gender.trim().toLowerCase()
  if (gender === "male" || gender === "m") {
    return "male"
  } else if (gender === "female" || gender === "f") {
    return "female"
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
