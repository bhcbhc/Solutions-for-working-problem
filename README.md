# Solutions-for-working-problem
记录一些工作中遇到的问题及解决方案

#### 2017-05-10
1. 1 **使用kendo将页面元素导出为pdf时中文乱码问题**

![中文乱码](src/kendo_pdf/src/images/error1.png)

    解决方案：用微软雅黑替换kendo/styles/fonts/DejaVu下的DejaVuSans.ttf和DejaVuSans-Bold.ttf字体，同时保证被导出的元素含有字体样式（继承自body或自身添加）

[kendo导出pdf地址](http://docs.telerik.com/kendo-ui/framework/drawing/drawing-dom#configuration-Custom)

[PDF怎么支持中文](http://blog.csdn.net/miyawang21/article/details/59482889)

1. 2 **from表单制作文件上传修改```input[type="file"]```默认样式**

![](src/file_upload/src/image/origin.png)

    解决方案：设置input opacity:0,并且添加一个覆盖层```<input type="text" class="filename" readonly/>```

![](src/file_upload/src/image/fileUpload.png)

#### 2018-05-02
2. 1 **vue使用echart解决方案**
    + **整体分析:** 
    
       1 **需求**:
       
       若干柱状图、折线图、饼状图、堆积柱状图、自定义图表。实时更新数据，loading，noData效果。图表自适应窗口
       
       2 **思路**
       
       使用vuex 管理chart实例，state存储charts， 根据id获取实例， mutations add remove chart, 可以在组件存在期间操作echart 实例
    
    + 初始化echarts对象 操作echarts 对象
    
       ![](src/echarts/chart_init.png)
       #### state
       ![](src/echarts/state.png)
       #### getters
       ![](src/echarts/getters.png)
       #### mutations
       ![](src/echarts/mutations.png)
       
    + 事件监听，调整echart 大小
       #### 
       ![](src/echarts/resize.png)
       
    + 版本
       ####
       ![](src/echarts/version.png)
    