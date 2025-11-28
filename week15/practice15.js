import { formatUtcDateToBrowserLocalReserve} from './utils';

async function loadPeriod() {

    const get = await getTime()
    // check current period
    const currentPeriodStatus = document.getElementById("open")
    if(!get.currentPeriod){
        currentPeriodStatus.textContent = 'closed'
        currentPeriodStatus.classList.add("close")
    }else{
        currentPeriodStatus.classList.remove("close")
            // current
        const start = document.getElementById("current_period")
        //start and endtime
        const currentStart = get.currentPeriod.startDateTime
        const currentStartTime = formatUtcDateToBrowserLocalReserve(currentStart) //do in function
        const currentEnd = get.currentPeriod.endDateTime
        const currentEndTime = formatUtcDateToBrowserLocalReserve(currentEnd) //do in function
        //call time 
        start.textContent = `Period: ${currentStartTime.formattedDate}, ${currentStartTime.formattedTime} - ${currentEndTime.formattedDate} , ${currentEndTime.formattedTime} , ${currentStartTime.userTimeZoneName}` 

    }
    

    console.log(get)

    //check next period
    const nextPeriodMessage = document.querySelector('.next-message')
   
    console.log(get.nextPeriod)
    if(!get.nextPeriod){
        nextPeriodMessage.textContent = 'There are no upcoming active reservation periods.'
        // console.log("dawdaw")
        
    }
    else{
        // console.log('kuy')
            // next
        nextPeriodMessage.style.color = 'black'    
        const end = document.getElementById("next-period")
        //start
        const nextStart = get.nextPeriod.startDateTime
        const nextStartTime = formatUtcDateToBrowserLocalReserve(nextStart)
        // end
        const nextEnd = get.nextPeriod.endDateTime
        const nextEndTime = formatUtcDateToBrowserLocalReserve(nextEnd)
        

        end.textContent = `Period: ${nextStartTime.formattedDate}, ${nextStartTime.formattedTime} - ${nextEndTime.formattedDate} , ${nextEndTime.formattedTime} , ${nextEndTime.userTimeZoneName} `

    }

 
}

// fetch
async function getTime(){
    
    const response = "https://bscit.sit.kmutt.ac.th/intproj25/nw1/itb-ecors/api/v1/reservation-periods";
    try{
        const time = await fetch(response);
        if(!time.ok){
            throw new Error(`Response status: ${time.status}`)
        }
        
        const result = await time.json()
        console.log(result)

        return result

    }catch(error){
        console.error(error.message);
    }

}

loadPeriod()





