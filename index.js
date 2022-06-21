/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
const createEmployeeRecord = (array)=>{
    return{
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}
const createEmployeeRecords = (employeeData)=>{
    return employeeData.map((array)=>{
        return createEmployeeRecord(array)
    })
}
let createTimeInEvent = function(dateLabel){
    let [date, hour] = dateLabel.split(' ')

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })

    return this
}
let createTimeOutEvent = function(dateLabel){
    let [date, hour] = dateLabel.split(' ')

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })

    return this
}

let hoursWorkedOnDate = function(wantedDate){
    let arriving = this.timeInEvents.find(function(e){
        return e.date === wantedDate
    })

    let leaving = this.timeOutEvents.find(function(e){
        return e.date === wantedDate
    })

    return (leaving.hour - arriving.hour) / 100
}
let wagesEarnedOnDate = function(wantedDate){
    let Wage = hoursWorkedOnDate.call(this, wantedDate)
        * this.payPerHour
    return parseFloat(Wage.toString())
}
let findEmployeeByFirstName = function(array, firstName) {
    return array.find(function(rec){
      return rec.firstName === firstName
    })
  }
  let calculatePayroll = function(arrayOfEmployees){
    return arrayOfEmployees.reduce(function(memo, record){
        return memo + allWagesFor.call(record)
    }, 0)
}