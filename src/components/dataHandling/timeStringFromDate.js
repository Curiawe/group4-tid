  /**
   * Create a String of format "HH:00" from a given Date object.
   * 
   * @param {Date} date 
   */
   function timeStringFromDate(date) {
    let hours = date.getHours();
    let time = "" + hours + ":00";
    return time;
  }

export default timeStringFromDate;