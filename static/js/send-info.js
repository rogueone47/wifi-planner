$('#form').one('submit', function(e){
    e.preventDefault();
    let data = [];
    for (let i = 0; i < $('#canvas').find("line").length; i++) {
        const e = $('#canvas').find("line")[i];
        let info = {
            'x1':e.x1.baseVal.value,
            'x2':e.x2.baseVal.value,
            'y1':e.y1.baseVal.value,
            'y2':e.y2.baseVal.value,
            'stroke': e.attributes.stroke.value,
        }
        data = [...data, info];
    }
    $("#svg-data").val(JSON.stringify(data));
    $("#width").val($("#canvas").width());
    $("#height").val($("#canvas").height());

    $(this).submit();
});