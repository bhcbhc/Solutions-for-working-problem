/**
 * Created by Ninghai on 2017/5/10.
 */
+function () {
    $("#export-Btn").on('click', function () {
        kendo.drawing.drawDOM($('#pdf-export'))
            .then(function (group) {
                return kendo.drawing.exportPDF(group, {
                    pageSize: 'auto',
                    margin: {left: '1cm', top: '1cm', right: '1cm', bottom: '1cm'}
                });
            })
            .done(function (data) {
                kendo.saveAs({
                    dataURI: data,
                    fileName: '测试.pdf',
                    proxyURL: '//demos.telerik.com/kendo-ui/service/export'
                });
            });
    });
}();