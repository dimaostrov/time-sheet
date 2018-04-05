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


$('#submit').on('click', function(){
    var name = $('#employeeNameInput').val(); 
    var role = $('#roleInput').val();
    var startDate = $('#startInput').val();
    var monthlySalary = $('#rateInput').val();
    var monthsTotal = parseInt(moment(startDate, "MMDDYY").fromNow().split(' ')[0]) * 12;
    //total billed
    var tr = $('<tr>');
    tr.append
});