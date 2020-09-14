
//jQuery(document)

$(document).ready(() => {
    let table = $("#changes_table").DataTable({
        ajax: {
            type: "GET",
            datatype: "json",
            url: "/product_changes-parameter-sets",
            dataSrc: ""
        },
        rowId: "_id",
        columns: [
            {data: "_id", type: "readonly", visible: false},
            {data: "products", type: "text", required: true},
            {data: "reason", type: "text", required:true},
            {data: "change", type: "text", required:true},
            {data: "additional_information", type: "text", required:true}
        ],

        dom: "Bfrtip",
        select: "single",
        responsive: true,
        altEditor: true,
        buttons: [
            "columnsToggle",
            {
                text: "Create",
                name: "add"
            },
            {
                text: "Edit",
                name: "edit"
            },  {
                text: "Delete",
                name: "delete"
            },  {
                text: "Refresh",
                name: "refresh"
            }
            

        ],
        onAddRow: (datatable, rowdata, success, error)=>{
            $.ajax({
                url: "/product_changes-parameter-set/",
                type: "POST",
                data: rowdata,
                success: success,
                error: error
            });
        },
        onDeleteRow: (datatable, rowdata, success, error)=>{
            $.ajax({
                url: "/product_changes-parameter-set/" + rowdata._id,
                type: "DELETE",
                data: rowdata,
                success: success,
                error: error
            });
        },
        onEditRow: (datatable, rowdata, success, error)=>{
            $.ajax({
                url: "/product_changes-parameter-set/" + rowdata._id,
                type: "PUT",
                data: rowdata,
                success: success,
                error: error
            });
        },


    });
});