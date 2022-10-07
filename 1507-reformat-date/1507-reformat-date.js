/**
 * @param {string} date
 * @return {string}
 */
 var reformatDate = function(date) {
 arrDate = date.split(" ")
 newForm = [] 
 for(i = 0 ; i <arrDate.length ; i++)
 {
  
  
 if(i == 0)
  {
    newDay =arrDate[i].split("")
     
    newDayWithOutletters = newDay.filter(a => {
      return !isNaN(a)  
    }) 
    if (newDayWithOutletters.length == 1)
    {
      newDayWithOutletters = newDay.filter(a => {
        return !isNaN(a)  
      }).map(a => '0'+a) 
    }
 
    
 
    newForm.unshift(newDayWithOutletters.join(""))
  }


  if(i == 2 )
  {
    newForm.unshift(+arrDate[i])

  }

if(i == 1)
{
   
   
  switch(arrDate[i])
  {
    case "Jan":
      newMonth = '01'
      break
      case "Feb":
      newMonth = '02'

      break
      case "Mar":
      newMonth = '03'

      break
      case "Apr":
      newMonth = '04'

      break
      case "May":
      newMonth = '05'

      break
      case "Jun":
      newMonth = '06'

      break
      case "Jul":
      newMonth = '07'

      break
      case "Aug":
      newMonth = '08'

        break
        case "Sep":
      newMonth = '09'

        break
        case "Oct":
      newMonth = '10'
 
          break
          case "Nov":
      newMonth = '11'

            break
            case "Dec":
      newMonth = '12'
              break
    
  }
  newForm.unshift(newMonth)

}


  }


 return newForm.join("-")
};


 