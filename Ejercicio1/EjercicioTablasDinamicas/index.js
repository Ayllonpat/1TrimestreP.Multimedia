$(document).ready(function () {
  
    $("#btn-add-fila").on("click", function () {
        
        let columnas = $("thead tr th").length
        let nuevaFila= "<tr>"

        for (let i = 1; i<= columnas; i++){
            nuevaFila += "<td>Fila" + "</td>"
        }

        nuevaFila += "<tr>"

        $("tbody").append(nuevaFila)
    });
  
    $("#btn-remove-fila").on("click", function () {
        
        if($("tbody tr").length > 0){
            $("tbody tr:last").remove()
        }

    });

    $("#btn-add-col").on("click", function () {
        
        $("thead tr").append("<th>Columna"+"</th>")
        
        $("tbody tr").each(function(){
            $(this).append("<td>Fila" + "</td>")
        })
    });

    $("#btn-remove-col").on("click", function () {
        
        $("thead tr th:last").remove()

        $("tbody tr").each(function(){
            $(this).find("td:last").remove()
        })
    });

  });