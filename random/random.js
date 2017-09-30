//getRandomDay: a function that gets a ranodm day
const getRandomDay = () => {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const randomIndex = Math.floor(Math.random() * daysOfWeek.length);
    const randomDay = daysOfWeek[randomIndex]
    
    return randomDay;
    
    //pulls a day based on its place on the integer of its possition 
};

const months = ["January", "Febuary", "March", "April", "May", "June", "July"]
const getRandomMonth = () =>{
    const randomIndex = Math.floor(Math.random() * months.length);
    const randomMonth = months[randomIndex];
    
    return randomMonth;
};

module.exports = {
    getRandomDay: getRandomDay,
    getRandomMonth: getRandomMonth,
};

