const formatDate = (time, short = false) => {
  const date = new Date(time)
  const year = date.getFullYear()
  let month = date.getMonth()
  const day = date.getDate()

  if (month === 1) {
    month = "January"
  } else if (month === 2) {
    month = "February"
  } else if (month === 3) {
    month = "March"
  } else if (month === 4) {
    month = "April"
  } else if (month === 5) {
    month = "May"
  } else if (month === 6) {
    month = "June"
  } else if (month === 7) {
    month = "July"
  } else if (month === 8) {
    month = "August"
  } else if (month === 9) {
    month = "September"
  } else if (month === 10) {
    month = "October"
  } else if (month === 11) {
    month = "November"
  } else if (month === 12) {
    month = "December"
  }

  return short ? `${month} ${year}` : `${month} ${getSuffix(day)}, ${year}`
}

const getSuffix = i => {
  let j = i % 10,
    k = i % 100
  if (j === 1 && k !== 11) {
    return i + "st"
  }
  if (j === 2 && k !== 12) {
    return i + "nd"
  }
  if (j === 3 && k !== 13) {
    return i + "rd"
  }
  return i + "th"
}

export { formatDate }
