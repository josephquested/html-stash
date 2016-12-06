module.exports = {
  pack,
  unpack
}

function pack (data) {
  return `<div id="stashtml" ${mapData(data)} ></div>
  `
}

function unpack () {
  return Object.assign({}, document.getElementById('stashtml').dataset)
}

function mapData (data) {
  var keys = Object.keys(data)
  return keys.map((key) => {
    return ` data-${key}="${data[key]}"`
  })
}
