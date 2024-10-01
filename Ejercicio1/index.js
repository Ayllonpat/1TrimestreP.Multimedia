$(document).ready(function () {

    // Selector de clase (.)
  
    $(document).on("click", "#btn-dark", function () {
      $("body").addClass("yellow");
    });
  
    $(document).on("click", "#btn-light", function () {
      $("body").removeClass("yellow");
    });

   
  });