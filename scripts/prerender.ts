import * as fs from 'fs'
import * as path from 'path'

const routes = ['/', '/palvelut', '/yhteystiedot', '/tietosuoja']
const template = fs.readFileSync('./dist/index.html', 'utf-8')

routes.forEach(route => {
  const folderPath = path.join('./dist', route === '/' ? '' : route)
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true })
  }
  fs.writeFileSync(path.join(folderPath, 'index.html'), template)
})