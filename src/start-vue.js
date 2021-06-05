const net = require('net')
// const childProcess = require('child_process')
// const spawn = require('child_process').spawn
const spawn = require('cross-spawn')


const port = process.env.PORT ? process.env.PORT - 100 : 3000

process.env.ELECTRON_START_URL = `http://localhost:${port}`
// process.env.ELECTRON_START_URL = `http://localhost:3000`

const client = new net.Socket()

let startedElectron = false
const tryConnection = () => {
  client.connect({ port }, () => {
    client.end()
    if (!startedElectron) {
      console.log('starting electron')
      startedElectron = true
      // const exec = childProcess.exec
      // exec('npm run electron')

      electron_main_proc = spawn('npm run electron')
      electron_main_proc.stdout.on('data', function (data) {
        console.log('stdout: ' + data.toString())
      })

      electron_main_proc.on('error', function (err) {
        console.log('err: ' + err)
      })


      console.log('electron run!')
    }
  })
}


tryConnection()

client.on('error', () => {
  setTimeout(tryConnection, 1000)
})