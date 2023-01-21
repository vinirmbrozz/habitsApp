const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const hoje = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const diaExiste = nlwSetup.dayExists(hoje)

  if (diaExiste) {
    alert("Dia já existente no painel ❌")
    return
  }

  alert("Dia adicionado com sucesso ✅")
  nlwSetup.addDay(hoje)
}

function save() {
  localStorage.setItem("NLWSetup@Habits", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@Habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()
