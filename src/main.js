const main = async (client) => {
  const url = 'https://api.github.com/search/users?q=tom+repos:%3E42+followers:%3E1000'
  await client.makeCall(url)
}

module.exports = main
