$(document).ready(function () {

    // Selector de clase (.)
  
    $(document).on("click", "#btn-dark", function () {
      $("body").addClass("bg-dark");
      $("p").addClass("text-white")
    });
  
    $(document).on("click", "#btn-light", function () {
      $("body").removeClass("bg-dark");
      $("p").removeClass("text-white")
    });


  });