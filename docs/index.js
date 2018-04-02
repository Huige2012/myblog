
$(function () {

      //var h = window.screen.height;

      //$('body').css('height',h+"px")
      

      // year 

      var date1 = new Date(); //开始时间 
      date1.setFullYear(2018, 0, 1)
      var date2 = new Date(); //结束时间 
      var date3 = date2.getTime() - date1.getTime()
      var days = Math.floor(date3 / (24 * 3600 * 1000))

      // calculation progress 
      var dayCount = days;
      var pass = dayCount / 365 * 100;
      var progress = 100 - pass;

      $('#pass').html(pass.toFixed(2));
      $("#yProgress").css({ 'width': progress + '%' });



      // month

      var nowMonth = moment().format("YYYY-MM");     // 当月
      var nowDay = moment().format("DD");            // 当天 
      var monthDayCount = moment(nowMonth).daysInMonth();    // 今天几号   
      var hour = moment().hour();                            // 今天几点

      var monthHourTotal = monthDayCount * 24;
      var passHour = (nowDay * 24 - (24 - hour));

      var remainHour = monthHourTotal - passHour;
      var monthProgress = remainHour / monthHourTotal * 100;

      $('#monthPass').html(monthProgress.toFixed(2));
      $("#mProgress").css({ 'width': monthProgress + '%' });

    });