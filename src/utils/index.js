function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

export function formatSeconds (value) {
  var second = parseInt(value)
  var minute = 0
  var hour = 0
  var day = 0
  var year = 0
  if (second >= 60) {
    minute = parseInt(second / 60)
    second = parseInt(second % 60)
    if (minute >= 60) {
      hour = parseInt(minute / 60)
      minute = parseInt(minute % 60)
      if (hour >= 24) {
        day = parseInt(hour / 24)
        hour = parseInt(hour % 24)
        if (day >= 365) {
          year = parseInt(day / 365)
          day = parseInt(day % 365)
        }
      }
    }
  }
  var result = ''
  if (year > 0) {
    result = parseInt(year) + '年'
  }
  if (result.length > 0 || day > 0) {
    result += parseInt(day) + '天'
  }
  if (result.length > 0 || hour > 0) {
    result += parseInt(hour) + '时'
  }
  if (result.length > 0 || minute > 0) {
    result += parseInt(minute) + '分'
  }
  result += parseInt(second) + '秒'
  return result
}

export function fixNumeric (numeric, length) {
  return (Array(length).join('0') + numeric).slice(-length)
}

export default {
  formatNumber,
  formatTime,
  formatSeconds,
  fixNumeric
}
