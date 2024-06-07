import "./components"
import "./reset.scss"
import "./app.scss"
import { Counter } from "./components"

const environment = process.env.NODE_ENV
const isDevelopment = environment === "development"

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<h1>Vite + TypeScript</h1>
<div id="counter" is="my-counter">
  <span slot="increase">+1</span>
  <span slot="decrease">-1</span>
</div>
`

const counterRef = document.querySelector<Counter>("#counter")!
counterRef.addEventListener(
  "counter-click",
  (e) => (counterRef.count += e.detail.count),
)

const wss = new WebSocket(isDevelopment ? "ws://localhost:3000" : "")

wss.addEventListener("open", () => {
  wss.send("I'm Client")
})

wss.addEventListener("message", (e) => {
  console.log(e.data)
})
