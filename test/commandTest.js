let intervalId = {}

/**
 * @param {String} input
 * @param {*} connection
 */
function command (input, io) {
  // General command
  if (input.startsWith('!')) {
    let sections = input.split(' ')

    return io.emit('pi', packet(sections[1], sections[2].toLowerCase() === 't'))
  }

  if (input.startsWith('@')) {
    let sections = input.split(' ')

    return io.emit('pi', packet(sections[1], sections[2]))
  }

  if (input.startsWith('#')) {
    let sections = input.split(' ')

    return io.emit('pi', packet(sections[1], Number(sections[2])))
  }

  if (input.startsWith('$')) {
    let sections = input.split(' ')
    let [, name, min, max, time] = sections

    clearInterval(intervalId[name])
    intervalId[name] = setInterval(() => io.emit('pi',
      packet(name, Math.random() * (max - min) + min)),
      time
    )
    return
  }

  if (input.startsWith('%')) {
    let sections = input.split(' ')

    let [, name] = sections
    clearInterval(intervalId[name])
  }
}

const startTime = Date.now()

function packet (name, value) {
  let json = JSON.stringify({
    time: Date.now() - startTime,
    sensor: name,
    data: [value]})
  console.log(json)
  return json
}

module.exports = command
