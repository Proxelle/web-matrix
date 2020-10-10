import jsonData from './data.json'

let allMoney= []

const workTypes = [
    { name: 'Ремонт трубы', value: 1 }, 
    { name: 'Починка телевизора', value: 2 },
    { name: 'Ремонт компьютера', value: 3 },
    { name: 'Ремонт холодильника', value: 4 },
    { name: 'Починка стиральной машины', value: 5 }
]

const months = ['Январь', 'Февраль', 'Март', 'Апрель','Май', 'Июнь', 'Июль', 'Август','Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']

jsonData.forEach(item => allMoney.push(item))
document.addEventListener('DOMContentLoaded', () => {
    render()
})

function render () { 
    const currentDate = new Date
    const deysOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()

    for (let i = 0; i <= deysOfMonth; i++) {
        const rowDate = document.getElementById('row-date')
        const rowSum = document.getElementById('row-sum')

        addCellDate(rowDate, i, currentDate)
        addCellWork(i)
        addCellSum(rowSum, i)            
    }
    addColumnSumWorks()  
    addValuesInInputs()
}

function addCellDate (rowDate, i, currentDate) {    
    const createdTd = document.createElement('td')
    if (!i) createdTd.innerHTML = `Текущий месяц: ${months[currentDate.getMonth()]}` 
    else createdTd.innerHTML = i
    rowDate.appendChild(createdTd)
}

function addCellWork (i) {
    workTypes.forEach(item => {
        const row = document.getElementById(`row${item.value}`)
        const createdTd = document.createElement('td')

        if (!i) createdTd.innerHTML = item.name
        else {
            const createdInput = document.createElement('input')
            createdInput.setAttribute('id', `input-${item.value}-${i}`)
            createdInput.onchange = changeInput.bind({ type: item.value, day: i })
            createdInput.oninput = validateInput
            createdTd.appendChild(createdInput)
        }
        row.appendChild(createdTd)                 
    })
}

function addCellSum (addCellSum, i) {
    const createdTd = document.createElement('td')
    const sum = allMoney.reduce((sum, item) => item.day === i ? sum + item.money : sum, 0)
    createdTd.setAttribute('id', `day-sum-${i}`)
    if (!i) createdTd.innerHTML = 'Сумма за день:'  
    else createdTd.innerHTML = sum
    addCellSum.appendChild(createdTd)
}

function addColumnSumWorks () {
    workTypes.forEach((item, i) => {
        const row = document.getElementById(`row${item.value}`)
        const createdTd = document.createElement('td')
        const sum = allMoney.reduce((sum, item) => item.type === i + 1 ? sum + item.money : sum, 0)
        createdTd.setAttribute('id', `work-sum-${item.value}`)
        createdTd.innerHTML = sum        
        row.appendChild(createdTd)                 
    })
    const rowDate = document.getElementById('row-date')
    const createdTd = document.createElement('td')
    createdTd.innerHTML = 'Сумма по типу работы:'
    rowDate.appendChild(createdTd) 
}

function addValuesInInputs () {
    allMoney.forEach(item => {
        let input = document.getElementById(`input-${item.type}-${item.day}`)
        input.value = item.money
    })
}

function changeInput (e) {
    let value = Number(e.target.value)
    if (!Number.isInteger(value)) {
        e.target.value = (+e.target.value).toFixed(2)
        value = Number(e.target.value)
    } else e.target.value = (+e.target.value).toFixed(0)
    const type = this.type
    const day =  this.day
    const index = allMoney.findIndex(item => item.type === type && item.day === day)

    if (value && index > -1) allMoney[index].money = value
    else if (value) allMoney.push({ type, day: day, money: value })
    else allMoney.splice(index, 1)

    renderSum({ type, day })
}

function validateInput() {
    this.value = this.value.replace(/[^\d.]/g, '')
  }

function renderSum ({ type, day }) {
    let sumDay = 0
    let sumWorkType = 0

    allMoney.forEach(item =>{
        if (item.day === day) sumDay += item.money
        if (item.type === type) sumWorkType += item.money
    })

    const sumDayElement = document.getElementById(`day-sum-${day}`)
    const sumWorkTypeElement = document.getElementById(`work-sum-${type}`)

    sumDayElement.innerHTML = Number.isInteger(sumDay) ? sumDay : sumDay.toFixed(2)
    sumWorkTypeElement.innerHTML = Number.isInteger(sumWorkType) ? sumWorkType : sumWorkType.toFixed(2)
}