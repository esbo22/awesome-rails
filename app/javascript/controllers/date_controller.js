import { Controller } from "stimulus"

export default class extends Controller {

  connect() {
    this.element.placeholder = "DD/MM/YYYY"
    new Cleave(this.element, {
      date: true,
      datePattern: ["d", "m", "Y"]
    })
  }

}
