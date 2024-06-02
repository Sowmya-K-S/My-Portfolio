// Function to change mode

let mode_div = document.querySelector(".mode-change");
let mode = document.querySelector("#mode");


function setMode(mode) {
    localStorage.setItem('mode', mode);
  }
  
  // Function to retrieve the mode from localStorage
  function getMode() {
    return localStorage.getItem('mode');
  }
  
  // Function to apply mode based on stored mode
  function applyMode() {
    let storedMode = getMode();
    console.log(storedMode)
    if (storedMode === 'dark' || storedMode === 'null' ) {
      enableDarkMode();
    } else {
      enableLightMode();
    }
  }
  
  // Function to enable dark mode
  function enableDarkMode() {
    mode.classList.remove("bx-moon");
    mode.classList.add("bx-sun");
    document.documentElement.style.setProperty('--primary-bg-color', '#000');
    document.documentElement.style.setProperty('--primary-font-color', '#fff');
    document.documentElement.style.setProperty('--primary-b1', '#f95150');
    document.documentElement.style.setProperty('--primary-b2', '#1b3481');
    document.documentElement.style.setProperty('--primary-b3', '#0B5345');

    setMode('dark'); // Store the mode
  }
  
  // Function to enable light mode
  function enableLightMode() {
    mode.classList.remove("bx-sun");
    mode.classList.add("bx-moon");
    document.documentElement.style.setProperty('--primary-bg-color', '#fff');
    document.documentElement.style.setProperty('--primary-font-color', '#000');
    document.documentElement.style.setProperty('--primary-b1', '#F4D03F');
    document.documentElement.style.setProperty('--primary-b2', '#2ECC71');
    document.documentElement.style.setProperty('--primary-b3', '#E67E22');

    setMode('light'); // Store the mode
  }
  
  // Event listener for mode changer
  mode_div.addEventListener('click', function () {
    if (mode.classList.contains("bx-moon")) {
      enableDarkMode();
    } else {
      enableLightMode();
    }
  });
  
  // Apply mode on page load
  applyMode();

  
//*********************************************************************************************************************


  //function to change time

  let interval0, interval1, interval2, interval3
  let start_button = document.querySelector(".start")
  let second = document.querySelector('.second')
  let minute = document.querySelector('.minute')
  let hour = document.querySelector('.hour')
  let millisecond = document.querySelector('.millisecond')


  function changeTime()
  {
    //changing button text and class
    start_button.classList.remove('start')
    start_button.classList.add('stop')
    start_button.innerText = 'Stop'


    //making split/lap button visible
    let split_Button = document.querySelector(".split")
    split_Button.style.display = "inline-block"


    //changing time

    //changing milliseconds
    interval0 = setInterval(() => {
      if(Number(millisecond.innerText)<9)
        millisecond.innerText = "0" +  String(Number(millisecond.innerText)+1)
      else
        millisecond.innerText = String(Number(millisecond.innerText)+1)
    }, 10)


    //changing seconds

     interval1 = setInterval(() => {

        millisecond.innerText = "00"

        if(Number(second.innerText)<9)
            second.innerText = "0" + String(Number(second.innerText)+1)
        else
            second.innerText = String(Number(second.innerText)+1)
     },1000)

    
     //change minutes
     interval2 = setInterval(() => {

            millisecond.innerText = "00"
            second.innerText = "00"
            
            if(Number(minute.innerText)<9)
                minute.innerText = "0" + String(Number(minute.innerText)+1)
            else
                minute.innerText = String(Number(minute.innerText)+1)

     },60000)


     //changes hours
     interval3 = setInterval(() => {

        second.innerText = "00"
        minute.innerText = "00"

        if(Number(hour.innerText)<9)
            hour.innerText = "0" + String(Number(hour.innerText)+1)
        else
            hour.innerText = String(Number(hour.innerText)+1)

      },360000)

}

function stopChangeTime()
{
    //changing button text and class
    start_button.classList.remove('stop')
    start_button.classList.add('start')
    start_button.innerText = 'Start'
    
    //clearing all the intervals
    clearInterval(interval0)
    clearInterval(interval1)
    clearInterval(interval2)
    clearInterval(interval3)

    //making split/lap button invisible
    let split_Button = document.querySelector(".split")
    split_Button.style.display = "none"
}



start_button.addEventListener('click', function() {
  if (start_button.classList.contains("stop")) {
      stopChangeTime();
  } else {
      changeTime();
  }
});



//function to split
let split_button = document.querySelector('.split')

//initialise the variables to store time values of prev split
let prev_millisecond = 0;
let prev_second = 0;
let prev_minute = 0;
let prev_hour = 0;

function splitTime()
{
  //extract the time
  let display_millisecond = millisecond.innerText
  let display_second = second.innerText
  let display_minute = minute.innerText
  let display_hour = hour.innerText
  let lap_milisecond
  let lap_second
  let lap_minute
  let lap_hour

  //create 2 elements and throw it to the front end
  let split_time = document.createElement('div')
  split_time.innerHTML = `<span>${display_hour} : ${display_minute} : ${display_second} : ${display_millisecond}</span>`

  let lap_time = document.createElement('div')


  if(Math.abs(Number(display_hour)-prev_hour)<9)
    lap_hour = "0"+Math.abs(Number(display_hour)-prev_hour)
  else
    lap_hour = Math.abs(Number(display_hour)-prev_hour)


  if(Math.abs(Number(display_minute)-prev_minute)<9)
    lap_minute = "0"+Math.abs(Number(display_minute)-prev_minute)
  else
    lap_minute = Math.abs(Number(display_minute)-prev_minute)


  if(Math.abs(Number(display_second)-prev_second)<9)
    lap_second = "0"+Math.abs(Number(display_second)-prev_second)
  else
    lap_second = Math.abs(Number(display_second)-prev_second)


  if(Math.abs(Number(display_millisecond)-prev_millisecond)<9)
    lap_milisecond = "0"+Math.abs(Number(display_millisecond)-prev_millisecond)
  else
    lap_milisecond = Math.abs(Number(display_millisecond)-prev_millisecond)

  lap_time.innerHTML = `<span>${lap_hour} : ${lap_minute} : ${lap_second} : ${lap_milisecond}</span>`

  //extract the main div of split and lap
  let main_lap_split = document.querySelector(".lap-split-times")

  //setting its display value
  main_lap_split.style.display = "flex"

  //extract parent element
  let parent_split_time_div = document.querySelector('.split-time')
  let parent_lap_time_div = document.querySelector('.lap-time')

  //append the child element
  parent_split_time_div.appendChild(split_time)
  parent_lap_time_div.appendChild(lap_time)

  //update values of prev variables
  prev_millisecond = Number(display_millisecond);
  prev_second = Number(display_second);
  prev_minute = Number(display_minute);
  prev_hour = Number(display_hour);

    
}

split_button.addEventListener('click',splitTime)



//function to reset

let reset_button = document.querySelector('.reset')
function restTime()
{
  // to bring the button and time to initial state

  //clearing intervals
  clearInterval(interval0)
  clearInterval(interval1)
  clearInterval(interval1)
  clearInterval(interval2)
  clearInterval(interval3)

  //changing button text and class
  start_button.classList.remove('stop')
  start_button.classList.add('start')
  start_button.innerText = 'Start'

  // setting text to initial value
  second.innerText = '00'
  minute.innerText = '00'
  hour.innerText = '00'
  millisecond.innerText = '00'

  //extract the main div of split and lap
  let main_lap_split = document.querySelector(".lap-split-times")

  //setting its display value
  main_lap_split.style.display = "none"

  //extract parent element
  let parent_split_time_div = document.querySelector('.right-part')
  let parent_lap_time_div = document.querySelector('.left-part')

  //clearing all the lap and split times and keeping only the headings
  parent_split_time_div.innerHTML = `<h3>Split Time</h3> <div class="split-time"></div>`
  parent_lap_time_div.innerHTML =  `<h3>Lap Time</h3><div class="lap-time"></div>`

  //making split/lap button invisible
  let split_Button = document.querySelector(".split")
  split_Button.style.display = "none"

  prev_millisecond = 0;
  prev_second = 0;
  prev_minute = 0;
  prev_hour = 0;
}

reset_button.addEventListener('click',restTime)



  