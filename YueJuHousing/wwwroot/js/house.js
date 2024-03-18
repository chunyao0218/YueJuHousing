var dataTable;
$(document).ready(function () {
    loadDataTable();
});

function loadDataTable() {
    debugger
    dataTable = $('#tblData').DataTable({
        "ajax": {
            url: '/admin/house/getall'
        },
        "columns": [
            { data: 'communityName', "width": "25%" },
            { data: 'category.name', "width": "10%" },
            { data: 'address', "width": "15%" },
            { data: 'houseAge', "width": "5%" },
            { data: 'squareMeters', "width": "5%" },
            { data: 'floor', "width": "5%" },
            { data: 'price', "width": "10%" },
            {
                data: 'id',
                "render": function (data) {
                    return `<div class="w-75 btn-group" role="group"> 
                    <a href="/admin/house/upsert?id=${data}" class="btn btn-primary mx-2"> <i class="bi bi-pencil-square"></i>Edit</a>
                    <a onClick=Delete('/admin/house/delete/${data}') class="btn btn-danger mx-2"> <i class="bi bi-trash-fill"></i>Delete</a>
                    </div>`
                },
                "width": "15%"
            }
        ]
    });
}

function Delete(url) {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: url,
                type: 'DELETE',
                success: function (data) {
                    dataTable.ajax.reload();
                    toastr.success(data.message);
                }
            })
        }
    })
}
