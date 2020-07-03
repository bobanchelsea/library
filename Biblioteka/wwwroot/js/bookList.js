var dataTable;
$(document).ready(function () {
    loadDataTable();
});

function loadDataTable() {
    dataTable = $('#DT_load').dataTable({
        "ajax": {
            "url": "/api/book",
            "type": "GET",
            "datatype": "json"
        },
        "columns": [
            { "data": "name", "width": "20%" },
            { "data": "author", "width": "20%" },
            { "data": "isbn", "width": "20%" },

            {
                "data": "id",
                "render": function (data) {
                    return `<div class="text-center">
                    <a href="/BookList/Edit?id=${data}" class='btn btn-success text-white' style='cursor:pointer; width:100px;'>
                        Izmeni
                    </a>
    
                     &nbsp;
    
                    <a class='btn btn-danger text-white' style='cursor:pointer; width:70px;'
                        onclick=Delete('/api/book?id='+${data})>
                        Izbrisi
                    </a>
                </div>`
                }, "width": "40%"
            }
        ],
        "language": {
            "emptyTable": "Nema podataka"
        },
        "width": "100%"
    });
}

function Delete(url) {
    swal({
        title: "Da li ste sigurni?",
        text: "Ukoliko obrisete, necete moci da vratite podatke",
        icon: "warning",
        buttons: true,
        dangerMode: true
    }).then((willDelete) => {
        if (willDelete) {
            $.ajax({
                type: "DELETE",
                url: url,
                success: function (data) {
                    if (data.success) {
                        toastr.success(data.message);
                        dataTable.ajax.reload();
                    }
                    else {
                        toastr.error(data.message);
                    }

                }
            });
        }
    });
}