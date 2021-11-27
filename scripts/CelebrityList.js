import { getCelebrities } from "./database.js"
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("celebrity")) {
            const [,celebrityId] = itemClicked.id.split("--")

            for (const celebrity of celebrities) {
                if (celebrity.id === parseInt(celebrityId)) {
                    window.alert(`${celebrity.name} plays ${celebrity.sport}`)
                }
            }
        }
    }
)
const celebrities = getCelebrities()

export const Celebrities = () => {
    let html = "<ol>"

  for (const celebrity of celebrities) {
    html += `<li id="celebrity--${celebrity.id}">${celebrity.name}</li>`
    }
  
    html += "</ol>"
    return html
}
