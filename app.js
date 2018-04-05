var config = {
    apiKey: "AIzaSyCQG1sEbCVYYmCxBlhbY0ACZsP25BHh0u0",
    authDomain: "privet-83a48.firebaseapp.com",
    databaseURL: "https://privet-83a48.firebaseio.com",
    projectId: "privet-83a48",
    storageBucket: "privet-83a48.appspot.com",
    messagingSenderId: "864513816118"
  };
firebase.initializeApp(config);

const database = firebase.database();
var count = 1

$('#addEmployeeBtn').on('click', function(){
    var name = $('#employeeNameInput').val(); 
    var role = $('#roleInput').val();
    var startDate = $('#startInput').val();
    var monthlySalary = $('#rateInput').val();
    var monthsTotal = parseInt(moment(startDate, "MMDDYY").fromNow().split(' ')[0]) * 12;
    var totalBilled = monthsTotal * monthlySalary;
    
    let newPostRef = database.ref('/child')
    database.ref().push({
        name: name,
        role: role,
        startDate: startDate,
        monthlySalary: monthlySalary,
        monthsTotal: monthsTotal,
        totalBilled: totalBilled
    });
});

database.ref().on('value', (snapshot)=>{
  Object.values(snapshot.val()).map(x => {
    $('#tbody').append(`<tr>
      <th>${x.name}</th>
      <th>${x.role}</th>
      <th>${x.startDate}</th>
      <th>${x.monthlySalary}</th>
      <th>${x.monthsTotal}</th>
      <th>${x.totalBilled}</th>
    </tr>`)
    
  })
})