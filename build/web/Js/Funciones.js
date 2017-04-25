$(document).ready(function () {

    $('.Agregar').click(function () {

        var productos = [];


        var codigo = $('#codigo').val();
        var cantidad = $('#cantidad').val();

        if (cantidad > 0) {

            $.post('Consultar.jsp', {"Codigo": codigo, "Cantidad": cantidad}, function (datos) {

                $('.tabla').append('<tr>' + datos + '</tr>');



                $('tbody tr').each(function (valor) {

                    var ArregloProductos = {};
                    var Columna = $(this).find('td');

                    ArregloProductos.Codigo = Columna.filter(':eq(0)').text();
                    ArregloProductos.Nombre = Columna.filter(':eq(1)').text();
                    ArregloProductos.Cantidad = Columna.filter(':eq(2)').text();
                    ArregloProductos.Precio = Columna.filter(':eq(3)').text();
                    ArregloProductos.Total = Columna.filter(':eq(4)').text();
                    ArregloProductos.Iva = Columna.filter(':eq(5)').text();
                    ArregloProductos.Costo = parseInt(Columna.filter(':eq(6)').text());

                    productos.push(ArregloProductos);
                });


                var Suma = {};
                Suma.productos = productos;

                var sum = 0;

                $.each(productos, function (suma, valor) {

                    sum = parseInt(sum);
                    sum += valor.Costo;

                });

                $('#Total').html(sum);
                console.log(Suma);


                $('#Validar').remove();

                $('.Eliminar').click(function () {

                    /*    var num = $(this).parents('tr').find('.costo').html();
                     
                     num = parseInt(num);
                     
                     var total = $('#Total').html();
                     
                     total = parseInt(total);
                     
                     var resta = total-num; */




                    $(this).parents('tr').remove();
                    //    $('#Total').html(resta);

                    /*    $.each(productos, function(suma, valor){
                     
                     sum = parseInt(sum);
                     sum+= valor.Costo;
                     $('#Total').html(sum);
                     
                     
                     });  */


                });

            });

        } else {

            var mensaje = "<p>La cantidad miníma debe ser 1</p>";
            $('#Validar').html(mensaje).css('color', 'red');

        }

    });




});

