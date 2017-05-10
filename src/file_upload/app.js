/**
 * Created by Ninghai on 2017/5/10.
 */
$(function () {

    $(".filename").val("请选择文件...");
    $('.file-container input[type="file"]').change(function () {
        var filePath = $(this).val();
        if (filePath) {
            var arr = filePath.split('\\');
            var fileName = arr[arr.length - 1];
            $(".filename").val(fileName);
        } else {
            $(".filename").val("请选择文件...");
        }
    });

    //上传
    $('#beginLoad').on('click', function () {
        if (!$('.file-container input[type="file"]').val()) {
            alert("请确认文件已添加！");
            return;
        }
        var formData = new FormData($("#uploadForm")[0]);
        $.ajax({
            url: '',
            type: 'POST',
            cache: false,
            processData: false,
            contentType: false,
            data: formData,
            success: function (data) {
                var result = eval('(' + data + ')');
                console.log(result);
            }
        });
    });
});